

///<reference types="Cypress" />

import { mobileReplanishment } from "../support/pages/mobileReplanishment"
import { transfers } from "../support/pages/transfers"
import { basePage, BasePage } from "../support/pages/basePage"
import { archivePage } from "../support/pages/archive"


beforeEach('setup success response with stub', ()=> {
    cy.intercept('https://next.privat24.ua/api/p24/pub/confirm/check?', {
        fixture: "confirmResponse/success.json",
    });
})

it('check error state of payment in the archive | publick session',() => {
    cy.intercept('https://next.privat24.ua/api/p24/pub/archive', {
        fixture: "archiveResponse/error.json",
    });
    basePage.open('https://next.privat24.ua?lang=en');
    archivePage.selectArchiveMenu()
});

it.only('check success state of payment in the archive | publick session',() => {
    cy.intercept('https://next.privat24.ua/api/p24/pub/archive', {
        fixture: "archiveResponse/success.json",
    });
    basePage.open('https://next.privat24.ua?lang=en');
    archivePage.selectArchiveMenu()

   // cy.wait(2000).get('tbody').toMatchImageSnapshot();
    cy.wait(2000).document().toMatchImageSnapshot();

});

