import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'; // Importamos la librería
import '../hojas-de-estilos/Proyects.css';

const Proyects = () => {
  const navigate = useNavigate();

  // Este useEffect asegura que la página se desplace al inicio al cargar el componente
  useEffect(() => {
    window.scrollTo(0, 0);  // Desplazarse a la parte superior de la página
  }, []); // El array vacío asegura que esto solo se ejecute una vez, cuando el componente se monta

  const projects = [
    {
      name: 'Calculator',
      description: 'Always have your web calculator on hand.',
      link: 'https://calculator1-mst3.onrender.com/',
    },
    {
      name: 'Tip app',
      description: 'Manage tips in a safe and fast way, providing a better customer experience',
      link: 'https://tip-uz6b.onrender.com/',
    },
    {
      name: 'Billing (open in incognito mode in your browser for greater efficiency)',
      description: 'Here is my billing app for calculating your sales when shipping with invoice and customer name included',
      link: 'https://billing-hwod.onrender.com/',
    },

    {
      name: 'Proyecto 4',
      description: 'Aplicación móvil usando React Native que ayuda a los usuarios a gestionar sus tareas diarias.',
      link: 'https://link-a-proyecto3.com',
    }
  ];

  return (
    <div className="project-container">
      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        Back
      </button>

      <h1 className="title-project fade-in">
        Projects developed by our company!
      </h1>

      <h2 className="languajes fade-in">
        As a company we have the obligation to show our experience through the projects we carry out.
      </h2>

      <h2>What are we looking for?</h2>

      <div className='container-obj'>
        <div className="obj1">
          <h3>Demonstrate technological innovation</h3>
          <p>We seek to develop innovative programming projects that use the latest technologies and cutting-edge approaches, with the goal of offering unique solutions that optimize processes.</p>
        </div>

        <div className='obj2'>
          <h3>Optimize the user experience</h3>
          <p>We seek to create intuitive and functional interfaces that improve user interaction with our applications and platforms, ensuring an agile, accessible and satisfactory experience.</p>
        </div>

        <div className='obj3'>
          <h3>Guarantee the quality and scalability of the code</h3>
          <p>We seek to write clean, efficient and modular code that is not only easy to maintain, but also scalable, allowing our projects to grow without losing performance or quality as they evolve.</p>
        </div>
      </div>

      <h2 className='obj-title'>Here are our projects:</h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyects;
