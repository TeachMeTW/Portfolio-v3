// scripts/convert-gifs.cjs
// This script converts large GIF files to WebM videos to improve performance

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);

// Path to source GIFs
const sourceDir = path.resolve(__dirname, '../src/assets');
// Path to output WebM videos
const outputDir = path.resolve(__dirname, '../src/assets/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// List of GIFs to convert (these are the particularly large ones)
const gifsToConvert = [
  'prog2.gif',
  'javaprj.gif',
  'prog3.gif',
  'neet.gif'
];

// Convert GIFs to WebM using FFmpeg
async function convertGifToWebm(gifPath, outputPath) {
  try {
    // Use high compression for better performance
    await execPromise(
      `ffmpeg -i "${gifPath}" -c:v libvpx-vp9 -b:v 1M -crf 41 -pix_fmt yuva420p "${outputPath}"`
    );
    console.log(`Converted ${gifPath} to ${outputPath}`);
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(gifPath).size / (1024 * 1024); // MB
    const newSize = fs.statSync(outputPath).size / (1024 * 1024); // MB
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);
    
    console.log(`Original: ${originalSize.toFixed(2)} MB`);
    console.log(`Converted: ${newSize.toFixed(2)} MB`);
    console.log(`Savings: ${savings}%`);
  } catch (error) {
    console.error(`Error converting ${gifPath}:`, error);
  }
}

// Process all GIFs
async function processGifs() {
  console.log('Starting GIF to WebM conversion...');
  
  try {
    // Check if FFmpeg is installed
    await execPromise('ffmpeg -version');
  } catch (error) {
    console.error('FFmpeg is not installed. Please install it first.');
    console.log('Installation instructions: https://ffmpeg.org/download.html');
    process.exit(1);
  }
  
  for (const gif of gifsToConvert) {
    const gifPath = path.join(sourceDir, gif);
    const webmPath = path.join(outputDir, gif.replace('.gif', '.webm'));
    
    // Check if source GIF exists
    if (fs.existsSync(gifPath)) {
      console.log(`Processing ${gif}...`);
      await convertGifToWebm(gifPath, webmPath);
    } else {
      console.warn(`Warning: ${gifPath} not found`);
    }
  }
  
  console.log('GIF to WebM conversion complete!');
}

// Run the process
processGifs().catch(console.error); 