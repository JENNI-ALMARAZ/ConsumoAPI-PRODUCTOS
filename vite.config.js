import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: process.env.PORT || 3000,  // Usa el puerto de Render o 3000 si no está definido
    host: '0.0.0.0',  // Asegúrate de que Vite escuche en todas las interfaces de red
  },
});
