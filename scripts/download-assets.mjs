import { mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const BASE =
  "https://demo2.themelexus.com/bocpak/wp-content/uploads/2024/05/";
const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images", "home-2");

const FILES = [
  "h2-slider2.jpg",
  "h2-slider4.png",
  "h2-slider6.png",
  "h2-category1.png",
  "h2-category2.png",
  "h2-category3.png",
  "h2-category4.png",
  "h2-category5.png",
  "h2-category6.png",
  "h2-category7.png",
  "h2-category8.png",
  "h2-image-1.png",
  "h2-image-2.jpg",
  "h2-image-3.jpg",
  "h2-image-4.jpg",
  "h2-image-5.jpg",
  "h2-bg-1.png",
  "h2-bg-2.png",
  "h2-bg-3.png",
  "h2-image-banner-1.jpg",
  "h2-image-banner-2.jpg",
  "work-image-1.png",
  "work-image-2.png",
  "work-image-3.png",
  "h2-image-gallery-1.jpg",
  "h2-image-gallery-2.jpg",
  "h2-image-gallery-3.jpg",
  "h2-image-gallery-4.jpg",
  "h2-image-gallery-5.jpg",
  "h2-image-gallery-6.jpg",
  "product-15-1.jpg",
  "product-16-1.jpg",
  "product-17-1.jpg",
  "product-18-1.jpg",
  "product-19-1.jpg",
  "product-20-1.jpg",
  "h2-brands-1.svg",
  "h2-brands-2.svg",
  "h2-brands-3.svg",
  "h2-brands-4.svg",
  "h2-brands-5.svg",
  "logo3.svg",
  "payment.png",
  "h2-svg-1.svg",
  "h2-svg-2.svg",
  "h2-svg-3.svg",
];

await mkdir(OUT, { recursive: true });

for (const file of FILES) {
  const url = BASE + file;
  const dest = join(OUT, file);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    console.log(`OK ${file}`);
  } catch (e) {
    console.error(`FAIL ${file}:`, e.message);
  }
}

console.log("Done.");
