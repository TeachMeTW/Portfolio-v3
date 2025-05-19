import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import url from '@rollup/plugin-url'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// Custom plugin to handle problematic files
const skipProblematicFiles = () => {
  return {
    name: 'skip-problematic-files',
    transform(code, id) {
      // Skip processing for problematic files
      if (id.includes('mesa') || id.includes('neet') || 
          id.includes('3dmodel') || id.includes('gltf') || id.includes('glb') ||
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
    // Handle media files properly
    url({
      include: [/\.(jpg|jpeg|JPG|JPEG|gif|GIF|png|PNG|webm|mp4)$/],
      limit: 0 // always emit separate files
    }),
    // Add image optimization
    ViteImageOptimizer({
      png: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      webp: {
        quality: 70,
      },
      gif: {
        // Skip GIF optimization as they're too large
        interlaced: false
      }
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'animation-vendor': ['framer-motion', 'react-vertical-timeline-component', 'react-tilt'],
          'ui-vendor': ['@fortawesome/react-fontawesome', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons'],
        }
      }
    },
    // Don't attempt to parse binary files
    assetsInlineLimit: 0
  },
  server: {
    // Add compression for development server
    compress: true,
  },
  // Specific handling for problematic file formats - using regex patterns instead of globs
  assetsInclude: [/\.(jpg|jpeg|JPG|JPEG|gif|GIF|png|PNG|webm|mp4)$/],
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