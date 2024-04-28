const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Function to create the screenshot folder
function createScreenshotFolder() {
  const folderName = new Date().toISOString().replace(/:/g, "_");
  const screenshotsFolder = path.join(__dirname, "screenshots", folderName);
  fs.mkdirSync(screenshotsFolder, { recursive: true });
  return screenshotsFolder;
}

// Function to run main scripts sequentially
function runMainScripts(screenshotsFolder) {
  const script1Command = `node hello.js "${screenshotsFolder}"`; // Pass screenshotsFolder as command line argument
  const script2Command = `node bye.js "${screenshotsFolder}"`; // Pass screenshotsFolder as command line argument

  // Execute scripts sequentially
  execSync(script1Command);
  execSync(script2Command);
}

// Main function to create folder and run scripts
function run() {
  try {
    const screenshotsFolder = createScreenshotFolder();
    runMainScripts(screenshotsFolder);
    console.log("Scripts execution completed successfully.");
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
