import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nombre-repo/', // Cambia '/nombre-repo/' por el nombre de tu repositorio o subdirectorio
  plugins: [react()],
  build: {
    outDir: 'dist',  // La carpeta de salida
    rollupOptions: {
      input: './src/main.jsx',  // Asegúrate de que el archivo está correctamente configurado
    },
  },
})



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
