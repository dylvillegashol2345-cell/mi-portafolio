import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// PASO OPCIONAL: Recibir props para el toggle de tema dark/light
const Navbar = ({ tema, toggleTema }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* PASO: Usar Link de react-router-dom para navegación sin recargar */}
        <Link className="navbar-brand" to="/">Mi Portafolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
  <li className="nav-item">
    <Link className="nav-link" to="/">
      Inicio
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/about">
      Sobre Mi
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/projects">
      Proyectos
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/contact">
      Contacto
    </Link>
  </li>
</ul>
  <button
  className="btn btn-outline-light ms-auto"
  onClick={toggleTema}>
  {tema === "light"
    ? "🌙"
    : "☀️"}
  </button>
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  tema: PropTypes.string,
  toggleTema: PropTypes.func,
};
export default Navbar;