import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Visit from './pages/Visit';
import Book from './pages/Book';
import ScrollToTop from './components/ScrollToTop';
import LoadingBar from './components/LoadingBar';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LoadingBar />
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="visit" element={<Visit />} />
          <Route path="book" element={<Book />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
