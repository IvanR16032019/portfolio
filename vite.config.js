import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/portfolio"
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
