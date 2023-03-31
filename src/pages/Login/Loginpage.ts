import { Locator, Page } from "@playwright/test";


export class Loginpage
{

    readonly page: Page;
    readonly form : Locator
   
   

    constructor(page: Page) 
    {
       this.page = page;
       this.form=  page.locator('form');
    }

    async closeSideNavPopup() 
    {
        await this.page.getByRole('button', { name: 'Close' }).click();
        
    }

    async enterMailandPassword(accountData) 
    {
        await this.page.getByPlaceholder('Enter Your Email').click();
        await this.page.getByPlaceholder('Enter Your Email').fill(accountData.email);
        await this.page.getByPlaceholder('Enter Your Password').click();
        await this.page.getByPlaceholder('Enter Your Password').fill(accountData.password);
        
    }


    async submit() 
    {
        await this.form.filter({ hasText: 'Sign inSign InOr Sign in with social platforms' }).getByRole('button', { name: 'Sign In' }).click();
        
    }

    async signUp(Name : string,Email : string,password : string) 
    {
        await this.page.getByPlaceholder('Name').click();
        await this.page.getByPlaceholder('Name').fill(Name);
        await this.page.getByPlaceholder('Email', { exact: true }).click();
        await this.page.getByPlaceholder('Email', { exact: true }).fill(Email);
        await this.page.getByPlaceholder('password', { exact: true }).click();
        await this.page.getByPlaceholder('password', { exact: true }).fill(password);
        await this.page.locator('form').filter({ hasText: 'Sign UpSign UpMust Have Valid Email' }).getByRole('button', { name: 'Sign Up' }).click();
        await this.page.getByRole('button', { name: 'Sign In' }).nth(1).click();
    }


  async invalidText(text: string | RegExp) :Promise <boolean>
  {
    await this.page.getByText(text).waitFor({state: "visible"});
    return await this.page.getByText(text).isVisible();
  }
    

}

