import { expect, Locator, Page } from '@playwright/test';
import { environment } from '../Utilities/heroku_config';
import {IHerokuHomePageOps} from "../Operations/IHerokuAppHomePageOps"
export class HomePageWithInterfaceImpl implements IHerokuHomePageOps {
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly subHeading: Locator;
  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.locator('h1', { hasText: 'Welcome to the-internet' });
    this.subHeading = page.locator('h2', { hasText: 'Available Examples' });
}
    async checkNoOfExamples(expected: number): Promise<void> {
        const result = await this.page.getByRole('link')
        await expect(result).toHaveCount(expected);
    }
    async visit(): Promise<void> {
        await this.page.goto("https://the-internet.herokuapp.com/");
    }
    goToExample(): void {
        this.page.goto("https://the-internet.herokuapp.com/").then(()=>{console.log("Accesssing Home Page Heroku")});
    }
    checkHeading(): void {
        throw new Error('Method not implemented.');
    }
    checksubHeading(): void {
        throw new Error('Method not implemented.');
    }

    thissomeOtherMethods(){
        console.log("Internal ");
    }
    
    
}
