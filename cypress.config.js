const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    specPattern: 'cypress/e2e/MYTM Travels/**/*.{js,jsx,ts,tsx}',
    experimentalStudio: true,
    pageLoadTimeout: 90000,
    retries: {
      runMode: 0,
      openMode: 0,
    },
  },
});