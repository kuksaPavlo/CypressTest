export class Transfers{
    typeDebitCardData(CardNumber, expData, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(CardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expData)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
    }

    typeDebitNameSername(name, sername){
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(name)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(sername)
    }

    typeReceiverCard(receiverCard){
        cy.get('[data-qa-node="numberreceiver"]')
          .type(receiverCard)
    }

    typeReceiverNameSername(name, sername){
        cy.get('[data-qa-node="firstNamereceiver"]')
            .type(name)
            .get('[data-qa-node="lastNamereceiver"]')
            .type(sername)
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }
    typeComment(comment){
        cy.get('[data-qa-node="toggle-comment"]')
            .click()
            .get('[data-qa-node="comment"]')
            .type(comment)
    }
    submitTransfers(){
        cy.get('button[type="submit"]')
            .click()
    }
    checkDebitAndReceiverCards(debitCard, receiverCard){
        cy.get('[data-qa-node="payer-card"]')
            .should('have.text', debitCard)
            .get('[data-qa-node="reciever-card"]')
            .should('have.text', receiverCard)
    }
    checkDebitAmountAndTotalAmount(debitAmount, totalAmount){
        cy.get('[data-qa-node="payer-amount"]')
            .should('have.text', debitAmount)
            .get('[data-qa-node="total"]')
            .find("span")
            .should("contain.text", totalAmount)
    }
    checkDebitCommision(commision){
        cy.get('[data-qa-node="payer-carrency"]')
            .should('have.text', commision)
    }
    checkTotalCarrency(currency){
        cy.get('[data-qa-node="total"]')
            .type('small')
            .should("contain.text", currency)
    }
    checkComment(comment){
        cy.get('[data-qa-node="comment"]')
        .should("have.text", comment);
    }
}
export const transfers = new Transfers()