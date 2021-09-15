export class MobilePhoneReplanishments {
    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    } 

    typeDebitNameSername(name, sername){
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(name)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(sername)
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