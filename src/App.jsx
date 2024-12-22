import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
// Importar los componentes
import Company from './componentes/Company';
import Goals from './componentes/Goals';
import Proyects from './componentes/Proyects';
import Logo from '../public/imagenes/Logo.png'; // Asegúrate de tener la ruta correcta de tu logo
import Navbar from './Navbar';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate(); // Hook para la navegación
  const location = useLocation(); // Hook para obtener la ubicación actual de la ruta

  const images = [
    './imagenes/img1.png',
    '/imagenes/img2.png',
    '/imagenes/img3.png',
    '/imagenes/img4.jpg',
    '/imagenes/img5.jpg',
    '/imagenes/img6.png',
  ];

  // Cambiar a la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Cambiar a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Configuración del intervalo para el cambio automático de imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage(); // Cambia la imagen automáticamente cada 3 segundos
    }, 3000); // 3000 ms = 3 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  // Asegurarse de que la página se desplace al inicio cuando cambie de ruta
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar al inicio
  }, [location]); // Ejecuta este efecto cada vez que cambie la ubicación

  return (
    <div>
      {/* Mostrar Navbar solo si no estamos en la ruta '/proyects' */}
      {window.location.pathname !== '/proyects' && <Navbar />}
      
      {/* Rutas de la aplicación */}
      <Routes>
        <Route path="/" element={
          <div>
            <div className="logo-container">
              <img src={Logo} alt="Logo" className="logo" />
            </div>

            <h1>Welcome to my portfolio! 1, 2, 3, test</h1>
            <h2>Where you will find the best details of our company and our completed projects</h2>

            <div className="carousel-container">
              <div
                className="carousel"
                onClick={nextImage} // Al hacer clic, cambia la imagen
              >
                <img
                  src={images[currentImageIndex]}
                  alt="carousel"
                  className="carousel-image"
                />
              </div>
              
              <div className="projects-container">
                <div className="projects-content">
                  <h3>Explore My Work</h3>
                  <p>Check out the projects I have worked on and see what I can do for you!</p>
                  <button 
                    className="view-projects-btn" 
                    onClick={() => navigate("/proyects")} 
                  >
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        } />
        <Route path="/company" element={<Company />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/proyects" element={<Proyects />} />
      </Routes>
    </div>
  );
}

export default App;
