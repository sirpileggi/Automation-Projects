// primeiro arquivo de testes
/// <reference types="cypress" />

describe("Comandos básicos", () => {
      
it("Acessar uma URL", () => {
      cy.visit('https://automationpratice.com.br')
})

it("Encontrar um elemento", () => {
      cy.visit('https://automationpratice.com.br')
      // get() - busca um elemento
      cy.get('#user') // busca um elemento pelo id
      cy.get('.user') // busca um elemento pela classe
      cy.get('input') // busca um elemento pelo nome da tag
      cy.get('[name="user"]') // busca um elemento pelo atributo name
      cy.get('[data-cy="user"]') // busca um elemento pelo atributo data-cy
      cy.get('input[name="user"]') // busca um elemento pelo nome da tag e atributo name
      cy.get('input[name="user"][type="text"]') // busca um elemento pelo nome da tag e atributos name e type
      cy.get('input[name="user"][type="text"].form-control') // busca um elemento pelo nome da tag, atributos name e type e classe
      

      // find() - busca um elemento dentro de outro elemento -- diminuindo escopo da busca
      cy.get('.mc-form').find('.form-control') // busca um elemento dentro de outro elemento

      
      // cointains() - busca um elemento pelo texto
      cy.contains('Send') // busca um elemento pelo texto 
})

it("Preencher um campo", () => {
      cy.visit('https://automationpratice.com.br')
      cy.get('#user').type('vini.@gmail.com') // preenche um campo de texto   


})
it("Click", () => {
      cy.visit('https://automationpratice.com.br')
      cy.get('#btnLogin').click() // clica em um elemento
})

it ("Select/Dropdown", () => {
      cy.visit('https://automationpratice.com.br')
      cy.get('#select').select('option1') // seleciona uma opção de um dropdown    
      cy.get('#select').select(2) // seleciona uma opção de um dropdown a partir do index da opção (começa do 0)
})   

it("Checkbox/Radio", () => {
      cy.visit('https://automationpratice.com.br')
      cy.get('#checkbox').check() // marca um checkbox
      cy.get('#checkbox').uncheck() // desmarca um checkbox
      cy.get('#radio').check() // marca um radio button
      cy.get('#radio').uncheck() // desmarca um radio button
})

it("Validar um elemento", () => { 
      cy.visit('https://automationpratice.com.br')
      cy.get('#user').should('be.visible') // valida se o elemento está visível
      cy.get('#user').should('be.visible').should('have.text', 'vini.@gmail.com') // valida se o elemento está visível e possui um texto específico
      cy.get('#user').should('be.enabled') // valida se o elemento está habilitado
      cy.get('#user').should('have.value', 'vini.@gmail.com') // valida se o elemento possui um valor específico
      cy.get('#user').should('have.attr', 'name', 'user') // valida se o elemento possui um atributo específico
      cy.get('#user').should('have.class', 'form-control') // valida se o elemento possui uma classe específica
      cy.get('#user').should('contain', 'User') // valida se o elemento contém um texto específico
      cy.get('#user').should('not.contain', 'Admin') // valida se o elemento não contém um texto específico

})

});