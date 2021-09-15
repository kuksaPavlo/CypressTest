

///<reference types="Cypress" />

import { mobileReplanishment } from "../support/pages/mobileReplanishment"
import { transfers } from "../support/pages/transfers"
import { basePage, BasePage } from "../support/pages/basePage"

it('replanishmentOf Ukrain mobile phone number', () => {
    
        basePage.open('https://next.privat24.ua/mobile/?lang=en')
        mobileReplanishment.typePhoneNumber('939034410')
        basePage.typeAmount('1')
        basePage.typeDebitCardData('5309233034765085', '0124', '891')
        cy.wait(3000)
        mobileReplanishment.typeDebitNameSername( 'firstName', 'LastName')
        basePage.submitPayment()
        mobileReplanishment.checkDebitCard('5309 **** **** 5085')
        mobileReplanishment.checkDebitAmount('1')
        mobileReplanishment.checkDebitAmountAndCommission('2')
        mobileReplanishment.checkReceiverAmount('1')
        mobileReplanishment.checkPaymentCarrency("UAH") 
})
//tetetete222
it('Money tramsfer between foreign cards', () => {
    
        basePage.open('https://next.privat24.ua/money-transfer/card/?lang=en')
        basePage.typeDebitCardData('4552331448138217', '0524', '111')
        transfers.typeDebitNameSername('Shayne', 'McConnel')
        cy.wait(3000)
        transfers.typeReceiverCard('5309233034765085')
        transfers.typeReceiverNameSername('Juliana', 'Jenssen')
        basePage.typeAmount('300')
        transfers.typeComment('Cypress test')
        cy.wait(3000)
        basePage.submitPayment()
        transfers.checkDebitAndReceiverCards('8217', '5085')
        transfers.checkDebitAmountAndTotalAmount('300 UAH', "385.30")
        transfers.checkDebitCommision('0 UAH')
        transfers.checkTotalCarrency("UAH")
        transfers.checkComment('Cypress test')
})


