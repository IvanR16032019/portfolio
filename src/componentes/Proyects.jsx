import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'; // Importamos la librería
import '../hojas-de-estilos/Proyects.css';

const Proyects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse a la parte superior de la página
  }, []);

  const projects = [
    {
      name: 'Fashion',
      description: 'Fashion app, access and view the best beauty and health products for your skin.',
      link: 'https://fashion-r0lj.onrender.com/',
      altLink: 'https://github.com/IvanR16032019/fashion.git'
    },

    {
      name: 'student management ( email: Prueba@gmail.com password: Prueba12345)',
      description: 'Manage your students information easily and securely, being able to download the complete list of students in PDF.',
      link: 'https://students-ov2e.onrender.com/',
      altLink: 'https://github.com/IvanR16032019/students.git'
    },

    {
      name: 'Calculator',
      description: 'Always have your web calculator on hand.',
      link: 'https://calculator1-mst3.onrender.com/',
      altLink: 'https://github.com/IvanR16032019/calculator1.git'
    },
    {
      name: 'Tip app',
      description: 'Manage tips in a safe and fast way, providing a better customer experience',
      link: 'https://tip-uz6b.onrender.com/',
      altLink: 'https://github.com/IvanR16032019/tip.git'
    },
    {
      name: 'Billing (open in incognito mode in your browser for greater efficiency)',
      description: 'Here is my billing app for calculating your sales when shipping with invoice and customer name included',
      link: 'https://billing-hwod.onrender.com/',
      altLink: 'https://github.com/IvanR16032019/billing.git'
    },
    {
      name: 'User management - email: Prueba@gmail.com password: Prueba12345 (crud / public test API)',
      description: 'Application for real-time employee management, authentication to protect user information.',
      link: 'https://crud-api-yepo.onrender.com/',
      altLink: 'https://github.com/IvanR16032019/crud_api.git'
    },
    {
      name: 'Galaxy animation',
      description: 'Beautiful galaxy animation to contemplate the beauty of creation.',
      link: 'https://gx-see2.onrender.com/',
      altLink: 'https://github.com/IvanR16032019/gx'
    }
  ];

  const projectApi = [
    {
      name: 'Crud Students (Node JS, PostgreSQL)',
      description: 'Check out the details of the backend development of this app. Here is the code with the HTTP requests and CRUD functions. Click and see the code on github',
      altLink: 'https://github.com/IvanR16032019/schoolApi.git'
    },

  ];

  const projectCSharp = [
    {
      name: 'MathApp (C#)',
      description: 'Here is my calculations application, the app is in the link, you can download the installer and do your calculations.',
      altLink: 'https://drive.google.com/file/d/1pGs2pnGRedLYCSiziIxXmld_N7QYlZL3/view?usp=sharing'
    },

    {
      name: 'Calculator (React Native)',
      description: 'Calculator app for Android, download the APK to test its operation',
      altLink: 'https://drive.google.com/file/d/1k9jE76IwZhb1sTBP_06IfxUAqWGI4XLl/view?usp=sharing'
    }
  ];

  return (
    <div className="project-container">
      <button className="back-btn" onClick={() => navigate("/")}>
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

      <h2 className='obj-title'>Here are our projects React js:</h2>

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
              View Project
            </a>
            <a
              href={project.altLink}
              className="project-link-alt"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>

      <h2 className='obj-title'>Node Js, React Native, C# and other:</h2>

      {/* aqui */}
      <div className="projects-list">
        {projectApi.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>

            <a
              href={project.altLink}
              className="project-link-alt"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

        ))}

        {projectCSharp.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>

            <a
              href={project.altLink}
              className="project-link-alt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download App
            </a>
          </div>
        ))}

      </div>

      <div className="projects-list">
        {/* aqui va el sharp, por si acaso */}
      </div>

      {/* Contenedor para el enlace de descarga del PDF */}
      <div className="github-container">
        <h3>CV for more details about me</h3>
        <a
          href="/cv/Hoja.pdf"  // Ruta relativa al archivo en la carpeta public
          className="github-link"
          download="Ivan_Rodriguez_Curriculum.pdf"  // Nombre del archivo al descargar
        >
          Download
        </a>
      </div>



      <div className="github-container">
        <h3>Github of my portfolio</h3>
        <a
          href="https://github.com/IvanR16032019/portfolio.git"
          className="github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the code here
        </a>
      </div>

    </div>
  );
}

export default Proyects;
