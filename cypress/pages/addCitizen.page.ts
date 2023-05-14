/// <reference types="cypress" />

class AddCitizenPage {
  navigate() {
    cy.visit('/add-citizen');
  }

  get inputName() {
    return cy.get('input[name="name"]');
  }

  get inputAge() {
    return cy.get('input[name="age"]');
  }

  get inputCity() {
    return cy.get('input[name="city"]');
  }

  get inputNote() {
    return cy.get('textarea[name="note"]');
  }

  get btnAdd() {
    return cy.get('form > button');
  }

  get msgCitizenAddedSuccess() {
    return cy.contains('Citizen added successfully');
  }

  clickAddButton() {
    return this.btnAdd.click();
  }

  typeUserInfo(name: string, age: string, city: string, note: string) {
    cy.clearAndType(this.inputName, name);
    cy.clearAndType(this.inputAge, age);
    cy.clearAndType(this.inputCity, city);
    cy.clearAndType(this.inputNote, note);
  }

  addCitizen(name: string, age: string, city: string, note: string) {
    this.typeUserInfo(name, age, city, note);
    this.clickAddButton();
    cy.confirmMetamaskTransaction();
  }
}

export default new AddCitizenPage();
