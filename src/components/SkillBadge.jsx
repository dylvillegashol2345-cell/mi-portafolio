import React from 'react';
import PropTypes from 'prop-types';

// PASO: Completar el componente SkillBadge
// Debe recibir un string "nombre" por props y mostrar un badge Bootstrap
const SkillBadge = ({ nombre }) => {
  return (
    <span className="badge bg-primary p-2 fs-6">
      {nombre}
    </span>
  );
};

SkillBadge.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default SkillBadge;