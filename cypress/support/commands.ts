/// <reference types="cypress" />

import "cypress-file-upload";

Cypress.Commands.add('uploadFile', (input, filename) => {
  cy.get(input).attachFile(filename);
});

Cypress.Commands.add('clearAndType', (inputElement, text) => {
  inputElement.clear();
  inputElement.type(text);
});

declare global {
  namespace Cypress {
    interface Chainable {
      uploadFile(input: string, filename: string): Chainable<Element>;
      clearAndType(inputElement: Chainable<JQuery<HTMLElement>>, text: string): void;
    }
  }
}
