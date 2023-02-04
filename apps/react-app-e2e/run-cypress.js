const Cypress = require('cypress'); // @NOTE: Importing via ES6 messes the whole test dependencies.

Cypress.run({
  project: 'apps/react-app-e2e',
  configFile: 'cypress.config.ts',
  config: {
    baseUrl: 'http://localhost:4200/',
    e2e: { excludeSpecPattern: undefined }
  },
  env: {},
  tag: undefined,
  exit: true,
  headed: false,
  record: false,
  key: undefined,
  parallel: false,
  ciBuildId: undefined,
  group: undefined,
  testingType: 'e2e'
})