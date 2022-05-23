/// <reference types="cypress" />
describe('origin test', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/todo');
    })
   
    it('visit an other super domain and login', () => {
      const credentials = { username: 'test', password: 'test' }
      cy.origin('http://testphp.vulnweb.com', { args: credentials }, ({ username, password }) => {
        cy.visit('/login.php');
        cy.get('input[name="uname"]').type(username)
        cy.get('input[name="pass"]').type(password)
        cy.get('[type="submit"]').contains('login').click()
        cy.get('[name="update"]').should('be.visible')
      })
    })
   })
   