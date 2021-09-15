export class MobilePhoneReplanishments {
    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    } 

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }

    typeDebitCardData(CardNumber, expData, cvv, firstName, lastName){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(CardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expData)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
    
            .wait(3000)
    
            .get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(lastName)
    }

    submitPayment(){
        cy.get('[data-qa-node="submit"]')
            .click()
    }

    checkDebitCard(debitCard){
        cy.get('[data-qa-node="card"]')
            .should('have.text', debitCard)
    }

    checkDebitAmount(debitAmount){
        cy.get('[data-qa-node="amount"]')
            .should('have.text', debitAmount)
    }

    checkDebitAmountAndCommission(debitCommission){
        cy.get('[data-qa-node="commission"]')
            .eq('1')
            .should('have.text', debitCommission)
    }

    checkReceiverAmount(receiverAmount){
        cy.get(".amount")
            .find("span")
            .should('have.text', receiverAmount)
    }

    checkPaymentCarrency(paymentCarrency){
        cy.get(".amount")
            .find("small")
            .should('contain.text', paymentCarrency)
    }   
}

export const mobileReplanishment = new MobilePhoneReplanishments()