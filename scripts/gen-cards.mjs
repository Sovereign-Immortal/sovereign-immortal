import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, '..', 'assets', 'cards');
fs.mkdirSync(out, { recursive: true });

function cardShell(w, h, accent, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <radialGradient id="mist" cx="80%" cy="15%" r="55%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#0e0f12" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" rx="2" fill="#0e0f12" stroke="${accent}" stroke-opacity="0.35" stroke-width="1.5"/>
  <rect x="8" y="8" width="${w - 16}" height="${h - 16}" fill="none" stroke="${accent}" stroke-opacity="0.12" stroke-width="1"/>
  <rect width="${w}" height="${h}" fill="url(#mist)"/>
  <rect x="0" y="0" width="3" height="${h}" fill="${accent}"/>
  ${inner}
</svg>`;
}

const base = `<svg xmlns="http://www.w3.org/2000/svg" width="920" height="260" viewBox="0 0 920 260">
  <rect width="920" height="260" fill="transparent"/>
  <g>
    <rect x="0" y="0" width="440" height="260" rx="2" fill="#0e0f12" stroke="#c9a227" stroke-opacity="0.35"/>
    <rect x="10" y="10" width="420" height="240" fill="none" stroke="#c9a227" stroke-opacity="0.12"/>
    <rect x="0" y="0" width="3" height="260" fill="#c9a227"/>
    <text x="28" y="42" fill="#c9a227" font-family="ui-monospace,Consolas,monospace" font-size="11" letter-spacing="3">IDENTITY</text>
    <text x="28" y="88" fill="#e7e2d6" font-family="Georgia,serif" font-size="26" font-weight="600">Rank 3 Peak Stage</text>
    <text x="28" y="122" fill="#e7e2d6" font-family="Georgia,serif" font-size="22">Gu Master</text>
    <text x="28" y="158" fill="#9a9488" font-family="Georgia,serif" font-size="14">White Silver Primeval Essence</text>
    <text x="28" y="186" fill="#c9c2b3" font-family="Georgia,serif" font-size="14">B.Tech CS · AI · ML</text>
    <text x="28" y="228" fill="#e4c56a" font-family="ui-monospace,Consolas,monospace" font-size="11" letter-spacing="1.5">RULE · REFINEMENT · RESTRICTION · SOUL</text>
  </g>
  <g transform="translate(480,0)">
    <rect x="0" y="0" width="440" height="260" rx="2" fill="#0e0f12" stroke="#c9a227" stroke-opacity="0.35"/>
    <rect x="10" y="10" width="420" height="240" fill="none" stroke="#c9a227" stroke-opacity="0.12"/>
    <rect x="0" y="0" width="3" height="260" fill="#c9a227"/>
    <text x="28" y="42" fill="#c9a227" font-family="ui-monospace,Consolas,monospace" font-size="11" letter-spacing="3">SECTS &amp; ACADEMIES</text>
    <text x="28" y="88" fill="#e7e2d6" font-family="Georgia,serif" font-size="17">Quad AI School of Technology</text>
    <text x="28" y="112" fill="#9a9488" font-family="Georgia,serif" font-size="13">Upskilling · OJT</text>
    <text x="28" y="148" fill="#e7e2d6" font-family="Georgia,serif" font-size="17">Medhavi Skills University</text>
    <text x="28" y="172" fill="#9a9488" font-family="Georgia,serif" font-size="13">B.Tech CS · AI · ML</text>
    <text x="28" y="208" fill="#e7e2d6" font-family="Georgia,serif" font-size="17">NOIR'S ANVIL · GeoBucket</text>
    <text x="28" y="232" fill="#9a9488" font-family="Georgia,serif" font-size="13">Co-Founder · SDE Intern</text>
  </g>
</svg>`;
fs.writeFileSync(path.join(out, 'base-cards.svg'), base);

const gus = [
  { name: 'Chaotic Planning', path: 'RULE', stroke: '#9eb6d4', fill: '#0e1218', desc: 'Contingencies ten steps ahead.', vital: true, mark: 'chaos' },
  { name: 'Reader Heart', path: 'SOUL', stroke: '#b8a8e0', fill: '#12101a', desc: 'Reads prose, subtext, people.', vital: false, mark: 'eye' },
  { name: 'Soul Refinement', path: 'REFINEMENT', stroke: '#d4b896', fill: '#16120e', desc: 'Ego through the furnace.', vital: false, mark: 'flame' },
  { name: 'Weakness Detection', path: 'RULE', stroke: '#9eb6d4', fill: '#0e1218', desc: 'Finds cracks before failure.', vital: false, mark: 'crack' },
  { name: 'Bitter Strength', path: 'RESTRICTION', stroke: '#8a9aa8', fill: '#0c1014', desc: 'Sealed exits. Heavier output.', vital: false, mark: 'chain' },
  { name: 'Self Reliance', path: 'SOUL', stroke: '#b8a8e0', fill: '#12101a', desc: 'Rebuilds from first principles.', vital: false, mark: 'self' },
];

function glyph(mark, stroke, cx = 110, cy = 78) {
  const t = `transform="translate(${cx - 44},${cy - 46})"`;
  if (mark === 'chaos') {
    return `<g ${t} fill="none"><circle cx="44" cy="46" r="28" stroke="${stroke}" stroke-width="1.5" stroke-opacity="0.35"/><circle cx="44" cy="46" r="11" stroke="${stroke}" stroke-width="2" stroke-dasharray="3.5 2.5"/><path d="M44 33v26M31 46h26" stroke="${stroke}" stroke-width="1.8" stroke-linecap="round"/><path d="M35 37l18 18M53 37L35 55" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" opacity="0.7"/><circle cx="44" cy="46" r="2.8" fill="${stroke}"/></g>`;
  }
  if (mark === 'eye') {
    return `<g ${t} fill="none"><circle cx="44" cy="46" r="28" stroke="${stroke}" stroke-width="1.5" stroke-opacity="0.35"/><path d="M26 46c6-11 30-11 36 0-6 11-30 11-36 0z" stroke="${stroke}" stroke-width="2.1"/><circle cx="44" cy="46" r="6.5" stroke="${stroke}" stroke-width="2"/><circle cx="44" cy="46" r="2.6" fill="${stroke}"/></g>`;
  }
  if (mark === 'flame') {
    return `<g ${t} fill="none"><circle cx="44" cy="46" r="28" stroke="${stroke}" stroke-width="1.5" stroke-opacity="0.35"/><path d="M44 24c8 10 12 16 12 24a12 12 0 1 1-24 0c0-8 4-14 12-24z" stroke="${stroke}" stroke-width="2"/><path d="M44 38c4 5 5 8 5 12a5 5 0 1 1-10 0c0-4 1-7 5-12z" stroke="${stroke}" stroke-width="1.6" opacity="0.8"/></g>`;
  }
  if (mark === 'crack') {
    return `<g ${t} fill="none"><circle cx="44" cy="46" r="28" stroke="${stroke}" stroke-width="1.5" stroke-opacity="0.35"/><path d="M30 30l8 10-6 8 10 6-4 12" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M52 28l-4 14 8 6-6 16" stroke="${stroke}" stroke-width="1.7" opacity="0.75" stroke-linecap="round"/></g>`;
  }
  if (mark === 'chain') {
    return `<g ${t} fill="none"><circle cx="44" cy="46" r="28" stroke="${stroke}" stroke-width="1.5" stroke-opacity="0.35"/><rect x="28" y="38" width="14" height="16" rx="7" stroke="${stroke}" stroke-width="2"/><rect x="46" y="38" width="14" height="16" rx="7" stroke="${stroke}" stroke-width="2"/><path d="M42 46h4" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/></g>`;
  }
  return `<g ${t} fill="none"><circle cx="44" cy="46" r="28" stroke="${stroke}" stroke-width="1.5" stroke-opacity="0.35"/><circle cx="44" cy="46" r="10" stroke="${stroke}" stroke-width="2"/><path d="M44 30v8M44 54v8M30 46h8M50 46h8" stroke="${stroke}" stroke-width="1.8" stroke-linecap="round"/></g>`;
}

