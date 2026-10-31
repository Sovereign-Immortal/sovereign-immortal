import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const svgPath = path.join(root, 'assets', 'sovereign-banner.svg');
const pngPath = path.join(root, 'assets', 'sovereign-banner.png');

const sharpMod = pathToFileURL(
  'C:/Projects/Gu-Master-Portfolio/node_modules/sharp/lib/index.js',
).href;

const { default: sharp } = await import(sharpMod);
const svg = fs.readFileSync(svgPath);

await sharp(svg, { density: 220 })
  .resize(2400, 560)
  .png()
  .toFile(pngPath);

console.log('Wrote', pngPath, fs.statSync(pngPath).size, 'bytes');
