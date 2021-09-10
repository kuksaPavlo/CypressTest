///<reference types="Cypress" />
// dscribe("Mobile phone replenishment", () => {

//     context("Replenishment less than the allowed amount", () => {
//         it("Show error: Minimum amount of the replenisment 1 UAH", () => {});
//     });
    
// });
//GET
// it('By ID', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('#email')
// });

// it('By Class', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
//     cy.get('.DocSearch')
// });

// it('By Tag', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
//     cy.get('nav')
// });

// it('By tad value', () => {
//     cy.visit('https://facebook.com/')
//     cy.get('[name="pass"]')
// });

// it('By Different Tag', () => {
//     cy.visit('https://facebook.com/')
//     cy.get('[data-testid="open-registration-form-button"][role="button"] ')
// });

// it('By Different Typrs', () => {
//     cy.visit('https://facebook.com/')
//     cy.get('button[name="login"][type="submit"]')
// });

// it.only('By Contains Name', () => {
//     cy.visit('https://next.privat24.ua/')
//     cy.get('*[class^="card"]')
// })

//FIND

it('Using get with Find and Eq', () => {
    cy.visit('https://next.privat24.ua/deposit')
    cy.get('tbody').find('td').find('div').find('button').eq(0)
});
//comment
it.only('By using Get with Find and Eq', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.get('nav').find('ul').find('li').find('a').eq(1)
});