function magneticAura(cx, cy) {
  // Soft gold magnetic field around the vital Gu glyph
  return `<g pointer-events="none">
  <defs>
    <radialGradient id="vitalCore" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#e4c56a" stop-opacity="0.55"/>
      <stop offset="35%" stop-color="#c9a227" stop-opacity="0.28"/>
      <stop offset="70%" stop-color="#9eb6d4" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#0e1218" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vitalHalo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#c9a227" stop-opacity="0"/>
      <stop offset="55%" stop-color="#c9a227" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#c9a227" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="${cx}" cy="${cy}" r="88" fill="url(#vitalHalo)"/>
  <circle cx="${cx}" cy="${cy}" r="58" fill="url(#vitalCore)"/>
  <circle cx="${cx}" cy="${cy}" r="72" fill="none" stroke="#c9a227" stroke-opacity="0.35" stroke-width="1.2" stroke-dasharray="3 5">
    <animateTransform attributeName="transform" type="rotate" from="0 ${cx} ${cy}" to="360 ${cx} ${cy}" dur="18s" repeatCount="indefinite"/>
  </circle>
  <circle cx="${cx}" cy="${cy}" r="52" fill="none" stroke="#e4c56a" stroke-opacity="0.45" stroke-width="1.4" stroke-dasharray="2 7">
    <animateTransform attributeName="transform" type="rotate" from="360 ${cx} ${cy}" to="0 ${cx} ${cy}" dur="12s" repeatCount="indefinite"/>
  </circle>
  <circle cx="${cx}" cy="${cy}" r="34" fill="none" stroke="#9eb6d4" stroke-opacity="0.5" stroke-width="1.1"/>
  <path d="M${cx} ${cy - 78} C${cx + 28} ${cy - 40}, ${cx + 28} ${cy + 40}, ${cx} ${cy + 78}" fill="none" stroke="#c9a227" stroke-opacity="0.28" stroke-width="1.2"/>
  <path d="M${cx} ${cy - 78} C${cx - 28} ${cy - 40}, ${cx - 28} ${cy + 40}, ${cx} ${cy + 78}" fill="none" stroke="#c9a227" stroke-opacity="0.28" stroke-width="1.2"/>
  <path d="M${cx - 78} ${cy} C${cx - 40} ${cy - 28}, ${cx + 40} ${cy - 28}, ${cx + 78} ${cy}" fill="none" stroke="#e4c56a" stroke-opacity="0.22" stroke-width="1"/>
  <path d="M${cx - 78} ${cy} C${cx - 40} ${cy + 28}, ${cx + 40} ${cy + 28}, ${cx + 78} ${cy}" fill="none" stroke="#e4c56a" stroke-opacity="0.22" stroke-width="1"/>
  <circle cx="${cx}" cy="${cy}" r="4" fill="#e4c56a" fill-opacity="0.85"/>
</g>`;
}

