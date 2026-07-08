/// <reference types="cypress" />

describe("Login", () => {

      beforeEach(() => {
            cy.visit('/login')
      })

      it("Successfull Login", () => {
            
            cy.login();
      })

      it("Empty e-mail field", () => {
            
            cy.get('#password').type('viniqa')
            cy.get('#btnLogin').click()
            cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
      })

      it("Empty password field", () => {
            
            cy.get('#user').type('vini@gmail.com')
            cy.get('#btnLogin').click()
            cy.get('.invalid_input').should('have.text', 'Senha inválida.')
      })

      it("Empty e-mail and password fields", () => {
            
            cy.get('#btnLogin').click()
            cy.get('.invalid_input').should('have.text', 'E-mail inválido.')

      })

      it("Invalid e-mail", () => {
            
            cy.get('#user').type('vini.@gmail.com')
            cy.get('#password').type('viniqa')
            cy.get('#btnLogin').click()
            cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
      })

      it("Invalid password", () => {
            
            cy.get('#user').type('vini@gmail.com')
            cy.get('#password').type('vini')
            cy.get('#btnLogin').click()
            cy.get('.invalid_input').should('have.text', 'Senha inválida.')
      })
})
