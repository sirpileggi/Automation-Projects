class LoginPage {
    
    get inputEmail() { return cy.get('#user'); }
    get inputPassword() { return cy.get('#password'); }
    get buttonLogin() { return cy.get('#btnLogin'); }
    get errorMessage() { return cy.get('.invalid_input'); }

    visit() {
        cy.visit('/login');
    }

    fillEmail(email) { this.inputEmail.type(email); }
    fillPassword(password) { this.inputPassword.type(password); }

    fillLoginForm(data) {
        if(data.email) this.fillEmail(data.email);
        if(data.password) this.fillPassword(data.password);
    }

    submit() {
        this.buttonLogin.click();
    }
    
    verifyErrorMessage(expectedText) {
        this.errorMessage.should('have.text', expectedText);
    }
}

export default new LoginPage();