function guCard(g, x, y) {
  const w = 280;
  const h = 300;
  const cx = x + 140;
  const cy = y + 95;
  const stroke = g.vital ? '#c9a227' : g.stroke;
  const strokeOpacity = g.vital ? 0.85 : 0.45;
  const badge = g.vital
    ? `<rect x="${x + 152}" y="${y + 16}" width="112" height="22" rx="2" fill="#c9a22726" stroke="#c9a227" stroke-opacity="0.75"/>
       <text x="${x + 208}" y="${y + 31}" text-anchor="middle" fill="#e4c56a" font-family="ui-monospace,Consolas,monospace" font-size="10" letter-spacing="1.5">VITAL GU</text>`
    : '';
  const aura = g.vital ? magneticAura(cx, cy) : '';
  const outerGlow = g.vital
    ? `<rect x="${x - 4}" y="${y - 4}" width="${w + 8}" height="${h + 8}" rx="4" fill="none" stroke="#c9a227" stroke-opacity="0.25" stroke-width="2"/>
       <rect x="${x - 8}" y="${y - 8}" width="${w + 16}" height="${h + 16}" rx="6" fill="none" stroke="#c9a227" stroke-opacity="0.12" stroke-width="3"/>`
    : '';
  return `<g>
  <defs>
    <radialGradient id="a${g.mark}" cx="50%" cy="30%" r="45%">
      <stop offset="0%" stop-color="${g.vital ? '#c9a227' : g.stroke}" stop-opacity="${g.vital ? 0.42 : 0.28}"/>
      <stop offset="100%" stop-color="${g.fill}" stop-opacity="0"/>
    </radialGradient>
    ${g.vital ? `<filter id="vitalBlur" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="6"/></filter>` : ''}
  </defs>
  ${outerGlow}
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${g.fill}" stroke="${stroke}" stroke-opacity="${strokeOpacity}" stroke-width="${g.vital ? 2 : 1}"/>
  <rect x="${x + 8}" y="${y + 8}" width="${w - 16}" height="${h - 16}" fill="none" stroke="${stroke}" stroke-opacity="${g.vital ? 0.35 : 0.2}"/>
  <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#a${g.mark})"/>
  ${aura}
  ${glyph(g.mark, g.vital ? '#e4c56a' : g.stroke, cx, cy)}
  <text x="${cx}" y="${y + 168}" text-anchor="middle" fill="#e7e2d6" font-family="Georgia,serif" font-size="20" font-weight="600">${g.name}</text>
  <rect x="${x + 90}" y="${y + 182}" width="100" height="22" rx="2" fill="${g.vital ? '#c9a22718' : 'transparent'}" stroke="${g.vital ? '#c9a22799' : '#ffffff30'}"/>
  <text x="${cx}" y="${y + 197}" text-anchor="middle" fill="${g.vital ? '#e4c56a' : g.stroke}" font-family="ui-monospace,Consolas,monospace" font-size="10" letter-spacing="2">RANK 3</text>
  <text x="${cx}" y="${y + 230}" text-anchor="middle" fill="${g.vital ? '#c9a227' : '#9a9488'}" font-family="ui-monospace,Consolas,monospace" font-size="11" letter-spacing="2">${g.path}</text>
  <text x="${cx}" y="${y + 262}" text-anchor="middle" fill="#c9c2b3" font-family="Georgia,serif" font-size="13">${g.desc}</text>
  ${badge}
</g>`;
}

