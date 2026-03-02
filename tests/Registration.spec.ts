import {test, expect} from '../fixtures/baseTest'
import { RandomData } from '../Utility/utils'

test.describe('Registration Flow', () => {

     
    test('Registering a user', async ({ Registration, context }) => {
        await Registration.NavigatingToLoginPage(process.env.BASE_URL!);
        await Registration.NavigatingToRegistrationPage();
        const user = RandomData.getRandomUser();
        await Registration.ProvidingRegistrationData(user.firstName, user.lastName);
        context.waitForEvent('page');
    });

    
});