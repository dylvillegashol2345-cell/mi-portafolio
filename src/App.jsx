import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Navbar from "./components/Navbar";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [tema, setTema] =
    useLocalStorage("tema", "light");

  const toggleTema = () => {
    setTema(
      tema === "light"
        ? "dark"
        : "light"
    );
  };

  return (
    <div
      className={`container-fluid min-vh-100 ${
        tema === "dark"
          ? "bg-dark text-light"
          : "bg-light"
      }`}
    >
      <Navbar
        tema={tema}
        toggleTema={toggleTema}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;