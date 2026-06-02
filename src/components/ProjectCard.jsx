import React from 'react';
import PropTypes from 'prop-types';
import SkillBadge from "./SkillBadge";
// PASO: Completar el componente ProjectCard
// Debe recibir un objeto "proyecto" por props con: id, nombre, descripcion, imagen, tecnologías, link
const ProjectCard = ({ proyecto }) => {
  return (
    <div className="card h-100">
      {/* PASO: Mostrar la imagen del proyecto */}
  <img
    src={proyecto.imagen}
    className="card-img-top"
    alt={proyecto.nombre}
  />
      <div className="card-body">
        {/* PASO: Mostrar nombre y descripción del proyecto */}
        <h5 className="card-title">
        {proyecto.nombre}
        </h5>
    <p className="card-text">
    {proyecto.descripcion}
    </p>
    <div className="d-flex gap-2 flex-wrap">
    {proyecto.tecnologias.map((tec, index) => (
  <SkillBadge
      key={index}
      nombre={tec}
  />
      ))}
      </div>
      </div>
  <div className="card-footer">
  <button
    className="btn btn-primary"
    onClick={() =>
      alert("Repositorio privado o en desarrollo")
    }
  >
    Ver Proyecto
  </button>
</div>
    </div>
  );
};
ProjectCard.propTypes = {
  proyecto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    imagen: PropTypes.string,
    tecnologias: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;