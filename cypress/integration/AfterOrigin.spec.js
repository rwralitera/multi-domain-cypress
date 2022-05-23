/// <reference types="cypress" />
describe('origin test', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/todo');
    })
   
    it('visit an other super domain', () => {
      cy.origin('http://testphp.vulnweb.com', () => {
        cy.visit('/login.php');
        cy.get('#siteName').should('be.visible')
      })
    })
   })
   