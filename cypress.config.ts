import { defineConfig } from 'cypress'
import { timeout } from './cypre/cypress/support/consts/common';

export default defineConfig({
  e2e: {
    specPattern: "cypre/cypress/e2e/*.cy.ts",
    defaultCommandTimeout: timeout,
    baseUrl: "https://www.typescriptlang.org/",
    video: true,
    supportFile: "cypre/cypress/support/e2e.js",
    reporter: "spec",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});
