
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
      headless: false,
      viewport: { width: 1280, height: 720 },
      channel: "chrome",
      video: 'retain-on-failure',
      trace: 'retain-on-failure'
    },
  };
  
  module.exports = config;