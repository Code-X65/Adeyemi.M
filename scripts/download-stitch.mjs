import fs from 'node:fs';
import path from 'node:path';

const API_KEY = process.env.STITCH_API_KEY || "";
const PROJECT_ID = "18221639415710694189";
const BASE_URL = `https://stitch.googleapis.com/v1/projects/${PROJECT_ID}`;

const screens = [
  { id: 'f0ce4c09a1b5408a895755f8b35325c2', slug: 'about-me', title: 'About Me — Adeyemi Idowu Modupeola' },
  { id: '47ac1ed55bfd463fbc09d991ccc6d975', slug: 'home', title: 'Home — Adeyemi Idowu Modupeola' },
  { id: 'f53e12ae878a484da4f21bb721ce9b7f', slug: 'experience', title: 'Experience — Adeyemi Idowu Modupeola' },
  { id: '7c28ca682a9149b8a1b728243cab151b', slug: 'education-and-certifications', title: 'Education & Certifications — Adeyemi Idowu Modupeola' },
  { id: 'bdffd5b050fc471d9614e2c3dfbeb54a', slug: 'contact-and-inquiries', title: 'Contact & Inquiries — Adeyemi Idowu Modupeola' }
];

const photoAssets = [
  { id: '2a2fc9a9126e45a086a1c1072115cbb0', slug: 'construction-framework' },
  { id: '37a23b9145fb47b88847f1ae1187797b', slug: 'engineer-inspecting-site' },
  { id: 'be1b9f03b6b34ca69e02bd915d2d92c6', slug: 'engineer-with-blueprints' }
];

const screensDir = path.resolve('stitch-designs/screens');
const htmlDir = path.resolve('stitch-designs/html');
const photosDir = path.resolve('stitch-designs/photos');

fs.mkdirSync(screensDir, { recursive: true });
fs.mkdirSync(htmlDir, { recursive: true });
fs.mkdirSync(photosDir, { recursive: true });

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: { 'X-Goog-Api-Key': API_KEY }
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return await res.json();
}

async function run() {
  console.log('Downloading screens...');
  for (const s of screens) {
    console.log(`\nFetching screen: ${s.title} (${s.id})`);
    const screenData = await fetchJson(`${BASE_URL}/screens/${s.id}`);
    
    // Save metadata
    fs.writeFileSync(path.join(screensDir, `${s.slug}.json`), JSON.stringify(screenData, null, 2));

    // Download screenshot
    if (screenData.screenshot?.downloadUrl) {
      console.log(`  Downloading screenshot for ${s.slug}...`);
      const fileData = await fetchJson(screenData.screenshot.downloadUrl);
      if (fileData.dataString) {
        fs.writeFileSync(path.join(screensDir, `${s.slug}.png`), Buffer.from(fileData.dataString, 'base64'));
        console.log(`  Saved screenshot: stitch-designs/screens/${s.slug}.png`);
      }
    }

    // Download HTML
    if (screenData.htmlCode?.downloadUrl) {
      console.log(`  Downloading HTML for ${s.slug}...`);
      const fileData = await fetchJson(screenData.htmlCode.downloadUrl);
      if (fileData.dataString) {
        fs.writeFileSync(path.join(htmlDir, `${s.slug}.html`), fileData.dataString, 'utf-8');
        console.log(`  Saved HTML: stitch-designs/html/${s.slug}.html`);
      }
    }
  }

  console.log('\nDownloading photo assets...');
  for (const p of photoAssets) {
    try {
      console.log(`Fetching photo screen: ${p.slug} (${p.id})`);
      const screenData = await fetchJson(`${BASE_URL}/screens/${p.id}`);
      if (screenData.screenshot?.downloadUrl) {
        const fileData = await fetchJson(screenData.screenshot.downloadUrl);
        if (fileData.dataString) {
          fs.writeFileSync(path.join(photosDir, `${p.slug}.png`), Buffer.from(fileData.dataString, 'base64'));
          console.log(`  Saved photo: stitch-designs/photos/${p.slug}.png`);
        }
      }
    } catch (err) {
      console.error(`  Failed to download photo ${p.slug}:`, err.message);
    }
  }

  console.log('\nAll Stitch assets downloaded successfully!');
}

run().catch((err) => {
  console.error('Download script error:', err);
  process.exit(1);
});
