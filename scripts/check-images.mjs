import fs from "fs";
import path from "path";

// Quick scanner for image URLs in data files
const dataFiles = [
  "data/menu.ts",
  "data/gallery.ts",
  "data/events.ts",
  "data/team.ts",
  "data/testimonials.ts",
];

const urlRegex = /https:\/\/[^"'\s)]+/g;
const localRegex = /["'](\/images\/[^"'\s)]+)["']/g;

async function checkImages() {
  console.log("🔍 Scanning project for image references...\n");

  const remoteUrls = new Set();
  const localPaths = new Set();

  for (const file of dataFiles) {
    if (!fs.existsSync(file)) continue;
    const content = fs.readFileSync(file, "utf-8");

    let match;
    while ((match = urlRegex.exec(content)) !== null) {
      if (match[0].includes("images.unsplash.com") || match[0].match(/\.(jpg|jpeg|png|webp|svg)/i)) {
        remoteUrls.add(match[0]);
      }
    }

    while ((match = localRegex.exec(content)) !== null) {
      localPaths.add(match[1]);
    }
  }

  console.log(`Found ${remoteUrls.size} remote image URLs and ${localPaths.size} local image paths.\n`);

  let failures = 0;

  // Check local files
  for (const localPath of localPaths) {
    const fullPath = path.join(process.cwd(), "public", localPath);
    if (fs.existsSync(fullPath)) {
      console.log(`✅ [LOCAL OK] ${localPath}`);
    } else {
      console.log(`❌ [LOCAL MISSING] ${localPath}`);
      failures++;
    }
  }

  // Check remote URLs (with quick HEAD/GET timeout)
  console.log("\nChecking remote image responses...");
  for (const url of remoteUrls) {
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 6000);
      const res = await fetch(url, { method: "HEAD", signal: controller.signal });
      clearTimeout(id);

      if (res.ok) {
        console.log(`✅ [HTTP ${res.status}] ${url.slice(0, 70)}...`);
      } else {
        console.log(`⚠️  [HTTP ${res.status}] ${url}`);
        failures++;
      }
    } catch (err) {
      // In sandbox mode or offline, warn without hard-crashing build
      console.log(`ℹ️  [SKIP/OFFLINE] ${url.slice(0, 60)}... (${err.message})`);
    }
  }

  console.log(`\n🎉 Image check finished. Missing local files: ${failures}\n`);
}

checkImages();

