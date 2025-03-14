import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

// Navbar.js
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Portfolio</Link>
        <div className="space-x-4">
          <Link to="/about" className="hover:text-gray-400">À propos</Link>
          <Link to="/projects" className="hover:text-gray-400">Projets</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// Footer.js
function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-8">
      <p>© 2024 Mon Portfolio - Tous droits réservés</p>
    </footer>
  );
}

export default Footer;

// Home.js
function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold">Bienvenue sur mon Portfolio</h1>
      <p className="mt-4 text-gray-600">Découvrez mes projets et mon parcours professionnel.</p>
    </div>
  );
}

export default Home;

// About.js
function About() {
  return (
    <div className="max-w-3xl mx-auto text-center py-10">
      <h2 className="text-3xl font-bold">À propos de moi</h2>
      <p className="mt-4 text-gray-600">Je suis un étudiant en BTS SIO, passionné par le développement et les nouvelles technologies.</p>
    </div>
  );
}

export default About;

// Projects.js
function Projects() {
  const projects = [
    { title: "Projet 1", description: "Description du projet 1" },
    { title: "Projet 2", description: "Description du projet 2" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

// Contact.js
function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center">Contactez-moi</h2>
      <form className="mt-6 space-y-4">
        <input type="text" placeholder="Nom" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
