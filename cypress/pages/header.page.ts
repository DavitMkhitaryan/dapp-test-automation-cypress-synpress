/// <reference types="cypress" />

class Header {
  get btnConnect() {
    return cy.contains('Connect');
  }

  get btnAddCitizen() {
    return cy.contains('Add Citizen');
  }

  get connectedAddress() {
    return cy.get('.account-txt')
  }

  get imgCompanyLogo() {
    return cy.get('img[alt="product-logo"]');
  }

  clickConnectButton() {
    return this.btnConnect.click();
  }

  connectWallet() {
    this.clickConnectButton();
    cy.acceptMetamaskAccess();
  }

  getConnectedAddressText() {
    return this.connectedAddress.invoke('text');
  }

  clickAddCitizenButton() {
    return this.btnAddCitizen.click();
  }
}

export default new Header();
