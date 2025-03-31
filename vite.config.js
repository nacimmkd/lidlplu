import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    historyApiFallback: true,
  },
<<<<<<< HEAD
})
=======
});
>>>>>>> c98f338 (update vite.config.js)
