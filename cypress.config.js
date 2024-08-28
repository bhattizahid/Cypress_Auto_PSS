const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    specPattern: 'cypress/integration/examples/MYTM Travels/*.js',
    experimentalStudio: true,
    pageLoadTimeout: 90000,
    retries: {
      runMode: 0,
      openMode: 0,
    },
  },
});