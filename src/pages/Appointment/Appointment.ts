import { Locator, Page } from "@playwright/test";


export class Appointment

{
    readonly page: Page;
    readonly Appointment: Locator;
    readonly DateSelected: Locator;
    readonly bookappointmentslot: Locator;
    readonly formheading: Locator;
    readonly name : Locator ;
    readonly phnumber : Locator;
    readonly email : Locator;
    readonly doctor : Locator;
    readonly gender : Locator;
    readonly age : Locator;
    readonly weight : Locator;
    readonly submit : Locator;
    readonly close: Locator;



    constructor(page: Page) 
     {
        this.page = page;
        this.Appointment = page.locator("text=AppointMent");
        this.DateSelected =  page.locator("text=your selected date");
        this.bookappointmentslot = page.locator('.btn');
        this.formheading= page.locator("text=Teeth Cleanings");
        this.name= page.getByPlaceholder('Your Name');
        this.phnumber= page.getByPlaceholder('Phone Number');
        this.email = page.getByPlaceholder('Email');
        this.doctor= page.locator('select[name="doctor_id"]');
        this.age =page.getByPlaceholder('Your Age');
        this.weight= page.getByPlaceholder('Weight');
        this.submit=  page.getByRole('button', { name: 'Send' });
        this.close= page.locator('svg');

     }


    async verifycalenderWidget(text :string|RegExp) 
      {
          await this.Appointment.isVisible();
          return await this.page.getByRole('button', { name: text }).isVisible();
          
        
      }

      async Selectdate(text :string|RegExp)
      {
         await this.page.getByRole('button', { name: text }).click();

      }

      async verifyselecteddate(text :string|RegExp) 
      {
          
          await this.DateSelected.isVisible();
        
      }

      async bookslot()
      {

        await this.page.locator('div:nth-child(2) > .card > .btn').click();

      }

      async Enterformdata(obj:any) 
      {
          await this.name.click();
          await this.name.fill(obj.name);
          await this.phnumber.click();
          await this.phnumber.fill(obj.phnumber);
          await this.email.click();
          await this.email.fill(obj.email);
          await this.email.press('Tab');
          await this.doctor.selectOption({ index: obj.doctor });
          await this.age.click();
          await this.age.fill(obj.age);
          await this.weight.click();
          await this.weight.fill(obj.weight);
          await this.submit.click();
          await this.close.click();
 
      }

     

   
     

}