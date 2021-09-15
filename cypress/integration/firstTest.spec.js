

///<reference types="Cypress" />

import { mobileReplanishment } from "../support/pages/mobileReplanishment"
import { transfers } from "../support/pages/transfers"

it.only('replanishmentOf Ukrain mobile phone number', () => {
    cy.visit('https://next.privat24.ua/mobile/?lang=en')

        mobileReplanishment.typePhoneNumber('939034410')
        mobileReplanishment.typeAmount('1')
        mobileReplanishment.typeDebitCardData('5309233034765085', '0124', '891', 'firstName', 'LastName')
        cy.wait(3000)
        mobileReplanishment.submitPayment()
        mobileReplanishment.checkDebitCard('5309 **** **** 5085')
        mobileReplanishment.checkDebitAmount('1')
        mobileReplanishment.checkDebitAmountAndCommission('2')
        mobileReplanishment.checkReceiverAmount('1')
        mobileReplanishment.checkPaymentCarrency("UAH") 
})
//tetetete222
it('Money tramsfer between foreign cards', () => {
    cy.visit('https://next.privat24.ua/money-transfer/card/?lang=en')

        transfers.typeDebitCardData('4552331448138217', '0524', '111')
        transfers.typeDebitNameSername('Shayne', 'McConnel')
        cy.wait(3000)
        transfers.typeReceiverCard('5309233034765085')
        transfers.typeReceiverNameSername('Juliana', 'Jenssen')
        transfers.typeAmount('300')
        transfers.typeComment('Cypress test')
        cy.wait(3000)
        transfers.submitTransfers()
        transfers.checkDebitAndReceiverCards('* 8217', '* 5085')
        transfers.checkDebitAmountAndTotalAmount('300 UAH', '389.10')
        transfers.checkDebitCommision('89.10 UAH')
        transfers.checkTotalCarrency("UAH")
        transfers.checkComment('Cypress test')
})


