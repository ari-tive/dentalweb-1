import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Headset, X, Send, MessageCircle, CalendarCheck } from 'lucide-react';

const SYSTEM_PROMPT = `You are a friendly, caring dental buddy for Smile's Clinic. 
Lead Doctor: Dr. Smiles
Clinic Name: Smile's Clinic
Phone: 9699766850
Address: Marine Drive, Mumbai, Maharashtra, India.
Hours: Mon-Sat 10am-9pm
Services: Multi-speciality care (Root Canal, Implants, Whitening, Orthodontics).
Appointment Booking: Via phone (9699766850), website booking form, or walk-in.
Emergency Contact: 9970352167

STRICT INSTRUCTIONS:
1. RESPONSE STYLE: Be warm, empathetic, and speak like a supportive friend. Always validate the user's concern first.
2. CONTENT: Focus 100% on answering the user's question or providing comfort. DO NOT suggest booking or dental appointments unless the user explicitly asks to schedule or visit ("I want to come in", "How do I book?", "I need an appointment").
3. REJECTION: If asked about non-dental topics, politely pivot: "I wish I could help with that, but I'm just a dental buddy! How can I help with your smile instead?"
4. LENGTH: Aim for 25–45 words per reply. Give helpful context, not just generic answers.
5. NO DIAGNOSIS: Never diagnose. Suggest a professional checkup ONLY if they seem very concerned.
6. HIDDEN TRIGGER: ONLY if the user explicitly says they want to book/schedule, include "___BOOK_NOW___" in your response. NEVER use this marker otherwise.
7. PHRASING: Avoid using the phrase "Book Now" in your visible text unless responding to a booking request. Talk naturally like a human buddy.`;


// Show booking card ONLY when AI explicitly outputs the marker
const detectsBookingIntent = (text) => /___BOOK_NOW___/.test(text);
const QUICK_REPLIES = [
  { label: "Book an Appointment", message: "I want to book an appointment" },
  { label: "View Our Services", message: "What services do you offer?" },
  { label: "Emergency Contact", message: "I have a dental emergency" },
];

