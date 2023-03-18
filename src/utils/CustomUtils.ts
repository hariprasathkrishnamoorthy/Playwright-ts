import { Locator, Page } from "@playwright/test";
import * as util from "util";

export class CustomUtils 
{
  readonly currentDate: Date;
  readonly page: Page;

  constructor(page: Page) 
  {
    this.page = page;
    this.currentDate = new Date();
    
  }

  async getdate(days=0) :Promise<string>
  {
    this.currentDate.setDate(this.currentDate.getDate() + days);
    let formattedDate = this.currentDate.toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return (formattedDate);
   

  }
   
  

}