let guBoard = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="920" height="660" viewBox="0 0 920 660">
<title>Aperture Inventory - Vital Gu Chaotic Planning</title>
<rect width="920" height="660" fill="transparent"/>`;
gus.forEach((g, i) => {
  const col = i % 3;
  const row = Math.floor(i / 3);
  // Extra inset so vital magnetic aura / outer glow is not clipped
  guBoard += guCard(g, col * 300 + 20, row * 320 + 20);
});
guBoard += '</svg>';
fs.writeFileSync(path.join(out, 'gu-board.svg'), guBoard);

// PNG fallback for README (GitHub + local preview)
try {
  const sharpMod = pathToFileURL(
    'C:/Projects/Gu-Master-Portfolio/node_modules/sharp/lib/index.js',
  ).href;
  const { default: sharp } = await import(sharpMod);
  const svgBuf = fs.readFileSync(path.join(out, 'gu-board.svg'));
  await sharp(svgBuf, { density: 180 })
    .resize(1840, 1320)
    .png()
    .toFile(path.join(out, 'gu-board.png'));
  console.log('Also wrote gu-board.png');
} catch (err) {
  console.warn('gu-board.png skipped:', err.message);
}

const trials = [
  { seal: '♥', rank: 'Q', org: 'GeoBucket', role: 'SDE Intern', period: '2026 →', note: 'Decision science · AI', suit: '#c45c6a' },
  { seal: '♠', rank: 'K', org: "NOIR'S ANVIL", role: 'Co-Founder', period: 'May 2026 →', note: 'Immersive fullstack', suit: '#e7e2d6' },
  { seal: '♠', rank: 'J', org: 'Techprolabz', role: 'Frontend · OJT', period: 'Nov 25 → Jan 26', note: 'Last Stand flagship', suit: '#e7e2d6' },
  { seal: '♦', rank: 'A', org: 'Quad AI School', role: 'OJT', period: 'Aug 2025 →', note: 'Godot 4 · Fullstack', suit: '#6fa8dc' },
  { seal: '♣', rank: 'A', org: 'Medhavi University', role: 'B.Tech CS · AI · ML', period: 'Aug 2025 →', note: 'HPC · ML · UX', suit: '#8fbf9a' },
];

function trialCard(t, x) {
  return `<g transform="translate(${x},0)">
  <rect width="168" height="240" rx="10" fill="#14161c" stroke="${t.suit}" stroke-opacity="0.55" stroke-width="1.5"/>
  <rect x="8" y="8" width="152" height="224" rx="6" fill="none" stroke="${t.suit}" stroke-opacity="0.18"/>
  <text x="18" y="36" fill="${t.suit}" font-family="Georgia,serif" font-size="22" font-weight="700">${t.rank}</text>
  <text x="18" y="58" fill="${t.suit}" font-family="Georgia,serif" font-size="16">${t.seal}</text>
  <text x="84" y="118" text-anchor="middle" fill="#e7e2d6" font-family="Georgia,serif" font-size="13" font-weight="600">${t.org}</text>
  <text x="84" y="142" text-anchor="middle" fill="#c9a227" font-family="ui-monospace,Consolas,monospace" font-size="9" letter-spacing="1">${t.role}</text>
  <text x="84" y="168" text-anchor="middle" fill="#9a9488" font-family="Georgia,serif" font-size="11">${t.period}</text>
  <text x="84" y="198" text-anchor="middle" fill="#c9c2b3" font-family="Georgia,serif" font-size="11">${t.note}</text>
  <text x="150" y="220" text-anchor="end" fill="${t.suit}" font-family="Georgia,serif" font-size="16">${t.seal}</text>
  <text x="150" y="238" text-anchor="end" fill="${t.suit}" font-family="Georgia,serif" font-size="18" font-weight="700">${t.rank}</text>
