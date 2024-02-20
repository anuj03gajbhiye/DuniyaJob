// EmployerDashboard.js
import React, { useState } from 'react';
import './dash.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

function EmployerDashboard() {
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleSidebarItemClick = (section) => {
    setActiveSection(section);
    
  };

  return (
    <div className='grid-container'>
      <Header toggleSidebar={toggleSidebar}/>
      <Sidebar handleItemClick={handleSidebarItemClick} />
      <Home activeSection={activeSection} />
    </div>
  );

}

export default EmployerDashboard;