/// <reference types="cypress"/>

import { demoTestsData } from "../fixtures/testData";
import AddCitizenPage from "../pages/addCitizen.page";
import Header from "../pages/header.page";
import HomePage from "../pages/home.page";

describe('Demo Tests', () => {

    afterEach(() => {
        cy.disconnectMetamaskWalletFromAllDapps();
    });

    it('Wallet connects successfully', () => {
        HomePage.navigate();
        Header.connectWallet();
        Header.btnAddCitizen.should('be.visible');
        cy.getMetamaskWalletAddress().then((address) => {
            Header.getConnectedAddressText().should('eq', address);
        });
    });

    it('New citizen with valid data is added successfully', () => {
        HomePage.navigate();
        Header.connectWallet();
        Header.clickAddCitizenButton();
        AddCitizenPage.addCitizen(demoTestsData.name, demoTestsData.age, demoTestsData.city, demoTestsData.note);
        AddCitizenPage.msgCitizenAddedSuccess.should('be.visible');
        HomePage.navigate();
    });
});