Cypress.Commands.add('fillLoginFormAndSubmit', (user, password) => {
    cy.get('input[name=username]').type(user)
    cy.get('input[name=password]').type(password)
    cy.get('#btnLogin').click();
})