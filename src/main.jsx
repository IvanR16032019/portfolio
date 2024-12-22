import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/index.css'
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa Router

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> {/* Envuelve App con Router */}
      <App />
    </Router>
  </StrictMode>
);
