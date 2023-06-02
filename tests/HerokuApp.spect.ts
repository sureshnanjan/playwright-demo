import { test, expect } from '@playwright/test';
test('Heroku App Home Page Heading is correct',async ({ page }) => {
        // Arrange 
        const expectedHeading = 'Welcome to the-internet';
        await page.goto('https://the-internet.herokuapp.com/');
        // #content > h1
        const result = await page.getByRole('heading', { name: 'Welcome to the-internet' }).innerText();
        // Act 
        // Assert
        expect(result).toBe(expectedHeading);
      });

      test('There are 44 Examples in Heroku App',async ({ page })=>{
        page.goto('https://the-internet.herokuapp.com/');
        const result = await page.getByRole('link').count;
        expect(result).toEqual(44);

      })
      
