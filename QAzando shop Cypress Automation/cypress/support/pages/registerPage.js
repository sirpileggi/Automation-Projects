class RegisterPage {

    get inputName() { return cy.get('#user'); }
    get inputEmail() { return cy.get('#email'); }
    get inputPassword() { return cy.get('#password'); }
    get buttonRegister() { return cy.get('#btnRegister'); }
    get errorMessage() { return cy.get('#errorMessageFirstName'); }

    visit() {
        cy.visit('/register');
    }

    fillName(name) { this.inputName.type(name); }
    fillEmail(email) { this.inputEmail.type(email); }
    fillPassword(password) { this.inputPassword.type(password); }


    fillRegisterForm(data) {
        if (data.name) this.fillName(data.name);
        if (data.email) this.fillEmail(data.email);
        if (data.password) this.fillPassword(data.password);
    }

    submit() {
        this.buttonRegister.click();
    }

    verifyErrorMessage(expectedText) {
        this.errorMessage.should('have.text', expectedText);
    }
}

export default new RegisterPage();