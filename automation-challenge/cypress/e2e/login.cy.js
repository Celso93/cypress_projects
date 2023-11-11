/// <reference types="cypress" />

describe('Login', () => {
  
  beforeEach(() => {
    cy.visit('/')
  });

  it('TC001 - Positive', () => {
    cy.fillLoginFormAndSubmit('demouser', 'abc123')
    cy.checkingAccountPage()
  })

  const userNotValid = [
    { username: 'Demouser', password: 'adc123' },
    { username: 'demouser_', password: 'xyz' },
    { username: 'demouser', password: 'nananana' }
  ];

  userNotValid.forEach((userNotValid) => {
    it(`TC002 - Negative: ${userNotValid.username}`, () => {
      cy.fillLoginFormAndSubmit(userNotValid.username, userNotValid.password)
      cy.get('div[role=alert]')
        .should('be.visible')
        .contains('Wrong username or password.')
    });
  });
})