import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import BookingForm from './components/BookingForm';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login'); // <-- antes decía 'home'
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('admin');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('home');
  };

  return (
    <div className="font-sans antialiased text-gray-900">
      {currentPage === 'admin' ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : currentPage === 'login' ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <>
          <LayoutHeader onAdminClick={() => setCurrentPage('login')} />
          <HeroSection />
          <ServicesSection />
          <GallerySection />
          <BookingForm />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;

// DONE