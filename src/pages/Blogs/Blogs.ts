import { Locator, Page } from "@playwright/test";


export class Blogs
{
    readonly page: Page;
    readonly BlogsHeader : Locator;
    readonly Blogtitle: Locator;
    readonly BlogsCard: Locator;

    constructor(page: Page) 
     {
        this.page = page;
        this.BlogsHeader  = page.locator("text=OUR BLOGS");
        this.Blogtitle  = page.locator("text=From Our Blog News");
        this.BlogsCard  = page.locator("xpath=//div[contains(@class,'blog-card')]");

     }
      
      async verifyBlogsHeader() :Promise<boolean>
      {
        return await this.BlogsHeader.isVisible(); 
          
      }

      async verifyBlogtitle() :Promise<boolean>
      {
        return await this.Blogtitle.isVisible(); 
          
      }

      async verifyBlogsCard() :Promise<boolean>
      {
        return await this.BlogsCard.first().isVisible(); 
          
      }
    
      async verifytotalBlogsCardpresent(val:number) :Promise<boolean>
      {
        return await this.BlogsCard.count()==val;
          
      }

     
    
}