Cypress.Commands.add('checkingAccountPage', function () {
    cy.url().should('be.equal', `${Cypress.config("baseUrl")}/account`)
    cy.get('section[class=content]').then(() => {
        cy.contains('Invoice List').should('be.visible')
        cy.get('.row.mt-3.text-light.bg-dark')
    })
})