import React, { useState } from "react";
import SkillBadge from "../components/SkillBadge";

const AboutPage = () => {
  // Estado para mostrar/ocultar experiencia
  const [mostrarExperiencia, setMostrarExperiencia] = useState(true);

  // Descripción personal
  const descripcion =
    "Soy estudiante de Analista de Sistemas con interés en desarrollo web y React.";

  // Experiencia
  const experiencias = [
    {
      puesto: "Proyecto Pokédex React",
      lugar: "Laboratorio I",
      periodo: "2026",
    },
    {
      puesto: "CV Portafolio SPA",
      lugar: "React + GitHub",
      periodo: "2026",
    },
  ];

  // Educación
  const educacion = [
    "Analista de Sistemas - Instituto Cervantes",
    "Cursos de React y JavaScript",
    "Cursos de CSS y HTML",
    "Manejo de SQL Server y ASP.NET Core"
  ];

  // Habilidades
  const habilidades = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
  ];

  return (
    <div>
      {/* Sobre mí */}
      <section className="mb-5">
        <h1>Sobre mí</h1>

        <p className="lead mt-3">
          {descripcion}
        </p>
      </section>

      {/* Experiencia */}
      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Experiencia</h2>

          <button
            className="btn btn-primary"
            onClick={() =>
              setMostrarExperiencia(!mostrarExperiencia)
            }
          >
            {mostrarExperiencia ? "Ocultar" : "Mostrar"}
          </button>
        </div>

        {mostrarExperiencia && (
          <div className="row g-3">
            {experiencias.map((exp, index) => (
              <div key={index} className="col-md-6">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5>{exp.puesto}</h5>

                    <p className="mb-1">
                      {exp.lugar}
                    </p>

                    <small className="text-muted">
                      {exp.periodo}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Educación */}
      <section className="mb-5">
        <h2>Educación</h2>

        <ul className="list-group mt-3">
          {educacion.map((edu, index) => (
            <li
              key={index}
              className="list-group-item"
            >
              {edu}
            </li>
          ))}
        </ul>
      </section>

      {/* Habilidades */}
      <section className="mb-5">
        <h2>Habilidades</h2>

        <div className="d-flex gap-2 flex-wrap mt-3">
          {habilidades.map((hab, index) => (
            <SkillBadge
              key={index}
              nombre={hab}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;