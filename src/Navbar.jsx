import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Usamos Link de react-router-dom
import './hojas-de-estilos/Navbar.css'; // Estilos específicos para la barra de navegación

function Navbar() {
  const [isMobile, setIsMobile] = useState(false); // Estado para controlar el toggle del menú

  const toggleMenu = () => {
    setIsMobile(!isMobile); // Cambia el estado al hacer clic en el icono del menú
  };

  const closeMenu = () => {
    setIsMobile(false); // Cierra el menú al seleccionar una opción
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Icono de menú hamburguesa */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`navbar-links ${isMobile ? 'active' : ''}`}>
          {/* Usamos Link para navegación sin recargar la página */}
          <li><Link to="/" onClick={closeMenu}>Main page</Link></li>
          <li><Link to="/company" onClick={closeMenu}>Our company</Link></li>
          <li><Link to="/goals" onClick={closeMenu}>Goals</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
