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
      if (id.includes('mesa') || id.includes('neet') || id.includes('prog3')) {
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
    // Handle JPG files properly
    url({
      include: ['**/*.jpg', '**/*.JPG', '**/*.jpeg', '**/*.JPEG', '**/*.gif', '**/*.GIF'],
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
  // Specific handling for problematic file formats
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.jpeg', '**/*.JPEG', '**/*.gif', '**/*.GIF'],
  // Prevent Vite from trying to parse binary files
  optimizeDeps: {
    exclude: [
      '**/*.JPG',
      '**/*.jpg',
      '**/*.jpeg',
      '**/*.JPEG',
      '**/*.gif',
      '**/*.GIF'
    ]
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
}) 