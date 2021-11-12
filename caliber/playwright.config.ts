import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  //sets timeout for each test case
  timeout: 12000000,
  //global time for each test cases
  globalTimeout: 12000000,
  //number of retries if test case fails
  retries: 0,
  workers: 1,
  projects: [
    {
      name: "Caliber",
      use: {
        // Configure the browser to use.
        browserName: `chromium`,
        //Chrome Browser Config
        //channel: `chrome`,
        //Browser Mode
        headless: false,
        launchOptions: {
          slowMo: 0,
        },

        ignoreHTTPSErrors: true,
        //Browser height and width
        viewport: { width: 1920, height: 1080 },
        //Enable File Downloads in Chrome
        acceptDownloads: true,
        //Artifacts
        screenshot: `on`,
        video: `on`,
        trace: `on`,
      },
    }
  ],
  testMatch: [
    'loginPage.test.ts',
    // 'homePage.test.ts',
    // 'manageBatch.test.ts',//38m
    // 'settings.test.ts',
    // 'accessBatch.test.ts',//24m
    // 'qualityAudit.test.ts'//18m
  ],
  //Reporters
  reporter: [[`list`], [`experimental-allure-playwright`]],
  // grep: [new RegExp("@smoke"), new RegExp("@slow"), new RegExp("@fast"), new RegExp("@reg"), new RegExp('@sanity')],
};

export default config;
