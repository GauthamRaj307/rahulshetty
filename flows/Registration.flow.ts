import {Locator, Page, expect, BrowserContext} from '@playwright/test'

export class RegistrationFlow
{
    readonly page : Page;
    readonly context : BrowserContext;
    readonly RegistrationButton : Locator;
    readonly FirstNameField : Locator;
    readonly LastNameField : Locator;
    readonly EmailIdField : Locator;
    



    constructor(page : Page, context : BrowserContext)
    {
        this.page =page;
        this.context=context;
        this.RegistrationButton = page.locator("//p[@class='login-wrapper-footer-text']");
        this.FirstNameField = page.getByRole('textbox', { name: 'First Name' })
        this.LastNameField = page.getByRole('textbox', { name: 'Last Name' })
        this.EmailIdField =  page.getByRole('textbox', { name: 'email@example.com' })
    }

    async NavigatingToLoginPage(url : string )
    {
        await this.page.goto(url);
    }

    async NavigatingToRegistrationPage()
    {
        await this.RegistrationButton.click();
    }

    async ProvidingRegistrationData(firstName : string, LastName : string)
    {
    await this.FirstNameField.fill(firstName);
    await this.LastNameField.fill(LastName);

    //new tab
    const [newPage2] = await Promise.all([
    this.context.waitForEvent('page'),
    await this.page.getByText('Open New Tab').click(),
    ]);
    /*newPage2.getByText();...*/


    //popup
    const [popup] = await Promise.all([
    await this.page.waitForEvent('popup'),
    await this.page.locator('#login-button').click(),
    ]);
    await popup.fill('input[name="username"]', 'myUser');

    //AlertBox
    // 1. Setup the listener
    this.page.on('dialog', async dialog => {
    // Choose your action:
    // await dialog.accept();        // Click OK
    // await dialog.accept('Text');  // Fill prompt and click OK
    await dialog.dismiss();          // Click Cancel
    });
    // 2. Trigger the dialog
    await this.page.getByRole('button', { name: 'Delete Item' }).click();
    }
}
//////kjasfjsjlj