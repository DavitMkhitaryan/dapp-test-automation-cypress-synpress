/// <reference types="cypress"/>

import { urlData } from "../fixtures/testData";
import { Landing } from "../pages/landing";
import { Dashboard } from "../pages/dashboard";

describe("Demo Tests", () => {
    const landing = new Landing();
    const dashboard = new Dashboard();

    before(() => {
        cy.connectMetamask();
    });

    after(() => {
        cy.origin("https://google.com", () => {
            cy.visit("/");
        });
        cy.disconnectMetamaskWalletFromDapp();
    });

    it("Create a deposit", () => {
        cy.visit(urlData.dashboardPage);
    });
});