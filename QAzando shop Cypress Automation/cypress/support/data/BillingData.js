import { faker } from '@faker-js/faker';

class BillingData {
    
    // Removida a palavra 'static'
    getValidData() {
        return {
            name: faker.person.firstName(),
            lastName: faker.person.lastName(),
            company: faker.company.name(),
            email: faker.internet.email(),
            countryIndex: 1,
            cityIndex: 1,
            zipCode: faker.location.zipCode(),
            address: faker.location.streetAddress(),
            notes: 'nada a informar'
        };
    }
}

// Exportamos uma nova instância, igual aos Page Objects!
export default new BillingData();