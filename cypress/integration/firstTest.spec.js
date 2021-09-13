///<reference types="Cypress" />

it('SHOULD', () => {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
    cy.get('[data-qa-node="amount"]')
        .type(100)
        .should('have.value', 100)
        .end('be.visible')
})

it('EXPECT', () => {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
    cy.get('[data-qa-node="amount"]')
        .type(100).then( input => {
            expect(input).to.have.value(100)
        })
})

it('check default value for Deposits', () => {
    cy.visit('https://next.privat24.ua/deposit/?lang=en')
    cy.get('[data-qa-value="UAH"]')
    .should('be.checked')
})

it('check is visible on hover', () => {
    cy.visit('https://next.privat24.ua/deposit/?lang=en')
    cy.contains('Мої депозити')
        .trigger('mouseover')
        .get('#archiveDeposits')
        .should('be.visible')

})

it('Check is correct attr in a button', () => {
    cy.visit('https://next.privat24.ua?lang=en')
    cy.contains('Show cards')
       .should('have.attr', 'type')
       .and('match', /button/) 
})

it.only('Check is correct URL', () => {
    cy.visit('https://next.privat24.ua?lang=en')
    cy.url()
       .should('eq', 'https://next.privat24.ua/?lang=en')
    
})
//dfggfdfgd