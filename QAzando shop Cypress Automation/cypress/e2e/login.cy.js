/// <reference types="cypress" />

import LoginPage from '../support/pages/LoginPage';
import LoginData from '../support/data/LoginData';

describe("Login", () => {

      beforeEach(() => {
            LoginPage.visit();
      })

      it("Successfull Login", () => {
            const validCredentials = LoginData.getValidCredentials();
            
            LoginPage.fillLoginForm(validCredentials);
            LoginPage.submit();
            
      })

      it("Empty e-mail field", () => {
            const credentialsWithoutEmail = LoginData.getValidCredentials();
            delete credentialsWithoutEmail.email;

            LoginPage.fillLoginForm(credentialsWithoutEmail);
            LoginPage.submit();

            LoginPage.verifyErrorMessage('E-mail inválido.');
      })

      it("Empty password field", () => {
            const credentialsWithoutPassword = LoginData.getValidCredentials();
            delete credentialsWithoutPassword.password;

            LoginPage.fillLoginForm(credentialsWithoutPassword);
            LoginPage.submit();

            LoginPage.verifyErrorMessage('Senha inválida.');
      }) 

      it("Empty e-mail and password fields", () => {
            LoginPage.submit();
            LoginPage.verifyErrorMessage('E-mail inválido.');
      })

      it("Invalid e-mail", () => {
            const invalidEmailData = LoginData.getValidCredentials();
            invalidEmailData.email = 'vini.@gmail.com'; 

            LoginPage.fillLoginForm(invalidEmailData);
            LoginPage.submit();

            LoginPage.verifyErrorMessage('E-mail inválido.');
      })

      it("Invalid password", () => {
            const invalidPasswordData = LoginData.getValidCredentials();
            invalidPasswordData.password = 'vini'; 

            LoginPage.fillLoginForm(invalidPasswordData);
            LoginPage.submit();

            LoginPage.verifyErrorMessage('Senha inválida.');
      })
})