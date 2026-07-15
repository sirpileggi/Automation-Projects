class CheckoutPage {

    get inputFirstName() { return cy.get('#fname'); }
    get inputLastName() { return cy.get('#lname'); }
    get inputCompany() { return cy.get('#cname'); }
    get inputEmail() { return cy.get('#email'); }
    get selectCountry() { return cy.get('#country'); }
    get selectCity() { return cy.get('#city'); }
    get inputZip() { return cy.get('#zip'); }
    get inputAddress() { return cy.get('#faddress'); }
    get inputNotes() { return cy.get('#messages'); }
    get checkboxTerms() { return cy.get('#materialUnchecked'); }
    get buttonSubmitForm() { return cy.get('.theme-btn-one.btn-black-overlay.btn_sm').eq(0); }
    get radioBankTransfer() { return cy.get('#html'); }
    get radioMobileBanking() { return cy.get('#javascript'); }
    get radioPaypal() { return cy.get('#css'); }
    get buttonConfirmOrder() { return cy.get('.theme-btn-one.btn-black-overlay.btn_sm').eq(1); } 
    get modalSuccess() { return cy.get('.offer_modal_left'); }
    get modalFailure() { return cy.get('.errorLabel'); }

    visit() { cy.visit('/checkout-one'); }
    fillFirstName(name) { this.inputFirstName.type(name); }
    fillLastName(lastName) { this.inputLastName.type(lastName); }
    fillCompany(company) { this.inputCompany.type(company); }
    fillEmail(email) { this.inputEmail.type(email); }
    selectCountryByIndex(index) { this.selectCountry.select(index); }
    selectCityByIndex(index) { this.selectCity.select(index); }
    fillZipCode(zip) { this.inputZip.type(zip); }
    fillAddress(address) { this.inputAddress.type(address); }
    fillNotes(notes) { this.inputNotes.type(notes); }
    checkTerms() { this.checkboxTerms.click(); }
    submitForm() { this.buttonSubmitForm.click(); }

    fillBillingForm(data) {
        if (data.name) this.fillFirstName(data.name);
        if (data.lastName) this.fillLastName(data.lastName);
        if (data.company) this.fillCompany(data.company);
        if (data.email) this.fillEmail(data.email);
        if (data.countryIndex) this.selectCountryByIndex(data.countryIndex);
        if (data.cityIndex) this.selectCityByIndex(data.cityIndex);
        if (data.zipCode) this.fillZipCode(data.zipCode);
        if (data.address) this.fillAddress(data.address);
        if (data.notes) this.fillNotes(data.notes);
    }

    selectPaymentAndConfirm(method) {
        switch (method.toLowerCase()) {
            case 'bank':
            case 'bank transfer':
                this.radioBankTransfer.check();
                break;
            case 'mobile':
            case 'mobile banking':
                this.radioMobileBanking.check();
                break;
            case 'paypal':
                this.radioPaypal.check();
                break;
            default:
                throw new Error(`Forma de pagamento "${method}" não é válida!`);
        }

        this.buttonConfirmOrder.click();
    }

    verifyOrderSuccess() {
        this.modalSuccess.should('contain', 'Order success!');
    }

    verifyOrderNotSuccessful() {
        this.modalSuccess.should('not.exist');
    }

    verifyMultipleErrors(messages) {
        messages.forEach((message) => {
            this.modalFailure.should('contain', message);
        });
    }
}
export default new CheckoutPage();
