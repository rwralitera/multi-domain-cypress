/// <reference types="cypress" />
describe('origin test', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/todo') //BASE_URL INITIAL
    })
   
    it('visit an other super domain', () => {
      cy.visit('http://testphp.vulnweb.com') //BASE_URL NEW
    })
   })
   