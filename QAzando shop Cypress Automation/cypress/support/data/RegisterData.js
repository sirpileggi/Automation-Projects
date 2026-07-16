import { faker } from '@faker-js/faker';

class RegisterData {
    getValidUser() {
        return {
            name: faker.person.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password({ length: 6 }) 
        };
    }
}

export default new RegisterData();