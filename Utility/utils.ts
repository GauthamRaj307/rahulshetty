import { faker } from '@faker-js/faker';

export class RandomData {
  static getRandomUser() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    
    return {
      firstName: firstName,
      lastName: lastName,
      // Generates: john.doe@example.com
      //email: faker.internet.email({ firstName, lastName }), 
      // Generates a secure 12-character password
      //password: faker.internet.password({ length: 12, memorable: true }),
      //userName: faker.internet.username({ firstName, lastName }),
      //phoneNumber: faker.phone.number(),
      //address: faker.location.streetAddress()
    };
  }
}