</g>`;
}

let trialsBoard = `<svg xmlns="http://www.w3.org/2000/svg" width="920" height="260" viewBox="0 0 920 260"><rect width="920" height="260" fill="transparent"/>`;
trials.forEach((t, i) => {
  trialsBoard += trialCard(t, i * 184 + 10);
});
trialsBoard += '</svg>';
fs.writeFileSync(path.join(out, 'trials-board.svg'), trialsBoard);

const domains = [
  { label: 'Gu Cultivation', desc: 'Nine ranks. C-grade perseverance.' },
  { label: 'Programming Dao', desc: 'Deterministic logic into realms.' },
  { label: 'Metaphysics', desc: 'Unyielding Monolith. Active nihilism.' },
  { label: 'Human Psychology', desc: 'Biases. Status. Regression traps.' },
  { label: 'Strategic Games', desc: 'Game trees. Minimax. Advantage.' },
  { label: 'Mythology', desc: 'Homer. Daoist ascent. Ren Zu.' },
  { label: 'Science', desc: 'First principles. Quantum frames.' },
];

function domainCard(d, x, y) {
  return `<g transform="translate(${x},${y})">
  <rect width="250" height="110" rx="2" fill="#0e0f12" stroke="#c9a227" stroke-opacity="0.3"/>
  <rect x="0" y="0" width="3" height="110" fill="#c9a227"/>
  <text x="20" y="38" fill="#e7e2d6" font-family="Georgia,serif" font-size="18" font-weight="600">${d.label}</text>
  <text x="20" y="68" fill="#9a9488" font-family="Georgia,serif" font-size="13">${d.desc}</text>
  <text x="20" y="92" fill="#c9a227" font-family="ui-monospace,Consolas,monospace" font-size="10" letter-spacing="2">ENTER DOMAIN</text>
</g>`;
}

let dom = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="360" viewBox="0 0 900 360"><rect width="900" height="360" fill="transparent"/>`;
domains.forEach((d, i) => {
  if (i < 6) {
    const col = i % 3;
    const row = Math.floor(i / 3);
    dom += domainCard(d, col * 300 + 10, row * 120 + 10);
  }
});
dom += domainCard(domains[6], 310, 250);
dom += '</svg>';
fs.writeFileSync(path.join(out, 'domains-board.svg'), dom);

