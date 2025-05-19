#!/bin/bash
# This script helps optimize large assets in the project

# Terminal colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if directories exist
ASSET_DIR="src/assets"
OPTIMIZED_DIR="src/assets/optimized"

if [ ! -d "$ASSET_DIR" ]; then
  echo -e "${RED}Error: Assets directory not found at $ASSET_DIR${NC}"
  exit 1
fi

# Create optimized directory if it doesn't exist
mkdir -p "$OPTIMIZED_DIR"

# Step 1: Find large files
echo -e "${BLUE}Step 1: Finding large files...${NC}"
find "$ASSET_DIR" -type f -size +1M | sort -h

# Step 2: Optimize GIFs
echo -e "\n${BLUE}Step 2: Finding GIF files...${NC}"
find "$ASSET_DIR" -name "*.gif" -type f | sort -h

# Step 3: Check for FFmpeg
echo -e "\n${BLUE}Step 3: Checking for FFmpeg...${NC}"
if command -v ffmpeg >/dev/null 2>&1; then
  echo -e "${GREEN}FFmpeg is installed.${NC}"
else
  echo -e "${RED}FFmpeg is not installed. Please install it to convert GIFs to WebM.${NC}"
  echo -e "Installation instructions: https://ffmpeg.org/download.html"
  
  # For macOS
  echo -e "${YELLOW}For macOS: brew install ffmpeg${NC}"
  
  # For Ubuntu/Debian
  echo -e "${YELLOW}For Ubuntu/Debian: sudo apt-get install ffmpeg${NC}"
  
  # Skip conversion steps
  HAS_FFMPEG=false
fi

# Step 4: Convert large GIFs to WebM
if [ "$HAS_FFMPEG" != "false" ]; then
  echo -e "\n${BLUE}Step 4: Converting large GIFs to WebM...${NC}"
  
  # Find all GIFs larger than 1MB
  LARGE_GIFS=$(find "$ASSET_DIR" -name "*.gif" -type f -size +1M)
  
  for GIF in $LARGE_GIFS; do
    FILENAME=$(basename "$GIF")
    BASENAME="${FILENAME%.*}"
    OUTPUT="$OPTIMIZED_DIR/$BASENAME.webm"
    
    echo -e "Converting ${YELLOW}$GIF${NC} to ${GREEN}$OUTPUT${NC}"
    ffmpeg -i "$GIF" -c:v libvpx-vp9 -b:v 1M -crf 41 -pix_fmt yuva420p "$OUTPUT" -y
    
    # Show file size comparison
    ORIGINAL_SIZE=$(du -h "$GIF" | cut -f1)
    NEW_SIZE=$(du -h "$OUTPUT" | cut -f1)
    echo -e "  Original: ${RED}$ORIGINAL_SIZE${NC}, WebM: ${GREEN}$NEW_SIZE${NC}"
  done
fi

# Step 5: Optimize large images
echo -e "\n${BLUE}Step 5: Finding large image files (PNG/JPG)...${NC}"
find "$ASSET_DIR" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -size +1M | sort -h

# Conclusion
echo -e "\n${GREEN}Asset analysis complete!${NC}"
echo -e "To convert GIFs to WebM videos: ${YELLOW}npm run convert-gifs${NC}"
echo -e "To find all GIF references: ${YELLOW}npm run find-gifs${NC}"
echo -e "To build with optimized assets: ${YELLOW}npm run optimize${NC}" 