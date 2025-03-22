import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import url from '@rollup/plugin-url'

// Custom plugin to handle problematic files
const skipProblematicFiles = () => {
  return {
    name: 'skip-problematic-files',
    transform(code, id) {
      // Skip processing for problematic files
      if (id.includes('mesa') || id.includes('neet') || id.includes('prog3') || 
          /\.(jpg|jpeg|JPG|JPEG|png|PNG|gif|GIF)$/.test(id)) {
        return {
          code,
          map: null
        };
      }
      return null; // Allow other plugins to process the file
    }
  }
}

export default defineConfig({
  plugins: [
    skipProblematicFiles(),
    react(),
    // Handle image files properly
    url({
      include: [/\.(jpg|jpeg|JPG|JPEG|gif|GIF|png|PNG)$/],
      limit: 0 // always emit separate files
    }),
    // Removing imagemin plugin as it causes problems with certain files
  ],
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'animation-vendor': ['framer-motion', 'react-vertical-timeline-component', 'react-tilt'],
        }
      }
    },
    // Don't attempt to parse binary files like JPG
    assetsInlineLimit: 0
  },
  server: {
  },
  // Specific handling for problematic file formats - using regex patterns instead of globs
  assetsInclude: [/\.(jpg|jpeg|JPG|JPEG|gif|GIF|png|PNG)$/],
  // Prevent Vite from trying to parse binary files
  optimizeDeps: {
    exclude: []
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
}) 