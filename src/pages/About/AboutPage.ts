import { Locator, Page } from "@playwright/test";


export class Aboutpage

{
    readonly page: Page;
    readonly doctorsList: Locator;


    constructor(page: Page) 
     {
        this.page = page;
        this.doctorsList = page.locator("text=Our Doctors");
     }


    async verifydoctorsContactDisplayed(text :string|RegExp) 
      {
          this.doctorsList.isVisible();
          await this.page.getByRole('heading', { name: text }).isVisible();
        
      }
   
     

}