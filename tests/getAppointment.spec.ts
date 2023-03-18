import { expect, test } from "@playwright/test";
import {HomePage} from "../src/pages/Home/HomePage";
import {Loginpage} from "../src/pages/Login/Loginpage";
import {Appointment} from "../src/pages/Appointment/Appointment";
import { accountData } from "../src/utils/data-reader";
import { sendResultNoti } from "../src/utils/slack";
import { CustomUtils } from "../src/utils/CustomUtils";



test.beforeEach(async ({page})=>
{
        await page.goto("http://3.110.160.176:3000/");
    
});
    

test("Verify user can login and get the Appointment ", async ({ page, request }, testResult) => {
  
  const Homepage = new HomePage(page);
  await Homepage.verifyHomeWelcomeMessage("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessi");
  await Homepage.clickOnLogin();
  const loginpage = new Loginpage(page);
  await loginpage.closeSideNavPopup();
  await loginpage.enterMailandPassword(accountData);
  await loginpage.submit();
  await Homepage.clickGetStartedforAppointment();
  const CustomUtil = new CustomUtils(page);
  const Appointmentpage = new Appointment(page);
  expect (await Appointmentpage.verifycalenderWidget('March 2023')).toBe(true);
  await Appointmentpage.Selectdate(await CustomUtil.getdate(2));
  await Appointmentpage.verifyselecteddate("your selected date");
  await Appointmentpage.bookslot();
  await Appointmentpage.Enterformdata({name:'Hari', phnumber:'8489388286', email:'hari@gmail.com',doctor:5,gender:'Male',age:'27', weight:'72'});
  
 
});


