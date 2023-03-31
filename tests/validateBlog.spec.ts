import { expect, test } from "@playwright/test";
import {HomePage} from "../src/pages/Home/HomePage";
import {Loginpage} from "../src/pages/Login/Loginpage";
import {Appointment} from "../src/pages/Appointment/Appointment";
import {Contact} from "../src/pages/Contact/Contact";
import {Blogs} from "../src/pages/Blogs/Blogs";
import { accountData } from "../src/utils/data-reader";
import { sendResultNoti } from "../src/utils/slack";
import { CustomUtils } from "../src/utils/CustomUtils";



test.beforeEach(async ({page})=>
{
        await page.goto("http://3.110.160.176:3000/");
    
});
    

test("Verify user can Enquiry on Availability ", async ({ page, request }, testResult) => {
  
  const Homepage = new HomePage(page);
  await Homepage.clickOnBlog();

  const Blog = new Blogs(page);
  expect(await Blog.verifyBlogsCard()).toBe(true);
  expect(await Blog.verifytotalBlogsCardpresent(3)).toBe(true);
  
 
});


