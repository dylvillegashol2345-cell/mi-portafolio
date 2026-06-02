import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SkillBadge from '../components/SkillBadge';
import fotoPerfil from '../assets/foto-perfil.jpeg';

const HomePage = () => {
  // PASO 1: Crear estado con useState para el tema de la página
  // PASO 2: Definir arrays con tus datos personales, skills, etc.
const [mostrarSkills, setMostrarSkills] = useState(true);
const nombre = "Dylan Villegas";
const titulo = "Estudiante de Analista de Sistemas";

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "SQL Server",
  "ASP.NET Core"
];
return (
  <div>
    {/* Sección principal */}
    <section className="text-center py-5">
    <img
    src={fotoPerfil}
    alt="Foto de Dylan Villegas"
    className="rounded-circle shadow-lg mb-4"
    width="200"
    />
      <h1 className="display-4 fw-bold">
        {nombre}
      </h1>
    
      <p className="lead">
        {titulo}
      </p>
      <button
        className="btn btn-dark mt-3"
        onClick={() => setMostrarSkills(!mostrarSkills)}
      >
        {mostrarSkills
          ? "Ocultar skills"
          : "Mostrar skills"}
      </button>
    </section>

    {/* Skills */}
    <section className="mb-5">
      <h2 className="mb-3">
        Habilidades principales
      </h2>

      {mostrarSkills && (
        <div className="d-flex gap-2 flex-wrap">
          {skills.map((skill, index) => (
            <SkillBadge
              key={index}
              nombre={skill}
            />
          ))}
        </div>
      )}
    </section>

    {/* Contacto */}
    <section className="mb-5">
      <h2>Contacto</h2>
      <p>
        Podés comunicarte conmigo desde la sección de contacto.
      </p>
      <Link
        to="/contact"
        className="btn btn-primary"
      >
        Ir a contacto
      </Link>
    </section>
  </div>
);
}

export default HomePage;