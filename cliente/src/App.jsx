import { Routes, Route, useLocation } from 'react-router-dom';
import HomeSection from './components/HomeSection';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  const location = useLocation(); // Obtiene la ruta actual

  return (
    <>
      {/* Solo muestra el Navbar y Footer si la ruta no es "/admin" */}
      {location.pathname !== '/admin' && <NavbarComponent />}
      
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/admin" element={<AdminDashboard />} /> 
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      
      {location.pathname !== '/admin' && <FooterComponent />}
    </>
  );
};

export default App;
