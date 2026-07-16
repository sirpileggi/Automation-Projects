/// <reference types="cypress" />
import RegisterPage from '../support/pages/RegisterPage'; 
import RegisterData from '../support/data/RegisterData'; 

describe("Account Creation", () => {

    beforeEach(() => {
        RegisterPage.visit();
    })

    it("Successful account creation", () => {
        const validUser = RegisterData.getValidUser();
        
        RegisterPage.fillRegisterForm(validUser);
        RegisterPage.submit();
        
    })

    it("Empty name field", () => {
        const userWithoutName = RegisterData.getValidUser();
        delete userWithoutName.name; 
        
        RegisterPage.fillRegisterForm(userWithoutName);
        RegisterPage.submit();
        
        RegisterPage.verifyErrorMessage('O campo nome deve ser prenchido');
    })

    it("Empty email field", () => {
        const userWithoutEmail = RegisterData.getValidUser();
        delete userWithoutEmail.email; 
        
        RegisterPage.fillRegisterForm(userWithoutEmail);
        RegisterPage.submit();
        
        RegisterPage.verifyErrorMessage('O campo e-mail deve ser prenchido corretamente');
    })

    it("Empty password field", () => {
        const userWithoutPassword = RegisterData.getValidUser();
        delete userWithoutPassword.password; 
        
        RegisterPage.fillRegisterForm(userWithoutPassword);
        RegisterPage.submit();
        
        RegisterPage.verifyErrorMessage('O campo senha deve ter pelo menos 6 dígitos');
    })

    it("Empty name, email and password fields", () => {
        RegisterPage.submit();
        
        RegisterPage.verifyErrorMessage('O campo nome deve ser prenchido');
    })

    it("Invalid email", () => {
        const userInvalidEmail = RegisterData.getValidUser();
        userInvalidEmail.email = 'vinicius'; 
        
        RegisterPage.fillRegisterForm(userInvalidEmail);
        RegisterPage.submit();
        
        RegisterPage.verifyErrorMessage('O campo e-mail deve ser prenchido corretamente');
    })

    it("Invalid password with less than 6 characters", () => {
        const userInvalidPassword = RegisterData.getValidUser();
        userInvalidPassword.password = '123'; 
        
        RegisterPage.fillRegisterForm(userInvalidPassword);
        RegisterPage.submit();
        
        RegisterPage.verifyErrorMessage('O campo senha deve ter pelo menos 6 dígitos');
    })
})