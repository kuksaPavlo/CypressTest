

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

it.skip('check success state of payment in the archive | publick session',() => {
    cy.intercept('https://next.privat24.ua/api/p24/pub/archive', {
        fixture: "archiveResponse/success.json",
    });

    basePage.open('https://next.privat24.ua?lang=en');
    archivePage.selectArchiveMenu()
    
});




it.skip('replanishmentOf Ukrain mobile phone number', () => {

    basePage.open('https://next.privat24.ua/mobile/?lang=en');
    mobileReplanishment.typePhoneNumber('686979712');
    basePage.typeAmount('1');
    basePage.typeDebitCardData('5309233034765085', '0124', '891');
    cy.wait(3000);
    mobileReplanishment.typeDebitNameSername('firstName', 'LastName');
    basePage.submitPayment();
    mobileReplanishment.checkDebitCard('5309 **** **** 5085');
    mobileReplanishment.checkDebitAmount('1');
    mobileReplanishment.checkDebitAmountAndCommission('2');
    mobileReplanishment.checkReceiverAmount('1');
    mobileReplanishment.checkPaymentCarrency("UAH");
    cy.contains('Confirm')
        .click();

})
//tetetete222
it.skip('Money tramsfer between foreign cards', () => {

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
//HTTP GET
it.skip('Example sending requests', () => {
    cy.request('https://next.privat24.ua')
        .then((response) => {
            console.log(response);
        })
})
//Example HTTP POST request with expect verification of response
it.skip('Example sending POST request', () => {

    const requestBody = {
        action: "info",
        phone: "+380939034410",
        amount: 50,
        currency: "UAH",
        cardCvv: "111",
        card: "4552331448138217",
        cardExp: "0524",
        xref: "4917826831613fd243b77a60d33c6dcb",
        _: 1631702865666
    };

    const headersBody = {
        cookie:
            '_ga=GA1.2.291672884.1634377260; _gid=GA1.2.1490782808.1634377260; pubkey=38297a6b42626070b79225177facb143; _gat_gtag_UA_29683426_11=1; fp=3; lfp=10/16/2021, 12:41:11 PM; pa=1634377491689.4020.18390040176653422next.privat24.ua0.995664918859239+1'
    }

    cy.request({
        method: "POST",
        url: "https://next.privat24.ua/api/p24/pub/mobipay",
        body: requestBody,
        headers: headersBody,
    }).then((response) => {
        expect(response).to.have.property('status').to.equal(200)
        expect(response.body).to.have.property('status').to.equal('success')
        expect(response.body.data).to.have.property('amount').to.equal('50.0')
        // expect(response.body.data[0 or iterator i]).to.have.property('amount').to.equal('50.0')

        console.log(response)
    });
});
////Example HTTP POST request with should verification of response

it.skip('Example sending POST request', () => {

    const requestBody = {
        action: "info",
        phone: "+380939034410",
        amount: 50,
        currency: "UAH",
        cardCvv: "111",
        card: "4552331448138217",
        cardExp: "0524",
        xref: "4917826831613fd243b77a60d33c6dcb",
        _: 1631702865666
    };

    const headersBody = {
        cookie:
            '_ga=GA1.2.291672884.1634377260; _gid=GA1.2.1490782808.1634377260; pubkey=38297a6b42626070b79225177facb143; _gat_gtag_UA_29683426_11=1; fp=3; lfp=10/16/2021, 12:41:11 PM; pa=1634377491689.4020.18390040176653422next.privat24.ua0.995664918859239+1'
    }

    cy.request({
        method: "POST",
        url: "https://next.privat24.ua/api/p24/pub/mobipay",
        body: requestBody,
        headers: headersBody,
    }).its('body').should('contain', {
        status: 'success'
    }).its('data').should('contain', {
        status: 'ok'
    })
});

