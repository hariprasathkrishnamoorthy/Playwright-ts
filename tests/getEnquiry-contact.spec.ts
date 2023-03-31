import { expect, test } from "@playwright/test";
import {HomePage} from "../src/pages/Home/HomePage";
import {Loginpage} from "../src/pages/Login/Loginpage";
import {Appointment} from "../src/pages/Appointment/Appointment";
import {Contact} from "../src/pages/Contact/Contact";
import { accountData } from "../src/utils/data-reader";
import { sendResultNoti } from "../src/utils/slack";
import { CustomUtils } from "../src/utils/CustomUtils";



test.beforeEach(async ({page})=>
{
        await page.goto("http://3.110.160.176:3000/");
    
});
    

test("Verify user can Enquiry on Availability ", async ({ page, request }, testResult) => {
  
  const Homepage = new HomePage(page);
  await Homepage.clickOnContact();
  

  const contact = new Contact(page);
  expect(await contact.verifyContactuspage()).toBe(true);
  contact.Enterformdata({name :'hari', email:'hari@gmail.com'});
 
});


