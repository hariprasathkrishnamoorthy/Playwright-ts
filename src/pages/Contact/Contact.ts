import { Locator, Page } from "@playwright/test";


export class Contact

{
    readonly page: Page;
    readonly contactus: Locator;
    readonly contactusheader: Locator;
    readonly name : Locator ;
    readonly email : Locator;
    readonly subject : Locator;
    readonly Description : Locator;
    readonly submit : Locator;
    readonly close: Locator;



    constructor(page: Page) 
     {
        this.page = page;
        this.contactus = page.locator("text=Contact Us");
        this.contactusheader =  page.locator("text=Alawys Connect With U");
        this.name= page.getByPlaceholder('enter your name');
        this.email = page.getByPlaceholder('enter your email');
        this.subject = page.getByPlaceholder('enter your subject');
        this.Description = page.getByPlaceholder('enter your message');
        this.submit =  page.getByRole('button', { name: 'Submit' });
     

     }


      async verifyContactuspage() 
      {
          await this.contactus.isVisible();
          return await this.contactusheader.isVisible();   
      }

      async verifyformEditable() 
      {
          
          return await this.name.isEditable();
      }
 

      async Enterformdata(obj:any) 
      {
          await this.name.click({force:true});
          await this.name.fill(obj.name);
          await this.email.click();
          await this.email.fill(obj.email);
          await this.email.press('Tab');
          await this.subject.click();
          await this.subject.fill('Enquiry on Dental Procedure');
          await this.subject.press('Tab');
          await this.Description.click();
          await this.Description.fill("cost of dental fillings");
          await this.submit.click();
          
 
      }

     

   
     

}