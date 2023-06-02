import { expect, Locator, Page } from '@playwright/test';

export class AnnotateHomePage {
  readonly page: Page;
  readonly feature: Locator;
  readonly tour: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.feature = page.locator('h1', { hasText: 'Welcome to the-internet' });
    this.tour = page.locator('h2', { hasText: 'Available Examples' });
}

  async visit() {
    await this.page.goto('https://annotate.net/');
  }

  async checkFeature(headingText: string) {
    //await this.pageHeading.first().click();
    await expect(this.feature).toHaveText(headingText)
  }

  async checkTour(headingText: string) {
    //await this.pageHeading.first().click();
    await expect(this.tour).toHaveText(headingText)
  }

  async ckeckPricing(headingText: string) {
    //await this.pageHeading.first().click();
    await expect(this.tour).toHaveText(headingText)
  }

  async ckeckDownload(headingText: string) {
    //await this.pageHeading.first().click();
    await expect(this.tour).toHaveText(headingText)
  }

  async checkAvailableExamplesCount(noofLInks: number){
    const result = await this.page.getByRole('link')
    expect(result).toHaveCount(noofLInks);
  }

  async Login(exampleName: string) {
    await this.page.getByRole('link', { name: `${exampleName}` }).click();
  }

  async SignUp(exampleName: string) {
    await this.page.getByRole('link', { name: `${exampleName}` }).click();
  }
}