const projects = [
  { file: 'deploy-venerable.svg', title: 'Venerable OS', tag: 'FLAGSHIP', stack: 'Arch · Rust · Hyprland · QML', desc: 'One ink-wash shell for Linux, Windows, macOS.' },
  { file: 'deploy-mausam.svg', title: 'Mausam', tag: 'SIH 2026', stack: 'Rust · Dioxus · Android', desc: 'Offline-first weather. Data into decisions.' },
  { file: 'deploy-pdf.svg', title: 'PDF Scope', tag: 'DESKTOP', stack: 'Rust · Binary Parsing', desc: 'Raw bytes for speed. Memory safety.' },
  { file: 'deploy-laststand.svg', title: 'Last Stand', tag: 'OJT FLAGSHIP', stack: 'Godot 4 · GDScript', desc: 'Survival arena. Final boss: Anurag Shre.' },
  { file: 'deploy-genlink.svg', title: 'GenLink Anti-Scam', tag: 'HACKATHON', stack: 'MERN · JS', desc: 'Digital armor for elders against scams.' },
  { file: 'deploy-noticing.svg', title: 'Art of Noticing', tag: 'RECENT', stack: 'HTML · CSS', desc: 'Attention craft. Reader Heart Gu.' },
  { file: 'deploy-doyouknow.svg', title: 'Do you know?', tag: 'COMPETITION', stack: 'JS · State', desc: 'Dev Duel · IIT Hyderabad ELAN NVision.' },
];

for (const p of projects) {
  const svg = cardShell(
    300,
    180,
    '#c9a227',
    `
  <text x="22" y="36" fill="#c9a227" font-family="ui-monospace,Consolas,monospace" font-size="10" letter-spacing="2">${p.tag}</text>
  <text x="22" y="72" fill="#e7e2d6" font-family="Georgia,serif" font-size="22" font-weight="600">${p.title}</text>
  <text x="22" y="100" fill="#e4c56a" font-family="ui-monospace,Consolas,monospace" font-size="11">${p.stack}</text>
  <text x="22" y="136" fill="#9a9488" font-family="Georgia,serif" font-size="13">${p.desc}</text>
  `,
  );
  fs.writeFileSync(path.join(out, p.file), svg);
}

const paths = [
  { n: '01', label: 'Cultivation Base', items: 'Full-Stack · System Design · SDLC' },
  { n: '02', label: 'Frontend', items: 'JS · React · Vue · Tailwind · Motion' },
  { n: '03', label: 'Backend', items: 'Node · Python · Rust · Postgres · Mongo' },
  { n: '04', label: 'Game Dev', items: 'Godot 4 · GDScript · Physics' },
  { n: '05', label: 'Systems', items: 'Design Thinking · DBMS · SDLC' },
  { n: '06', label: 'DevOps', items: 'Linux · Git · Docker · AWS · Actions' },
];

let grim = `<svg xmlns="http://www.w3.org/2000/svg" width="920" height="280" viewBox="0 0 920 280"><rect width="920" height="280" fill="transparent"/>`;
paths.forEach((p, i) => {
  const col = i % 3;
  const row = Math.floor(i / 3);
  const x = col * 300 + 10;
  const y = row * 135 + 10;
  grim += `<g transform="translate(${x},${y})">
  <rect width="290" height="120" rx="2" fill="#0e0f12" stroke="#c9a227" stroke-opacity="0.28"/>
  <text x="18" y="32" fill="#c9a227" font-family="ui-monospace,Consolas,monospace" font-size="11" letter-spacing="2">PATH ${p.n}</text>
  <text x="18" y="62" fill="#e7e2d6" font-family="Georgia,serif" font-size="20" font-weight="600">${p.label}</text>
  <text x="18" y="92" fill="#9a9488" font-family="Georgia,serif" font-size="12">${p.items}</text>
</g>`;
});
grim += '</svg>';
fs.writeFileSync(path.join(out, 'grimoire-board.svg'), grim);

