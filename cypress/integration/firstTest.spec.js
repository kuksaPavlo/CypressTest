

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
    mobileReplanishment.typeDebitNameSername('firstName', 'LastName')
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
//REQUESTS POST https://jsonplaceholder.typicode.com/guide/
it('Example sending requests', () => {
    cy.request('https://next.privat24.ua')
        .then((response) => {
            console.log(response);
        })
})

it.only('Example sending POST request', () => {

    const requestBody = {
        action: "info",
        phone: "+380939034410",
        amount: 50,
        currency: "UAH",
        cardCvv: "111",
        card: "4552331448138217",
        cardExp: "0524",
        xref: "0b17fb94e2346e43384a535a9623b326",
        _: 1631702865666
    };

    const headersBody = {
        cookie:
            '_ga=GA1.2.1465642912.1631271169; _gid=GA1.2.1882412301.1631702763; pubkey=3901139ddb4130c63ee17388f65b9c2d; fp=32; lfp=9/10/2021, 1:53:00 PM; pa=1631546174873.62040.045921740737874917next.privat24.ua0.5837323667446621+4'
    }

    cy.request({
        method: "POST",
        url: "https://next.privat24.ua/api/p24/pub/mobipay",
        body: requestBody,
        headers: headersBody,
    }).then((response) => {
        console.log(response.body)
    });
});


