import { Locator, Page } from "@playwright/test";


export class HomePage
{
    readonly page: Page;
    readonly getStartedButton: Locator;


    constructor(page: Page) 
     {
        this.page = page;
        this.getStartedButton = page.locator("text=GET STARTED");
     }


    async verifyHomeWelcomeMessage(text :string|RegExp) 
      {
         this.page.getByText(text).isVisible();
        
      }
   
      async clickOnAbout() 
      {
        await this.page.getByRole('link', { name: 'ABOUT' }).click();
          
      }

      
      async clickOnContact() 
      {
        await this.page.getByRole('link', { name: 'CONTACT' }).click();
          
      }

      async clickOnBlog() 
      {
        await this.page.getByRole('link', { name: 'BLOG' }).click();
          
      }
      
      async clickOnDentalService() 
      {
        await this.page.getByRole('link', { name: 'DENTAL SERVICE' }).click();
          
      }
      
      async clickOnReviews() 
      {
        await this.page.getByRole('link', { name: 'REVIEWS' }).click();
          
      }


      async clickOnLogin() 
      {
        await this.page.getByRole('link', { name: 'LOGIN' }).click();
          
      }

    
    
      async clickGetStartedforAppointment() 
      {
          await this.getStartedButton.click();
          
      }



}