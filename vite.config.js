import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Cambiar la raíz del proyecto a la carpeta 'src'
  root: 'src',
  build: {
    outDir: '../dist', // Salida en la carpeta 'dist', que debe estar fuera de 'src'
  },
  publicDir: '../public', // Si tienes archivos estáticos como imágenes, ponlos en 'public'
});





//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'

//https://vite.dev/config/
//export default defineConfig({
//  plugins: [react()],
  //build: {
   // outDir: 'dist',  // Asegúrate de que esta es la carpeta de salida
    //rollupOptions: {
     // input: 'index.html',  // El punto de entrada correcto
    //}
  //}
//})
