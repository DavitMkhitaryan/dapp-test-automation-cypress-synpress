/// <reference types="cypress" />

export class Helpers {
  // Interactions

  inputTextIntoFieldWithName(name: string, text: string) {
    cy.get(`input[name=${name}]`).clear();
    cy.get(`input[name=${name}]`).type(text);
  }
}