export default function Chatbot() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! 👋 How can we help you today with your dental care?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Offset from default bottom-right
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const messagesEndRef = useRef(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const initialPos = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const startDrag = (e) => {
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    
    dragStartPos.current = { x: clientX, y: clientY };
    initialPos.current = { x: position.x, y: position.y };
    setIsDragging(true);
    hasMoved.current = false;
    
    document.body.style.userSelect = 'none';
  };

  useEffect(() => {
    const handleMove = (e) => {
      if (!isDragging) return;
      
      const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
      
      const dx = clientX - dragStartPos.current.x;
      const dy = clientY - dragStartPos.current.y;
      
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        hasMoved.current = true;
      }

      // Calculate new position
      let newX = initialPos.current.x + dx;
      let newY = initialPos.current.y + dy;

      // Clamping logic
      const widgetSize = isOpen ? (isMobile ? 0 : 350) : 64;
      const margin = 20;
      
      // Since we use bottom-right as 0,0:
      // Positive X means moving LEFT from original position
      // Positive Y means moving UP from original position
      const maxX = window.innerWidth - widgetSize - margin;
      const maxY = window.innerHeight - (isOpen ? 500 : 80) - margin;
      const minX = -margin + (isMobile && isOpen ? 0 : 0);
      const minY = -margin;

      setPosition({
        x: Math.max(-window.innerWidth + widgetSize + margin * 2, Math.min(margin, newX)),
        y: Math.max(-margin, Math.min(window.innerHeight - widgetSize, newY))
      });
      
      // Simple clamping for this specific implementation (bottom/right anchored)
      // Actually, let's keep it simple: just offset from bottom-right.
      setPosition({ x: newX, y: newY });
    };

    const stopDrag = () => {
      setIsDragging(false);
      document.body.style.userSelect = 'auto';
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', stopDrag);
      window.addEventListener('touchmove', handleMove, { passive: false });
      window.addEventListener('touchend', stopDrag);
    }

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', stopDrag);
    };
  }, [isDragging, position, isOpen, isMobile]);

  const toggleOpen = (e) => {
    if (!hasMoved.current) {
      setIsOpen(!isOpen);
    }
  };

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setShowQuickReplies(false);
    setIsLoading(true);

    try {
      // Last 10 messages from the state (user + assistant)
      const recentHistory = updatedMessages.slice(-10).map(msg => ({
        role: msg.role,
        content: msg.content
      }));
      
      const apiMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...recentHistory,
      ];

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Response Error:", response.status, errorData);
        throw new Error(errorData.error || "Server failed");
      }

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      let botReply = typeof data.reply === 'string'
        ? data.reply
        : data.reply?.content || data.reply?.message?.content || "I couldn't process that. Please try again.";

      const hasBookingIntent = detectsBookingIntent(botReply);
      botReply = botReply.replace(/___BOOK_NOW___/g, '').trim();

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: botReply,
        showBookingCard: hasBookingIntent,
      }]);
    } catch (err) {
      console.error("Chatbot catch error:", err);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Sorry, I'm having trouble connecting. Please call the clinic directly at +91 98765 43210."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const dynamicStyle = isMobile && isOpen ? {
    bottom: 0,
    right: 0,
    width: '100vw',
    height: '100dvh'
  } : {
    bottom: `calc(2rem - ${position.y}px)`,
    right: `calc(2rem - ${position.x}px)`,
  };

  return (
    <div 
      className={`fixed z-[100] transition-shadow ${isDragging ? 'shadow-2xl' : ''}`}
      style={dynamicStyle}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes typing-dot {
          0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-4px); }
        }
      `}} />

      {isOpen && (
        <div className={`
          ${isMobile ? 'w-full h-full' : 'absolute bottom-20 right-0 w-[350px] h-[500px] rounded-2xl border border-outline-variant/20 shadow-2xl'}
          bg-white overflow-hidden animate-in slide-in-from-bottom-8 fade-in duration-300 flex flex-col
        `}>
          <div 
            className="bg-primary p-6 text-white flex justify-between items-center cursor-move"
            onMouseDown={isMobile ? undefined : startDrag}
            onTouchStart={isMobile ? undefined : startDrag}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Headset className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">Clinic Assistant</p>
                <p className="text-xs opacity-80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online to help you
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/10 p-2 rounded-lg transition-colors flex items-center justify-center min-h-[44px] min-w-[44px]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 flex-grow bg-slate-50 overflow-y-auto space-y-4 chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`p-4 rounded-xl text-sm max-w-[85%] ${
                  msg.role === 'user'
                    ? 'bg-primary text-white rounded-tr-none'
                    : 'bg-white text-on-surface rounded-tl-none shadow-sm border border-outline-variant/10'
                }`}>
                  {msg.content}
                </div>

                {/* Book Now Card */}
                {msg.showBookingCard && (
                  <button
                    onClick={() => { setIsOpen(false); navigate('/book'); }}
                    className="mt-2 flex items-center gap-3 bg-gradient-to-r from-primary to-teal-600 text-white px-5 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-100 transition-all duration-200 text-sm font-bold max-w-[85%] group"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                      <CalendarCheck className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold leading-tight">Book an Appointment</p>
                      <p className="text-white/75 text-xs font-normal">Tap to open the booking form →</p>
                    </div>
                  </button>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-xl rounded-tl-none shadow-sm border border-outline-variant/10 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-primary/60 rounded-full" style={{ animation: 'typing-dot 1.4s infinite', animationDelay: '0s' }}></span>
                  <span className="w-2 h-2 bg-primary/60 rounded-full" style={{ animation: 'typing-dot 1.4s infinite', animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-primary/60 rounded-full" style={{ animation: 'typing-dot 1.4s infinite', animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}

            {showQuickReplies && !isLoading && (
              <div className="flex flex-col gap-2">
                {QUICK_REPLIES.map((qr, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(qr.message)}
                    className="text-left bg-primary/5 hover:bg-primary/10 border border-primary/20 p-4 rounded-lg text-sm font-bold text-primary transition-all min-h-[44px]"
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-outline-variant/10 flex gap-2">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-grow bg-surface-container-low border-none rounded-full px-6 text-sm focus:ring-1 focus:ring-primary h-12"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button 
              className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-opacity ${
                inputValue.trim() && !isLoading
                  ? 'bg-primary text-white cursor-pointer'
                  : 'bg-primary/40 text-white/60 cursor-not-allowed'
              }`}
              onClick={() => sendMessage(inputValue)}
              disabled={!inputValue.trim() || isLoading}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {(!isOpen || !isMobile) && (
        <button 
          className={`w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group relative cursor-move ${isDragging ? 'scale-110 ring-4 ring-primary/20' : ''}`}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          onClick={toggleOpen}
        >
          {/* Tooltip */}
          {(!isOpen || !isDragging) && (
            <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-on-surface text-surface px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-2xl border border-outline-variant/10 translate-x-4 group-hover:translate-x-0 hidden md:block">
              Drag or Click to open chat...
              <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-on-surface rotate-45"></div>
            </div>
          )}
          
          <MessageCircle className={`w-8 h-8 transition-all duration-300 ${isOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
          <X className={`w-8 h-8 absolute transition-all duration-300 ${isOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white animate-bounce"></div>
          )}
        </button>
      )}
    </div>
  );
}
