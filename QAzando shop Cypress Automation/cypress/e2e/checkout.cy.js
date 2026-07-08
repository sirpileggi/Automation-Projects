/// <reference types="cypress" />
import CheckoutPage from '../support/pages/CheckoutPage';
import BillingData from '../support/data/BillingData';

//Tentativa de compra sem preencher campos obrigatórios
//Tentativa de compra sem preencher nome
//Tentativa de compra sem preencher sobrenome
//Tentativa de compra sem preencher nome da empresa
//Tentativa de compra sem preencher e-mail
//Tentativa de compra sem selecionar país
//Tentativa de compra sem preencher estado/cidade
//Tentativa de compra sem preencher código postal
//Tentativa de compra sem preencher endereço
//Tentativa de compra sem preencher complemento
//Dados salvos persistem em novas seções
//Pedido realizado é adicionado a lista de pedidos 


describe("Checkout - Fluxos de Pagamento bem-sucedidos", () => {

    // Massa de dados comum para os testes de caminho feliz
    const validData = {
        name: 'Vinicius',
        lastName: 'Pileggi',
        company: 'Vini Services',
        email: 'vini@gmail.com',
        countryIndex: 1,
        cityIndex: 1,
        zipCode: '03191000',
        address: 'Av. Paulista, 1000',
        notes: 'nada a informar'
    };

    beforeEach(() => {
        CheckoutPage.visit();
    })

    it("Bank transfer order", () => {
        CheckoutPage.fillBillingForm(validData);
        CheckoutPage.checkTerms();
        CheckoutPage.submitForm(); // Envia o formulário de dados (Botão eq(0))

        // Aqui usamos a nova função passando 'bank'
        CheckoutPage.selectPaymentAndConfirm('bank');

        // Valida se o modal de sucesso apareceu
        CheckoutPage.verifyOrderSuccess();
    })

    it("Mobile banking order", () => {
        CheckoutPage.fillBillingForm(validData);
        CheckoutPage.checkTerms();
        CheckoutPage.submitForm();

        // Aqui passamos 'mobile'
        CheckoutPage.selectPaymentAndConfirm('mobile');

        CheckoutPage.verifyOrderSuccess();
    })

    it("PayPal order", () => {
        CheckoutPage.fillBillingForm(validData);
        CheckoutPage.checkTerms();
        CheckoutPage.submitForm();

        // Aqui passamos 'paypal'
        CheckoutPage.selectPaymentAndConfirm('paypal');

        CheckoutPage.verifyOrderSuccess();
    })

    it("Order without filling required fields", () => {
        // Não preenchemos nenhum campo
        CheckoutPage.checkTerms();
        CheckoutPage.submitForm();

        CheckoutPage.verifyMultipleErrors([
            'O campo First Name deve ser prenchido',
            'O campo Last Name deve ser prenchido',
            'O campo Company deve ser prenchido',
            'O campo E-mail deve ser prenchido',
            'O campo Country deve ser prenchido',
            'O campo City deve ser prenchido',
            'O campo Zip Code deve ser prenchido',
            'O campo Address deve ser prenchido',
            'O campo Additional Notes deve ser prenchido'
        ]);

    });

    it("Order without filling name", () => {
     
            const dataWithoutName = BillingData.getValidData();
            delete dataWithoutName.name;
            CheckoutPage.fillBillingForm(dataWithoutName);
            CheckoutPage.checkTerms();
            CheckoutPage.submitForm();

            CheckoutPage.verifyMultipleErrors(['O campo First Name deve ser prenchido']);
            CheckoutPage.verifyOrderNotSuccessful();

    });

    it("Order without filling last name", () => {
            const dataWithoutLastName = BillingData.getValidData();
            delete dataWithoutLastName.lastName;
            CheckoutPage.fillBillingForm(dataWithoutLastName);
            CheckoutPage.checkTerms();
            CheckoutPage.submitForm();

            CheckoutPage.verifyMultipleErrors(['O campo Last Name deve ser prenchido']);
            CheckoutPage.verifyOrderNotSuccessful();
    })

    it("Order without filling company", () => {
            const dataWithoutCompany = BillingData.getValidData();
            delete dataWithoutCompany.company;
            CheckoutPage.fillBillingForm(dataWithoutCompany);
            CheckoutPage.checkTerms();
            CheckoutPage.submitForm();
            
            CheckoutPage.verifyMultipleErrors(['O campo Company deve ser prenchido']);
            CheckoutPage.verifyOrderNotSuccessful();
    })

    it ("Order without filling email", () => {
            const dataWithoutEmail = BillingData.getValidData();
            delete dataWithoutEmail.email;
            CheckoutPage.fillBillingForm(dataWithoutEmail);
            CheckoutPage.checkTerms();
            CheckoutPage.submitForm();

            CheckoutPage.verifyMultipleErrors(['O campo E-mail deve ser prenchido']);
            CheckoutPage.verifyOrderNotSuccessful();
    })

    it ("Order without selecting country", () => {
            const dataWithoutCountry = BillingData.getValidData();
            delete dataWithoutCountry.countryIndex;
            CheckoutPage.fillBillingForm(dataWithoutCountry);
            CheckoutPage.checkTerms();
            CheckoutPage.submitForm();

            CheckoutPage.verifyMultipleErrors(['O campo Country deve ser prenchido']);
            CheckoutPage.verifyOrderNotSuccessful();
    })

    it ("Order without filling city", () => {
            const dataWithoutCity = BillingData.getValidData();
            delete dataWithoutCity.cityIndex;
            CheckoutPage.fillBillingForm(dataWithoutCity);
            CheckoutPage.checkTerms();
            CheckoutPage.submitForm();

            CheckoutPage.verifyMultipleErrors(['O campo City deve ser prenchido']);
            CheckoutPage.verifyOrderNotSuccessful();
    })

    it ("Order without filling zip code", () => {
            const dataWithoutZipCode = BillingData.getValidData();
            delete dataWithoutZipCode.zipCode;
            CheckoutPage.fillBillingForm(dataWithoutZipCode);
            CheckoutPage.checkTerms();
            CheckoutPage.submitForm();

            CheckoutPage.verifyMultipleErrors(['O campo Zip Code deve ser prenchido']);
            CheckoutPage.verifyOrderNotSuccessful();
    })

    it ("Order without filling address", () => {
            const dataWithoutAddress = BillingData.getValidData();
            delete dataWithoutAddress.address;
            CheckoutPage.fillBillingForm(dataWithoutAddress);
            CheckoutPage.checkTerms();
            CheckoutPage.submitForm();

            CheckoutPage.verifyMultipleErrors(['O campo Address deve ser prenchido']);
            CheckoutPage.verifyOrderNotSuccessful();
    })

    it ("Order without filling notes", () => {
            const dataWithoutNotes = BillingData.getValidData();
            delete dataWithoutNotes.notes;
            CheckoutPage.fillBillingForm(dataWithoutNotes);
            CheckoutPage.checkTerms();
            CheckoutPage.submitForm();

            CheckoutPage.verifyMultipleErrors(['O campo Additional Notes deve ser prenchido']);
            CheckoutPage.verifyOrderNotSuccessful();
    })

})