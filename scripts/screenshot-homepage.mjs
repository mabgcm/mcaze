import { chromium } from "playwright";

const url = process.env.SCREENSHOT_URL ?? "http://localhost:3000";

const viewports = [
  {
    name: "wide",
    file: "homepage-wide.png",
    width: 1440,
    height: 1100,
    isMobile: false,
  },
  {
    name: "mobile",
    file: "homepage-mobile.png",
    width: 390,
    height: 844,
    isMobile: true,
  },
];

const browser = await chromium.launch();

try {
  for (const viewport of viewports) {
    const page = await browser.newPage({
      viewport: { width: viewport.width, height: viewport.height },
      isMobile: viewport.isMobile,
      deviceScaleFactor: 1,
    });

    await page.goto(url, { waitUntil: "networkidle" });
    await page.screenshot({ path: viewport.file, fullPage: true });
    await page.close();

    console.log(`Saved ${viewport.name} screenshot to ${viewport.file}`);
  }
} finally {
  await browser.close();
}