/** Soft gold aperture / essence meter — pleasant progression readout */
function essenceMeter(x, y, w, level, uid) {
  const fillW = Math.max(6, Math.round((w * level) / 100));
  const beads = 10;
  const filledBeads = Math.round(level / 10);
  let beadSvg = '';
  for (let i = 0; i < beads; i++) {
    const bx = x + i * ((w - 8) / (beads - 1)) + 4;
    const on = i < filledBeads;
    beadSvg += `<circle cx="${bx}" cy="${y - 8}" r="${on ? 2.4 : 1.8}" fill="${on ? '#e4c56a' : '#2a2c32'}" fill-opacity="${on ? 0.95 : 0.7}"/>`;
  }
  return `<g>
  <defs>
    <linearGradient id="ess${uid}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8a7020"/>
      <stop offset="55%" stop-color="#c9a227"/>
      <stop offset="100%" stop-color="#e4c56a"/>
    </linearGradient>
    <linearGradient id="glow${uid}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#c9a227" stop-opacity="0"/>
      <stop offset="100%" stop-color="#e4c56a" stop-opacity="0.55"/>
    </linearGradient>
  </defs>
  ${beadSvg}
  <rect x="${x}" y="${y}" width="${w}" height="8" rx="4" fill="#16171c" stroke="#c9a227" stroke-opacity="0.18"/>
  <rect x="${x}" y="${y}" width="${fillW}" height="8" rx="4" fill="url(#ess${uid})"/>
  <rect x="${x + Math.max(0, fillW - 18)}" y="${y - 1}" width="18" height="10" rx="5" fill="url(#glow${uid})"/>
  <text x="${x + w + 12}" y="${y + 7}" fill="#e4c56a" font-family="ui-monospace,Consolas,monospace" font-size="12" font-weight="600">${level}%</text>
</g>`;
}

function scriptureRow(item, y, uid) {
  const shortTitle =
    item.title.length > 42 ? `${item.title.slice(0, 40)}…` : item.title;
  return `<g transform="translate(0,${y})">
  <rect x="10" y="0" width="900" height="72" rx="3" fill="#0e0f12" stroke="#c9a227" stroke-opacity="0.22"/>
  <rect x="10" y="0" width="3" height="72" fill="#c9a227" fill-opacity="${item.level >= 95 ? 0.95 : 0.45}"/>
  <text x="34" y="28" fill="#e7e2d6" font-family="Georgia,serif" font-size="18" font-weight="600">${shortTitle}</text>
  <text x="34" y="50" fill="#9a9488" font-family="ui-monospace,Consolas,monospace" font-size="11" letter-spacing="1.5">${item.tag}</text>
  ${essenceMeter(520, 32, 280, item.level, uid)}
</g>`;
}

const webnovels = [
  { title: 'Reverend Insanity', tag: 'PEAK  ·  DEMONIC', level: 100 },
  { title: 'Lord of the Mysteries', tag: 'PEAK  ·  ELDRITCH', level: 100 },
  { title: 'Dungeon Defense', tag: 'MASTERPIECE  ·  PSYCHE', level: 95 },
  { title: 'Warlock of the Magus World', tag: 'EXCELLENT  ·  RUTHLESS', level: 90 },
  { title: 'Regressor Instruction Manual', tag: 'EXCELLENT  ·  MANIPULATIVE', level: 90 },
  { title: 'After Ten Millennia in Hell', tag: 'GREAT  ·  DARK FANTASY', level: 85 },
  { title: 'Supreme Magus', tag: 'GREAT  ·  MAGIC', level: 85 },
  { title: 'Got Dropped into a Ghost Story, Still Gotta Work', tag: 'VERY GOOD  ·  THRILLER', level: 80 },
  { title: 'Chrysalis', tag: 'VERY GOOD  ·  MONSTER', level: 80 },
];

