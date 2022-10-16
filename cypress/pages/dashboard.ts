/// <reference types="cypress" />

import { dashboardPageLocators} from '../support/locators';

export class Dashboard {
  getConnectedText() {
    return cy.get(dashboardPageLocators.connectedText).invoke('text');
  }
}
