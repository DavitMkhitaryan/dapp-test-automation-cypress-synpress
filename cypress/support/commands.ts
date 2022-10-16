/// <reference types="cypress" />

import "cypress-file-upload";
import { urlData } from "../fixtures/testData";
import { Landing } from "../pages/landing";
import { Dashboard } from "../pages/dashboard";

Cypress.Commands.add("uploadFile", (input, filename) => {
  cy.get(input).attachFile(filename);
});

Cypress.Commands.add("connectMetamask", () => {
  const landing = new Landing();
  const dashboard = new Dashboard();

  cy.visit(urlData.landingPage);
  landing.clickConnectWalletButton();
  landing.selectMetamaskOption();
  cy.acceptMetamaskAccess();
  cy.confirmMetamaskDataSignatureRequest();
  dashboard.getConnectedText().then((text) => {
    expect(text).to.be.eq('Connected');
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      uploadFile(input: string, filename: string): Chainable<Element>;
      connectMetamask(): Chainable<Element>;
    }
  }
}
