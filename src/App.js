import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';
import References from './pages/References';
import Dealerships from './pages/Dealerships';
import Press from './pages/Press';
import Career from './pages/Career';
import SecondHandPage from './pages/SecondHandPage';
import Service from './pages/Service';
import ProductCategory from './pages/ProductCategory';
import ProductListing from './pages/ProductListing';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/referanslar" element={<References />} />
            <Route path="/distributorlukler" element={<Dealerships />} />
            <Route path="/basinda-biz" element={<Press />} />
            <Route path="/kariyer" element={<Career />} />
            <Route path="/ikinciel" element={<SecondHandPage />} />
            <Route path="/servis-talep" element={<Service />} />
            <Route path="/kategori" element={<ProductListing />} />
            <Route path="/kategori/:slug" element={<ProductCategory />} />
          </Routes>
        </PageTransition>
        <Newsletter />
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
