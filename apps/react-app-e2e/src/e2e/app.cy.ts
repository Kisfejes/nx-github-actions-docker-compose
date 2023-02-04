import { getGreeting } from '../support/app.po';

describe('react-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should get example response', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');
    // Function helper example, see `../support/app.po.ts` file
    // getGreeting().contains('Welcome react-app');

    cy.get('#request-button').click();
    cy.get('#result-show').should('have.text', 'result: Hello World\n');
  });
});
