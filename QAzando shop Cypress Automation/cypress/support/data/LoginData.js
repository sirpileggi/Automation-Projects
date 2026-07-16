import { faker } from '@faker-js/faker';

class LoginData {
    getValidCredentials() {
        return {
            email: faker.internet.email(),
            password: faker.internet.password({ length: 6 }) 
        };
    }
}

export default new LoginData();