Cypress.Commands.add('invoiceValidation', () => {
    cy.fixture('invoice').then((invoice) => {
        cy.get('section[class=content]').as('contentSection')
  
        cy.get('@contentSection')
            .find('h4')
            .should('contain', invoice['Hotel Name'])

        cy.get('@contentSection')
            .find('ul li:first')
            .should('contain', invoice['Invoice Date'])

        cy.get('@contentSection')
            .find('ul li:last')
            .should('contain', invoice['Due Date'])

        cy.get('@contentSection')
            .find('h6')
            .should('contain', invoice['Invoice Number'])
  
        cy.get('@contentSection')
            .find('table:first tbody tr')
            .eq(0)
            .find('td:last')
            .should('contain', invoice['Booking Code'])
  
        cy.get('@contentSection')
            .find('div:last')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.include(invoice['Customer Details'])
            })
  
        cy.get('@contentSection')
            .find('table:first tbody tr')
            .eq(1)
            .find('td:last')
            .should('contain', invoice['Room'])
  
        cy.get('@contentSection')
            .find('table:first tbody tr')
            .eq(4)
            .find('td:last')
            .should('contain', invoice['Check In'])
  
        cy.get('@contentSection')
            .find('table:first tbody tr')
            .eq(5)
            .find('td:last')
            .should('contain', invoice['Check Out'])
  
        cy.get('@contentSection')
            .find('table:first tbody tr')
            .eq(2)
            .find('td:last')
            .should('contain', invoice['Total Stay Count'])
  
        cy.get('@contentSection')
            .find('table:first tbody tr')
            .eq(3)
            .find('td:last')
            .should('contain', invoice['Total Stay Amount'])

        cy.get('@contentSection')
            .find('table:last tbody tr td:nth-child(1)')
            .should('contain', invoice['Deposit Now'])
  
        cy.get('@contentSection')
            .find('table:last tbody tr td:nth-child(2)')
            .should('contain', invoice['Tax & VAT'])
  
        cy.get('@contentSection')
            .find('table:last tbody tr td:nth-child(3)')
            .should('contain', invoice['Total Amount'])
    })
  })
  