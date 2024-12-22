import React, { useEffect } from 'react';
import '../hojas-de-estilos/Goals.css';

const Goals = () => {
  const goals = [
    "Develop interactive and scalable web applications",
    "Master user interface (UI) and user experience (UX) design and development",
    "Improve web performance through code optimization",
    "Implement unit and integration tests",
    "Integrate backend services and RESTful APIs",
    "Build mobile applications with React Native",
    "Implement advanced JavaScript techniques (ES6+)",
    "Apply software architecture design principles",
    "Master the use of NoSQL and SQL databases",
    "Contribute to open-source projects"
  ];

  // Asegura que al acceder o recargar el componente, la página se desplace al inicio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // El array vacío asegura que esto solo se ejecute cuando el componente se monte

  return (
    <div className="goals-container">
      <h1 className="title-goals">My Goals</h1>
      <div className="goals-list">
        {goals.map((goal, index) => (
          <div 
            key={index} 
            className="goal-card" 
            style={{ animationDelay: `${index * 0.1}s` }} // Animación más rápida, con menos retraso entre cada tarjeta
          >
            <p className="goal-text">{goal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
