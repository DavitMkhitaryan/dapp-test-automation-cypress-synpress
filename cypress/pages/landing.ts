/// <reference types="cypress" />

import { landingPageLocators } from '../support/locators';

export class Landing {
  getConnectWalletButton() {
    return cy.contains("Connect Wallet");
  }

  clickConnectWalletButton() {
    return this.getConnectWalletButton().click();
  }

  getMetamaskOption() { 
    return cy.contains("MetaMask");
  }

  selectMetamaskOption() {
    return this.getMetamaskOption().click();
  }
}
