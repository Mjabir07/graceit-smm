// Generate branded 1080x1080 social post PNGs for Grace IT Solutions.
// Renders HTML cards with headless Chromium. No external deps.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const OUT = 'posts';
mkdirSync(OUT, { recursive: true });

const logoLight = 'data:image/png;base64,' + readFileSync('assets/logo-light.png').toString('base64');

const C = {
  red: '#E31E2D', dark: '#0B1220', charcoal: '#1F2937',
  slate: '#94A3B8', light: '#F5F7FA', white: '#FFFFFF', border: '#243049',
};

// Each post: id, kicker, headline (HTML ok), bullets[], footerCTA
const posts = [
  { id: '02-approved', kicker: 'COMPLIANCE CHECK', headline: 'Is your CCTV<br><span class="r">Sharjah Police approved?</span>', body: 'Unapproved systems can fail at licence renewal — and cost you fines. We install approved, certified, documented CCTV.', tag: '🛡️' },
  { id: '04-pc-signs', kicker: 'IT TIP', headline: '3 signs your office<br><span class="r">PC is about to fail</span>', bullets: ['Slow to start / freezes', 'Random crashes', 'Clicking or grinding noises'], body: 'Fix it early — cheaper than data recovery.', tag: '💻' },
  { id: '05-footage', kicker: 'DID YOU KNOW', headline: 'Keep CCTV footage<br><span class="r">30+ days</span>', body: 'UAE businesses must store CCTV footage for a minimum of 30 days, securely. Is your system compliant?', tag: '📼' },
  { id: '07-amc', kicker: 'ANNUAL MAINTENANCE', headline: 'What an <span class="r">IT AMC</span><br>gets your business', bullets: ['Proactive monitoring', 'Priority response', 'Regular maintenance', 'One fixed monthly cost'], tag: '🔧' },
  { id: '15-backup', kicker: 'DATA PROTECTION', headline: 'The <span class="r">3-2-1</span> backup rule', bullets: ['3 copies of your data', '2 different storage types', '1 copy offsite / cloud'], body: 'Most data disasters are preventable.', tag: '💾' },
  { id: '17-survey', kicker: 'THIS WEEK', headline: 'FREE<br><span class="r">on-site survey</span>', body: 'CCTV, network or IT support — we assess your premises and recommend what fits your needs and budget. No pressure, no jargon.', tag: '📋' },
  { id: '20-approved-vs', kicker: 'BEFORE YOU BUY', headline: 'Cheaper CCTV quote?<br><span class="r">Ask one question.</span>', body: '“Are you actually approved to install here?” Unapproved work can fail inspection and cost more to redo. We’re Sharjah Police approved.', tag: '🛡️' },
  { id: '22-downtime', kicker: 'BUSINESS IMPACT', headline: 'What does 1 hour of<br><span class="r">IT downtime</span> cost you?', body: 'Lost sales. Idle staff. Frustrated customers. An AMC keeps systems monitored and fixes fast.', tag: '📈' },
  { id: '24-security', kicker: 'SECURITY CHECK', headline: '30-second office<br><span class="r">security check</span>', bullets: ['Unique passwords', 'Two-factor on email', 'Software updated', 'Verified backups'], tag: '🔐' },
  { id: '29-one-partner', kicker: 'WHY GRACE', headline: 'Tired of juggling<br><span class="r">5 different vendors?</span>', body: 'One accountable partner for computers, network, CCTV, email and support. Fewer headaches. Faster fixes.', tag: '🤝' },
  { id: '30-recap', kicker: 'GRACE IT SOLUTIONS', headline: 'Everything your business<br><span class="r">technology needs</span>', bullets: ['Approved CCTV & security', 'IT support & AMC', 'Networks & structured cabling', 'Data recovery · Email · Repairs'], tag: '🙌' },
  { id: '01-intro', kicker: 'THE SPIRIT OF SERVICE', headline: 'Sharjah’s <span class="r">compliance-first</span><br>IT & security partner', body: 'One accountable local team for your CCTV, computers, network and ongoing IT — across Sharjah & the Northern Emirates.', tag: '👋' },
];

function card(p) {
  const bullets = p.bullets ? `<ul>${p.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : '';
  const body = p.body ? `<p class="body">${p.body}</p>` : '';
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:1080px;height:1080px}
  body{font-family:'Segoe UI',Helvetica,Arial,sans-serif;background:${C.dark};color:${C.white};
    background-image:radial-gradient(circle at 85% 8%, rgba(227,30,45,.18), transparent 42%);}
  .card{width:1080px;height:1080px;padding:96px 88px;display:flex;flex-direction:column;position:relative}
  .topbar{height:10px;width:150px;background:${C.red};border-radius:6px}
  .tag{position:absolute;top:80px;right:88px;font-size:76px}
  .kicker{margin-top:54px;letter-spacing:5px;font-size:26px;font-weight:700;color:${C.red}}
  h1{margin-top:34px;font-size:82px;line-height:1.06;font-weight:800;letter-spacing:-1px}
  h1 .r{color:${C.red}}
  .body{margin-top:40px;font-size:38px;line-height:1.4;color:${C.slate};max-width:840px}
  ul{margin-top:44px;list-style:none;display:flex;flex-direction:column;gap:26px}
  li{font-size:42px;font-weight:600;padding-left:56px;position:relative}
  li::before{content:'';position:absolute;left:0;top:14px;width:26px;height:26px;border-radius:7px;background:${C.red}}
  .spacer{flex:1}
  .footer{display:flex;align-items:center;justify-content:space-between;border-top:1px solid ${C.border};padding-top:40px}
  .footer img{height:74px}
  .contact{text-align:right;font-size:30px;line-height:1.5;color:${C.white};font-weight:600}
  .contact .wa{color:${C.red}}
  </style></head><body><div class="card">
    <div class="topbar"></div><div class="tag">${p.tag||''}</div>
    <div class="kicker">${p.kicker}</div>
    <h1>${p.headline}</h1>
    ${body}${bullets}
    <div class="spacer"></div>
    <div class="footer">
      <img src="${logoLight}" alt="Grace IT Solutions"/>
      <div class="contact"><span class="wa">WhatsApp 055 890 8651</span><br>info@graceitme.com · Sharjah, UAE</div>
    </div>
  </div></body></html>`;
}

for (const p of posts) {
  const html = `/tmp/card-${p.id}.html`;
  writeFileSync(html, card(p));
  const png = `${OUT}/${p.id}.png`;
  execFileSync(CHROME, [
    '--headless', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
    '--force-device-scale-factor=1', '--window-size=1080,1080',
    `--screenshot=${png}`, `file://${html}`,
  ], { stdio: 'ignore' });
  console.log('generated', png);
}
console.log('DONE', posts.length, 'cards');
