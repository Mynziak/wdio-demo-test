import * as fs from 'fs';
import * as path from 'path';
import Gestures from './Gestures';
import reporter from '@wdio/allure-reporter';

/**
 * Saves a screenshot to a file with the given filename and data.
 * @param {string} directory - The directory to save the screenshot in.
 * @param {string} filename - The name of the file to save the screenshot to.
 * @param {Buffer} screenshotData - The binary data of the screenshot.
 */
export function saveScreenshot(directory: string, filename: string, screenshotData: any) {
  // Create the directory if it doesn't exist
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  // Combine the directory and filename to get the full path
  const screenshotPath = path.join(directory, filename);

  // Save the screenshot to the specified path
  fs.writeFileSync(screenshotPath, screenshotData, 'base64');
}

/**
 * Function to block and unblock the display
 */
export async function blockDisplay(): Promise<void> {
  await Gestures.swipeDown();
  await Gestures.swipeUp();
}

export async function openUrl(url: string): Promise<void> {
  reporter.addStep('opening url = ' + url)
  await browser.url(url)
}



