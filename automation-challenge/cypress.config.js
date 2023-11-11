const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automation-sandbox-python-mpywqjbdza-uc.a.run.app',
    defaultCommandTimeout: 5000,
    watchForFileChanges: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Custom Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      ignoreVideos: false,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    viewportHeight: 1024,
    viewportWidth: 1440
  },
});
