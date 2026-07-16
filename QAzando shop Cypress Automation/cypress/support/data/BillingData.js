import { faker } from '@faker-js/faker';

class BillingData {
    
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

export default new BillingData();