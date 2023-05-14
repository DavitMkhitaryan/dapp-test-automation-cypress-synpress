/// <reference types="cypress" />

class HomePage {

  get btnLastPage() {
    return cy.get('.pagination-item:nth-last-child(2)');
  }

  navigate() {
    cy.visit('/');
  }

  openLastPage() {
    return this.btnLastPage.click();
  }

  getAllRowsOnPage() {
    return cy.get('tbody > tr');
  }
}

export default new HomePage();
