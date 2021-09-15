export class Transfers{
   

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

    
    typeComment(comment){
        cy.get('[data-qa-node="toggle-comment"]')
            .click()
            .get('[data-qa-node="comment"]')
            .type(comment)
    }
    
    checkDebitAndReceiverCards(debitCard, receiverCard){
        cy.get('[data-qa-node="payer-card"]')
            .should('contain.text', debitCard)
            .get('[data-qa-node="receiver-card"]')
            .should('contain.text', receiverCard)
    }
    checkDebitAmountAndTotalAmount(debitAmount, totalAmount){
        cy.get('[data-qa-node="payer-amount"]')
            .should('have.text', debitAmount)
            .get('[data-qa-node="total"]')
            //.find("span")
            .should("contain.text", totalAmount)
    }
    checkDebitCommision(commision){
        cy.get('[data-qa-node="receiver-currency"]')
            .should('have.text', commision)
    }
    checkTotalCarrency(currency){
        cy.get('[data-qa-node="total"]')
            //.type('small')
            .should("contain.text", currency)
    }
    checkComment(comment){
        cy.get('[data-qa-node="comment"]')
        .should("have.text", comment);
    }
}
export const transfers = new Transfers()