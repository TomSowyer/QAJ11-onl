const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cepress/e2e/**/*.cy.ts",
    defaultCommandTimeout: 20000,
    baseUrl: "https://www.typescriptlang.org/",
    video: true,
    supportFile: "support/e2e.ts",
    reporter: "spec",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});
