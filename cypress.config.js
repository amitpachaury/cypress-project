const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'matqsf',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
