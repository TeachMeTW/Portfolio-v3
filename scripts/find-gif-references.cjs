const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);

// Main function to find all GIF references
async function findGifReferences() {
  console.log('Searching for GIF references in the codebase...');
  
  try {
    // Use grep to find all .gif references
    const { stdout, stderr } = await execPromise(
      'grep -r --include="*.jsx" --include="*.js" --include="*.tsx" --include="*.ts" "\\.gif" src/'
    );
    
    if (stderr) {
      console.error('Error during search:', stderr);
    }
    
    if (!stdout.trim()) {
      console.log('No GIF references found.');
      return;
    }
    
    // Parse the results
    const lines = stdout.split('\n').filter(Boolean);
    
    console.log(`Found ${lines.length} references to GIF files:`);
    console.log('---------------------------------------------');
    
    const gifsByFile = {};
    
    for (const line of lines) {
      // Parse line like "src/components/File.jsx:  import gifFile from '../assets/example.gif';"
      const [filePath, content] = line.split(':', 2);
      
      // Try to extract the GIF path
      const gifPathMatch = content.match(/['"]([^'"]*\.gif)['"]/);
      if (gifPathMatch) {
        const gifPath = gifPathMatch[1];
        
        if (!gifsByFile[filePath]) {
          gifsByFile[filePath] = [];
        }
        
        gifsByFile[filePath].push({
          path: gifPath,
          lineContent: content.trim()
        });
      }
    }
    
    // Display results by file
    for (const [file, gifs] of Object.entries(gifsByFile)) {
      console.log(`\nFile: ${file}`);
      console.log('  GIF references:');
      
      gifs.forEach(({ path, lineContent }) => {
        console.log(`    - ${path}`);
        console.log(`      ${lineContent}`);
      });
    }
    
    console.log('\n---------------------------------------------');
    console.log('To optimize these GIFs:');
    console.log('1. Run the GIF conversion script: npm run convert-gifs');
    console.log('2. Replace <img> tags with the VideoPlayer component');
    console.log('3. Use the path helpers from VideoHelper.js');
    console.log('---------------------------------------------');
    
  } catch (error) {
    if (error.code === 1 && !error.stderr) {
      // grep returns exit code 1 when no matches are found
      console.log('No GIF references found in the codebase.');
    } else {
      console.error('Error searching for GIF references:', error);
    }
  }
}

// Run the script
findGifReferences().catch(console.error); 