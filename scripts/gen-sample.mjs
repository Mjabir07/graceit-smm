// Premium single-sample post: real photo + gradient scrim + minimal bold type.
import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const bg = 'data:image/jpeg;base64,' + readFileSync('assets/featured-cctv.jpg').toString('base64');
const logo = 'data:image/png;base64,' + readFileSync('assets/logo-light.png').toString('base64');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1080px;font-family:'Segoe UI',Helvetica,Arial,sans-serif}
.card{width:1080px;height:1080px;position:relative;overflow:hidden}
.photo{position:absolute;inset:0;background:url('${bg}') center/cover no-repeat}
.scrim{position:absolute;inset:0;background:
   linear-gradient(180deg, rgba(11,18,32,.5) 0%, rgba(11,18,32,0) 24%, rgba(11,18,32,0) 34%, rgba(11,18,32,.9) 74%, rgba(11,18,32,.98) 100%)}
.badge{position:absolute;top:64px;left:64px;display:flex;align-items:center;gap:14px;
   background:#E31E2D;color:#fff;font-weight:800;letter-spacing:2px;font-size:24px;
   padding:16px 28px;border-radius:100px;box-shadow:0 8px 30px rgba(227,30,45,.45)}
.content{position:absolute;left:64px;right:64px;bottom:172px}
.accent{width:88px;height:8px;background:#E31E2D;border-radius:6px;margin-bottom:26px}
h1{color:#fff;font-size:84px;line-height:1.03;font-weight:800;letter-spacing:-1.5px;
   text-shadow:0 4px 30px rgba(0,0,0,.5)}
h1 .r{color:#E31E2D}
.sub{color:#E5EAF2;font-size:34px;font-weight:500;margin-top:24px;max-width:820px;line-height:1.35;
   text-shadow:0 2px 16px rgba(0,0,0,.6)}
.footbar{position:absolute;left:0;right:0;bottom:0;height:170px;background:#0B1220;
   display:flex;align-items:flex-start;justify-content:space-between;padding:34px 60px 0;
   border-top:3px solid #E31E2D}
.footbar img{height:56px;opacity:.98}
.cta{color:#fff;font-size:30px;font-weight:700;text-align:right;white-space:nowrap}
.cta .wa{color:#E31E2D}
</style></head><body>
<div class="card">
  <div class="photo"></div>
  <div class="scrim"></div>
  <div class="badge">🛡️ SHARJAH POLICE APPROVED</div>
  <div class="content">
    <div class="accent"></div>
    <h1>Is your CCTV<br><span class="r">actually compliant?</span></h1>
    <p class="sub">Unapproved systems can fail at licence renewal. We install approved, certified CCTV — with the paperwork to prove it.</p>
  </div>
  <div class="footbar">
    <img src="${logo}" alt="Grace IT Solutions"/>
    <div class="cta"><span class="wa">WhatsApp 055 890 8651</span> · info@graceitme.com</div>
  </div>
</div></body></html>`;

writeFileSync('/tmp/sample.html', html);
execFileSync(CHROME, ['--headless','--no-sandbox','--disable-gpu','--hide-scrollbars',
  '--force-device-scale-factor=1','--window-size=1080,1080',
  '--default-background-color=00000000','--screenshot=posts/SAMPLE-cctv-premium.png','file:///tmp/sample.html'],
  {stdio:'ignore'});
console.log('done');
