/// <reference types="cypress" />

describe('Invoice', () => {
  
  beforeEach(() => {
    cy.visit('/')
    cy.fillLoginFormAndSubmit('demouser', 'abc123')
  });

  it('TC003 - Validate invoice details', () => {
    cy.get("a[href='/invoice/0']")
      .invoke("attr","target","_self")
      .click()
    
    cy.invoiceValidation()
  })
})