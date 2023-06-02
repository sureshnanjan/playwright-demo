// HerokuHomePage page definitions and Operations
import { expect, Locator, Page } from '@playwright/test';
import { environment } from '../Utilities/heroku_config';

//const {exportedClass} = require('');
//module.exports = {HerokuHomePage};

/**
 * This is my HomePage behaviour
 */
export class HerokuHomePage {
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly subHeading: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.locator('h1', { hasText: 'Welcome to the-internet' });
    this.subHeading = page.locator('h2', { hasText: 'Available Examples' });
}


/**
 * Visits the Home Page
 */
  async visit() {
    await this.page.goto(environment.url);
    //await this.page.goto('https://the-internet.herokuapp.com');
    // Click on the AddRemove Elements
  }

  async checkHeading(headingText: string) {
    //await this.pageHeading.first().click();
    await expect(this.pageHeading).toHaveText(headingText)
  }

  async checkSubHeading(headingText: string) {
    //await this.pageHeading.first().click();
    await expect(this.subHeading).toHaveText(headingText)
  }

  async checkAvailableExamplesCount(noofLInks: number){
    const result = await this.page.getByRole('link')
    await expect(result).toHaveCount(noofLInks);
  }

  async goToExample(exampleName: string) {
    await this.page.getByRole('link', { name: `${exampleName}` }).click();
  }
}