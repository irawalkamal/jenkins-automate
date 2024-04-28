const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const bye = async (screenshotsFolder) => {
  const browser = await puppeteer.launch({ headless: false });

  const pages = await browser.pages();

  // Use the first page (assuming it's the initial page)
  const page = pages[0];

  await page.goto("https://www.google.com");

  const screenshotPath = path.join(
    screenshotsFolder,
    `screenshot_${Date.now()}.png`
  );

  // Take a screenshot of the results page
  await page.screenshot({ path: screenshotPath });
  await browser.close();
};

bye(process.argv[2]);
