import React, { useEffect } from 'react';
import Logo from '../imagenes/Logo.png';
import img1 from '../imagenes/img1.jpeg';
import img2 from '../imagenes/img2.jpeg';
import img3 from '../imagenes/img3.jpeg';
import '../hojas-de-estilos/Company.css';

function Company() {
  // Asegura que al acceder o recargar el componente, la página se desplace al inicio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // El array vacío asegura que esto solo se ejecute cuando el componente se monte

  return (
    <div className="company-container">

      <div className="logo-container2">
        <img src={Logo} alt="Logo2" className="logo" />
      </div>

      <div className="company-description">
        <h2 className="section-title">What is IRC-DEV?</h2>
        <p className="description-text">
          We are a software development company based specifically on web development.
          We make sure that you have the best business applications so that each client
          has an excellent impression of software development.
        </p>
        <p className="description-text">
          We have the best use of technologies for development, among the main ones for now:
          React js, Node js, SQL SERVER, Firebase, Auth0, as well as different design libraries such as:
          Sweet alert2, Boostrap, CSS, etc.
        </p>
      </div>

      <div className="biography-section">
        <h1 className="section-title">Biography: Ivan Alberto Rodriguez Cruz</h1>
        <div className="biography-content">
          <img src={img1} alt="Ivan's Image" className="biography-img" />
          <p className="biography-text">
            This company has been developed by the computer science graduate Ivan Alberto Rodriguez Cruz.
            A young man who began his software development studies in 2020,
            starting with desktop applications developed with C# and SQL SERVER.
            These projects include: sales systems, billing systems, and calculators;
            then he made a leap in 2024 to web development,
            starting with the React js programming language for the front end, node js for the backend,
            and SQL SERVER databases.
          </p>
        </div>
      </div>

      <div className="study-section">
        <h2 className="section-title">Study Basis</h2>
        <div className="study-content">
          <p className="study-text">
            He began and finished his studies at the Eugenio Maria de Hostos University
            and then continued to develop his knowledge in a self-taught manner.
            To this day, he remains focused on backend development. Currently married
            to Marilevis Guzman Mendoza,
            with whom he has shared his projects and together they share ideas
            as well as a healthy relationship in God.
          </p>
          <div className="images-container">
            <img src={img2} alt="Study Image" className="study-img" />
            <img src={img3} alt="Additional Image" className="study-img" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Company;
