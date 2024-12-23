import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/index.css'
import App from './App.jsx';
import { HashRouter } from 'react-router-dom'; // Cambiar a HashRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> {/* Envuelve App con HashRouter */}
      <App />
    </HashRouter>
  </StrictMode>
);
