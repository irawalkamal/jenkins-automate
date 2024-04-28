const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const hello = async (screenshotsFolder) => {
  const browser = await puppeteer.launch({ headless: false });

  const pages = await browser.pages();

  // Use the first page (assuming it's the initial page)
  const page = pages[0];

  await page.goto("https://www.facebook.com");

  const screenshotPath = path.join(
    screenshotsFolder,
    `screenshot_${Date.now()}.png`
  );

  // Take a screenshot of the results page
  await page.screenshot({ path: screenshotPath });
  await browser.close();
};

hello(process.argv[2]);
