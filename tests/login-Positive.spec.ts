import { expect, test } from "@playwright/test";
import {HomePage} from "../src/pages/Home/HomePage";
import {Loginpage} from "../src/pages/Login/Loginpage";
import { accountData } from "../src/utils/data-reader";
import { sendResultNoti } from "../src/utils/slack";

test("Verify user can login with valid credentials ", async ({ page, request }, testResult) => {
  
  await page.goto("http://3.110.160.176:3000/");

  const Homepage = new HomePage(page);
  Homepage.verifyHomeWelcomeMessage("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessi");
  Homepage.clickOnLogin();

  const loginpage = new Loginpage(page);
  await loginpage.closeSideNavPopup();
  await loginpage.enterMailandPassword(accountData[0]);
  await loginpage.submit();
  

});
