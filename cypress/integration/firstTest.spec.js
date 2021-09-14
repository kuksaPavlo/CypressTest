///<reference types="Cypress" />

//type
it('type', () => {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
        .get('[data-qa-node="phone-number"]')
        .type('939034410')
})
//focus
it('focus', () => {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
        .get('[data-qa-node="amount"]')
        .focus()
})
//blur
it('blur', () => {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
        .get('[data-qa-node="amount"]')
        .focus()
        .blur()
})
//type wait clear
it('clear', () => {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
        .get('[data-qa-node="amount"]')
        .type(999)
        .wait(2000)
        .clear()
})
//submit
it('submit form', () => {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
        .get('form[method ="post"]')
        .submit()
})
//click
it('click', () => {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
        .get('[data-qa-value="manual"]')
        .click()
})
//rightclick
it('click', () => {
    cy.visit('https://example.cypress.io/commands/actions')
        .contains('Right click to edit')
        .rightclick()
})
//doubleclick
it('click', () => {
    cy.visit('https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event')
        .contains('Double click to resize this object.')
        .dblclick()
})
//check
it('check', () => {
    cy.visit('https://uk-ua.facebook.com/r.php?locale=uk_UA')
        .get('input[value="2"]')    
        .check()
})
//uncheck
it('uncheck', () => {
    cy.viewport(1800, 3000)
    cy.visit('https://en.privatbank.ua/?lang=en')
        .get('#switch-input')    
        .check({force: true}) //blocked about covered by another element
        .wait(2000)
        .uncheck({force: true})
})
//select
it('select', () => {
    cy.visit('https://www.facebook.com/r.php?locale=en_US')
        .get('#month')    
        .select('Mar')
        .get('#day')
        .select('19')
        .get('#year')
        .select('1993')
})
//scrollInToView
it('scrollInToView', () => {
   // cy.viewport(1800, 3000)
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
        .get('[data-qa-node="lang"]') 
        .wait(2000) 
        .scrollIntoView()  
})
//scrollTo
it('scrollTo', () => {
    // cy.viewport(1800, 3000)
    cy.visit('https://next.privat24.ua/mobile/?lang=en')
        .wait(3000)
    cy.scrollTo(0, 700)  //x, y pix
 })
//trigger
it.only('trigger', () => {
    cy.visit('https://next.privat24.ua/?lang=en')
        .contains('Services')
        .wait(3000)
        .trigger('mouseover')
 })
//jhgfhgjkl fff