const webH = 40 + webnovels.length * 84;
let webBoard = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="920" height="${webH}" viewBox="0 0 920 ${webH}">
<title>Favorite Webnovels</title>
<rect width="920" height="${webH}" fill="transparent"/>
<text x="460" y="22" text-anchor="middle" fill="#c9a227" font-family="ui-monospace,Consolas,monospace" font-size="11" letter-spacing="3">RIVER OF TIME  ·  AFFINITY</text>
`;
webnovels.forEach((w, i) => {
  webBoard += scriptureRow(w, 36 + i * 84, `wn${i}`);
});
webBoard += '</svg>';
fs.writeFileSync(path.join(out, 'webnovels-board.svg'), webBoard);

const librarySections = [
  {
    label: 'ANCIENT TEXTS',
    items: [
      { title: 'The Brothers Karamazov', tag: 'PSYCHOLOGICAL', level: 95 },
      { title: 'The Call of Cthulhu', tag: 'COSMIC HORROR', level: 90 },
      { title: 'At the Mountains of Madness', tag: 'COSMIC HORROR', level: 90 },
      { title: 'The Metamorphosis', tag: 'ABSURDIST', level: 85 },
    ],
  },
  {
    label: 'PHILOSOPHICAL TREATISES',
    items: [
      { title: 'Beyond Good and Evil', tag: 'MASTER MORALITY', level: 100 },
      { title: 'The Ego and Its Own', tag: 'EGOISM', level: 100 },
      { title: 'Logic', tag: 'FUNDAMENTALS', level: 80 },
    ],
  },
  {
    label: 'WORLDLY WISDOM',
    items: [
      { title: 'The 48 Laws of Power', tag: 'MACHIAVELLIAN', level: 100 },
      { title: 'The Laws of Human Nature', tag: 'PSYCHOLOGY', level: 95 },
      { title: 'The Art of Worldly Wisdom', tag: 'STRATEGY', level: 90 },
      { title: 'Antifragile', tag: 'RESILIENCE', level: 85 },
      { title: 'The Lessons of History', tag: 'PATTERNS', level: 85 },
      { title: 'The Great Mental Models', tag: 'FRAMEWORKS', level: 80 },
      { title: 'Superforecasting', tag: 'PREDICTION', level: 80 },
    ],
  },
  {
    label: 'REALMS &amp; SIMULATIONS',
    items: [
      { title: 'Dark Souls 1', tag: 'SUFFERING', level: 100 },
      { title: 'The House in Fata Morgana', tag: 'TRAGEDY', level: 95 },
      { title: 'TES V: Skyrim', tag: 'EXPLORATION', level: 88 },
      { title: 'TES IV: Oblivion', tag: 'EXPLORATION', level: 85 },
      { title: 'Doki Doki Literature Club', tag: 'META HORROR', level: 82 },
      { title: 'Undertale', tag: 'CHOICE', level: 80 },
    ],
  },
];

const sectionFiles = [
  'ancient-texts-board',
  'philosophy-board',
  'worldly-wisdom-board',
  'realms-board',
];

let libH = 24;
librarySections.forEach((s) => {
  libH += 36 + s.items.length * 84 + 16;
});
let libBoard = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="920" height="${libH}" viewBox="0 0 920 ${libH}">
<title>Classics Philosophy Non-Fiction Games</title>
<rect width="920" height="${libH}" fill="transparent"/>
`;
let ly = 8;
librarySections.forEach((section, si) => {
  const secH = 40 + section.items.length * 84;
  let secSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="920" height="${secH}" viewBox="0 0 920 ${secH}">
<title>${section.label.replace(/&amp;/g, 'and')}</title>
<rect width="920" height="${secH}" fill="transparent"/>
<text x="460" y="22" text-anchor="middle" fill="#c9a227" font-family="ui-monospace,Consolas,monospace" font-size="11" letter-spacing="3">${section.label}</text>
`;
  libBoard += `<text x="460" y="${ly + 18}" text-anchor="middle" fill="#c9a227" font-family="ui-monospace,Consolas,monospace" font-size="11" letter-spacing="3">${section.label}</text>`;
  section.items.forEach((item, ii) => {
    secSvg += scriptureRow(item, 36 + ii * 84, `s${si}${ii}`);
    libBoard += scriptureRow(item, ly + 36 + ii * 84, `lb${si}${ii}`);
  });
  secSvg += '</svg>';
  fs.writeFileSync(path.join(out, `${sectionFiles[si]}.svg`), secSvg);
  ly += 36 + section.items.length * 84 + 16;
});
libBoard += '</svg>';
fs.writeFileSync(path.join(out, 'library-board.svg'), libBoard);

async function pngOut(name) {
  try {
    const sharpMod = pathToFileURL(
      'C:/Projects/Gu-Master-Portfolio/node_modules/sharp/lib/index.js',
    ).href;
    const { default: sharp } = await import(sharpMod);
    const src = path.join(out, `${name}.svg`);
    await sharp(fs.readFileSync(src), { density: 180 })
      .png()
      .toFile(path.join(out, `${name}.png`));
    console.log('Also wrote', `${name}.png`);
  } catch (err) {
    console.warn(`${name}.png skipped:`, err.message);
  }
}

await pngOut('webnovels-board');
await pngOut('library-board');
for (const name of sectionFiles) {
  await pngOut(name);
}

console.log('Wrote', fs.readdirSync(out).length, 'card assets');
