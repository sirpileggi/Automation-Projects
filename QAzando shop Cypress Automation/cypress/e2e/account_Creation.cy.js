/// <reference types="cypress" />
import RegisterPage from '../support/pages/RegisterPage'; 

describe("Account Creation", () => {

    beforeEach(() => {
        RegisterPage.visit();
    })

    it("Successful account creation", () => {
        cy.accountCreate();
    })

    it("Empty name field", () => {
        RegisterPage.fillEmail('vinicius@gmail.com');
        RegisterPage.fillPassword('vinicius123');
        RegisterPage.submit();
        
        RegisterPage.verifyErrorMessage('O campo nome deve ser prenchido');
    })

    it("Empty email field", () => {
        RegisterPage.fillName('Vinicius');
        RegisterPage.fillPassword('vinicius123');
        RegisterPage.submit();
        
        RegisterPage.verifyErrorMessage('O campo e-mail deve ser prenchido corretamente');
    })

    it("Empty password field", () => {
        RegisterPage.fillName('Vinicius');
        RegisterPage.fillEmail('vinicius@gmail.com');
        RegisterPage.submit();
        
        RegisterPage.verifyErrorMessage('O campo senha deve ter pelo menos 6 dígitos');
    })

    it("Empty name, email and password fields", () => {
        RegisterPage.fillPassword('vinicius123');
        RegisterPage.submit();
        
        RegisterPage.verifyErrorMessage('O campo nome deve ser prenchido');
    })

    it("Invalid email", () => {
        RegisterPage.fillName('Vinicius');
        RegisterPage.fillEmail('vinicius');
        RegisterPage.fillPassword('123456');
        RegisterPage.submit();
        
        RegisterPage.verifyErrorMessage('O campo e-mail deve ser prenchido corretamente');
    })

    it("Invalid password with less than 6 characters", () => {
        RegisterPage.fillName('Vinicius');
        RegisterPage.fillEmail('vinicius@gmail.com');
        RegisterPage.fillPassword('123');
        RegisterPage.submit();
        
        RegisterPage.verifyErrorMessage('O campo senha deve ter pelo menos 6 dígitos');
    })
})