// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('checkoutBilling', (name = 'Vinicius', lastName = 'Pileggi', company = 'Vini Services', email = 'vini@gmail.com', zipCode = '03191000', address = 'Av. Paulista, 1000', notes = 'nada a informar') => {
    cy.visit('/checkout-one')
    cy.get('#fname').type(name)
    cy.get('#lname').type(lastName)
    cy.get('#cname').type(company)
    cy.get('#email').type(email)
    cy.get('#country').select(1)
    cy.get('#city').select(1)
    cy.get('#zip').type(zipCode)
    cy.get('#faddress').type(address)
    cy.get('#messages').type(notes)
    cy.get('#materialUnchecked').click()
    cy.get('.theme-btn-one.btn-black-overlay.btn_sm').eq(0).click()
})

Cypress.Commands.add('checkoutBankTransfer', () => {
    cy.get('#html').check()
    cy.get('.theme-btn-one.btn-black-overlay.btn_sm').eq(1).click()
    cy.get('.offer_modal_left').should('contain', 'Order success!')
})

Cypress.Commands.add('checkoutMobileBanking', () => {
    cy.get('#javascript').check()
    cy.get('.theme-btn-one.btn-black-overlay.btn_sm').eq(1).click()
    cy.get('.offer_modal_left').should('contain', 'Order success!')
})

Cypress.Commands.add('checkoutPaypal', () => {
    cy.get('#css').check()
    cy.get('.theme-btn-one.btn-black-overlay.btn_sm').eq(1).click()
    cy.get('.offer_modal_left').should('contain', 'Order success!')
})

Cypress.Commands.add('accountCreate', (name = 'Vinicius', email = 'vini@gmail.com', password = 'viniqa') => {
    cy.visit('/register')
    cy.get('#user').type(name)
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('#btnRegister').click()
    cy.url().should('include', '/my-account')
})

Cypress.Commands.add('login', (email = 'vini@gmail.com', password = 'viniqa') => {
    cy.visit('/login')
    cy.get('#user').type(email)
    cy.get('#password').type(password)
    cy.get('#btnLogin').click()
    cy.url().should('include', '/my-account')
})