import { test as base } from '@playwright/test';
import {  RegistrationFlow } from '../flows/Registration.flow';
import { UserApiFlow } from '../flows/api.flow'
//import { SignupFlow } from '../flows/SignupFlow';
import * as dotenv from 'dotenv';

dotenv.config();

// Define the shape of our custom fixtures
type MyFlows = {
  Registration: RegistrationFlow;
  userApi: UserApiFlow;
};

// Export the 'test' object with flows baked in
export const test = base.extend<MyFlows>({
    Registration: async ({ page, context }, use) => {
    await use(new RegistrationFlow(page, context));
  },
  
  userApi: async ({ request }, use) => {
    await use(new UserApiFlow(request));
  },
});

export { expect } from '@playwright/test';