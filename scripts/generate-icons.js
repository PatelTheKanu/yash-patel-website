const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(
      path.join(__dirname, '../frontend/public/favicon.svg')
    );

    // Convert SVG to PNG with different sizes
    const sizes = [16, 32, 48];
    const pngBuffers = await Promise.all(
      sizes.map((size) => sharp(svgBuffer).resize(size, size).png().toBuffer())
    );

    // Write the PNG buffers to ICO file
    const icoPath = path.join(__dirname, '../frontend/public/favicon.ico');
    fs.writeFileSync(icoPath, Buffer.concat(pngBuffers));

    console.log('Favicon generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

async function generateLogo(size) {
  const svgBuffer = fs.readFileSync(
    path.join(__dirname, '../frontend/public/favicon.svg')
  );
  const pngBuffer = await sharp(svgBuffer).resize(size, size).png().toBuffer();
  fs.writeFileSync(
    path.join(__dirname, `../frontend/public/logo${size}.png`),
    pngBuffer
  );
  console.log(`Logo with size of ${size} generated successfully!`);
}

generateFavicon();
generateLogo(192);
generateLogo(512);
