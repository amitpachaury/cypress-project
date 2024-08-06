const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'eq2aki',
  "numTestsKeptInMemory": 0,
  "requestTimeout": 30000,
  "responseTimeout": 50000,
  "pageLoadTimeout": 100000,
  "defaultCommandTimeout": 6000,
  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      {
        
        reporter: "mochawesome";
          reporterOptions:
        {
          charts: true;
          overwrite: false;
          html: false;
          json: true;
          reportDir: "cypress/report/mochawesome-report"
        }
      }
      
    },
  },
  // cypress/plugins/index.js

});
