import { APIRequestContext, expect } from '@playwright/test';

export class UserApiFlow {
  constructor(private request: APIRequestContext) {}

  async createUser(userData: any) {
    const response = await this.request.post(`${process.env.BASE_URL}/api/users`, {
      data: userData,
    });
    
    // Validate status code immediately in the flow
    expect(response.ok()).toBeTruthy();
    return await response.json();
  }

  async getUserById(userId: string) {
    return await this.request.get(`${process.env.BASE_URL}/api/users/${userId}`);
  }
}