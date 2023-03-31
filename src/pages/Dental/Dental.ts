import { Locator, Page } from "@playwright/test";


export class Dental
{
    readonly page: Page;
    readonly ServiceHeader : Locator;
    readonly LearnmoreOption: Locator;
    readonly descriptionofservice: Locator;

    constructor(page: Page) 
     {
        this.page = page;
        this.ServiceHeader  = page.locator("text=Services We Provide");
        this.LearnmoreOption  = page.locator("text=Learn more");
        this.descriptionofservice  = page.locator("text=Exceptional Dental Care, on your Term");

     }
      
      async verifyserviceheader() :Promise<boolean>
      {
        return await this.ServiceHeader.isVisible(); 
          
      }

      async verifyserviceDescription() :Promise<boolean>
      {
        return await this.descriptionofservice.isVisible(); 
          
      }

      async verifyLearnMoreOption() :Promise<boolean>
      {
        return await this.LearnmoreOption.isVisible(); 
          
      }
     
    
}