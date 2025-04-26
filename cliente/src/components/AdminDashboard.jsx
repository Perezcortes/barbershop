import React, { useState } from 'react';
import { FiHome, FiCalendar, FiScissors, FiUsers, FiSettings } from 'react-icons/fi';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Auto-collapse sidebar on mobile after selection
    if (window.innerWidth < 768) {
      setSidebarCollapsed(true);
    }
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={`admin-dashboard ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo">
            {!sidebarCollapsed && <h2>Barbería</h2>}
            {sidebarCollapsed && <h2>B</h2>}
          </div>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {sidebarCollapsed ? '☰' : '✕'}
          </button>
        </div>
        <nav>
          <ul>
            <li 
              className={activeTab === 'home' ? 'active' : ''} 
              onClick={() => handleTabClick('home')}
              title="Inicio"
            >
              <FiHome className="nav-icon" />
              {!sidebarCollapsed && <span>Inicio</span>}
            </li>
            <li 
              className={activeTab === 'appointments' ? 'active' : ''} 
              onClick={() => handleTabClick('appointments')}
              title="Citas"
            >
              <FiCalendar className="nav-icon" />
              {!sidebarCollapsed && <span>Citas</span>}
            </li>
            <li 
              className={activeTab === 'services' ? 'active' : ''} 
              onClick={() => handleTabClick('services')}
              title="Servicios"
            >
              <FiScissors className="nav-icon" />
              {!sidebarCollapsed && <span>Servicios</span>}
            </li>
            <li 
              className={activeTab === 'customers' ? 'active' : ''} 
              onClick={() => handleTabClick('customers')}
              title="Clientes"
            >
              <FiUsers className="nav-icon" />
              {!sidebarCollapsed && <span>Clientes</span>}
            </li>
            <li 
              className={activeTab === 'settings' ? 'active' : ''} 
              onClick={() => handleTabClick('settings')}
              title="Ajustes"
            >
              <FiSettings className="nav-icon" />
              {!sidebarCollapsed && <span>Ajustes</span>}
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="header">
          <div className="header-content">
            <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
            <div className="user-profile">
              <span>Usuario Admin</span>
              <div className="avatar">AU</div>
            </div>
          </div>
        </div>
        <div className="main-content">
          {/* Content will change based on active tab */}
          {activeTab === 'home' && (
            <div className="dashboard-welcome">
              <h2>Bienvenido al Admin de Barbería</h2>
              <p>Administra las operaciones de tu barbería eficientemente</p>
              <div className="stats-cards">
                <div className="card">
                  <h3>Citas de Hoy</h3>
                  <p>12</p>
                </div>
                <div className="card">
                  <h3>Clientes Nuevos</h3>
                  <p>3</p>
                </div>
                <div className="card">
                  <h3>Ingresos</h3>
                  <p>$1,240</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'appointments' && <div className="tab-content">Gestionar Citas</div>}
          {activeTab === 'services' && <div className="tab-content">Gestionar Servicios</div>}
          {activeTab === 'customers' && <div className="tab-content">Gestionar Clientes</div>}
          {activeTab === 'settings' && <div className="tab-content">Ajustes</div>}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
