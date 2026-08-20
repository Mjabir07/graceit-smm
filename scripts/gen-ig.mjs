// Generate Instagram profile picture + highlight cover icons.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
mkdirSync('brand/ig', { recursive: true });
const logo = 'data:image/png;base64,' + readFileSync('assets/logo-light.png').toString('base64');
const logoFull = 'data:image/png;base64,' + readFileSync('assets/logo-dark.png').toString('base64');
const RED = '#E31E2D', DARK = '#0B1220';

function shot(name, html, w = 1080, h = 1080) {
  const f = `/tmp/ig-${name}.html`; writeFileSync(f, html);
  execFileSync(CHROME, ['--headless','--no-sandbox','--disable-gpu','--hide-scrollbars',
    '--force-device-scale-factor=1',`--window-size=${w},${h}`,
    `--screenshot=brand/ig/${name}.png`,`file://${f}`], { stdio: 'ignore' });
  console.log('  brand/ig/' + name + '.png');
}
const page = (body, extra='') => `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}html,body{width:1080px;height:1080px}
body{font-family:'Segoe UI',Helvetica,Arial,sans-serif;display:flex;align-items:center;justify-content:center;background:${DARK}}
${extra}</style></head><body>${body}</body></html>`;

// Profile picture: EXACT official logo lockup (mark + Grace + Computers FZC) on white, red ring
shot('profile', page(
  `<div class="wrap"><div class="ring"></div><div class="stack"><img src="${logo}"/><div class="fzc">Computers <span>FZC</span></div><div class="sub">SHARJAH · UAE</div></div></div>`,
  `.wrap{width:1080px;height:1080px;display:flex;align-items:center;justify-content:center;position:relative;background:#FFFFFF}
   .ring{position:absolute;width:1010px;height:1010px;border-radius:50%;border:14px solid ${RED}}
   .stack{display:flex;flex-direction:column;align-items:center;margin-top:20px}
   .stack img{width:680px;height:auto}
   .fzc{color:#1a1a1a;font-family:Georgia,'Times New Roman',serif;font-size:78px;font-weight:700;letter-spacing:2px;margin-top:-18px}
   .fzc span{color:${RED}}
   .sub{color:${RED};font-size:32px;font-weight:700;letter-spacing:10px;margin-top:22px}`
));

// Highlight covers: dark circle bg + red line icon (inline SVG) + label under
const covers = [
  { name: 'cover-cctv',    label: 'CCTV',     svg: `<circle cx="32" cy="32" r="10"/><path d="M4 24c8-14 44-14 56 0"/><path d="M12 40c6-8 34-8 40 0"/>` },
  { name: 'cover-it',      label: 'IT & AMC',  svg: `<rect x="8" y="12" width="48" height="32" rx="3"/><path d="M22 52h20M32 44v8"/>` },
  { name: 'cover-network', label: 'NETWORK',  svg: `<rect x="24" y="8" width="16" height="12" rx="2"/><rect x="6" y="44" width="16" height="12" rx="2"/><rect x="42" y="44" width="16" height="12" rx="2"/><path d="M32 20v12M32 32H14v12M32 32h18v12"/>` },
  { name: 'cover-reviews', label: 'REVIEWS',  svg: `<path d="M32 6l8 16 18 2-13 13 3 18-16-9-16 9 3-18L6 24l18-2z"/>` },
  { name: 'cover-offers',  label: 'OFFERS',   svg: `<path d="M30 6l24 24-24 24L6 30V10a4 4 0 0 1 4-4z"/><circle cx="20" cy="20" r="4" fill="#0B1220"/>` },
  { name: 'cover-contact', label: 'CONTACT',  svg: `<path d="M14 10h12l4 12-8 6c3 8 10 15 18 18l6-8 12 4v12c0 3-2 5-5 5C34 71 9 46 9 15c0-3 2-5 5-5z"/>` },
];
for (const c of covers) {
  shot(c.name, page(
    `<div class="c"><div class="ic"><svg viewBox="0 0 64 64" fill="none" stroke="${RED}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${c.svg}</svg></div><div class="lbl">${c.label}</div></div>`,
    `.c{display:flex;flex-direction:column;align-items:center;gap:70px}
     .ic{width:440px;height:440px;border-radius:50%;background:#14213a;border:8px solid ${RED};
        display:flex;align-items:center;justify-content:center}
     .ic svg{width:220px;height:220px}
     .lbl{color:#fff;font-size:72px;font-weight:800;letter-spacing:6px}`
  ));
}
console.log('DONE');
