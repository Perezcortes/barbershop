import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import BookingForm from './components/BookingForm';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import Login from './components/UserLogin';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (role) => {
    if (role === 'admin') {
      setIsAuthenticated(true);
      setCurrentPage('admin');
    } else {
      alert('¡Bienvenido!');
      setCurrentPage('home');
    }
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
        <Login onLogin={handleLogin} />
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
