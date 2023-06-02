/// <
const { test, expect } = require('@playwright/test');
import {HerokuHomePage} from '../PageObjectsPlaywright/HerokuHomePage';
import { HomePageWithInterfaceImpl } from '../PageObjectsPlaywright/HomePageWithInterfacesImpl';
import { AddRemoveElements } from '../PageObjectsPlaywright/AddRemoveElements';
import {AnnotateHomePage} from '../PageObjectsPlaywright/AnnotateHomePage';
import { Login } from '../API/loginAPI';
import { HerokuMobileApp } from '../mobile/HerokuHomePageMobile';
import { HerokuDesktop } from '../desktop/HerokuHomePageDT';
test.skip('Heroku App Home Page Heading is correct',async ({ page }) => {
  // Arrange 
  const expectedHeading = 'Welcome to the-internet'; //1
  await page.goto('https://the-internet.herokuapp.com/');// ADD T Q
  // #content > h1
  // Act 
  const result = await page.getByRole('heading',{ name: 'Welcome to the-internet' }).innerText(); // ADD To Q
  await expect(page.locator('.heading')).toHaveText('Welcome to the-internet'); 
  //await expect(page.locator('.status')).toHaveText('Submitted');
  
  // Assert

  expect(result).toBe(expectedHeading); 
});
/**
 * This Test checks for the number of links available
 */
test.skip('There are 44 Examples in Heroku App',async ({ page })=>{
  await page.goto('https://the-internet.herokuapp.com/');
  const result = await page.getByRole('link')
  expect(result).toHaveCount(44);
})

test.skip('There are 44 Examples in Heroku App with PageObjects',async ({ page })=>{
  const herokuapp = new HerokuHomePage(page);
  await herokuapp.visit();
  await herokuapp.checkAvailableExamplesCount(44);
  await herokuapp.checkHeading('Welcome');
  
})

test.skip('Check Features in Annotate App HomePage',async ({ page })=>{
   const annApp = new AnnotateHomePage(page);
   annApp.checkFeature();
   /// AAA
})
test.skip('Check download in Annotate app',async ({ page })=>{
  const annApp = new AnnotateHomePage(page);
  annApp.ckeckDownload();
})

test.skip('User logging for first time shoukd be displayed with welcome screen',async ({ page })=>{
  // AAA
  // Login(uname, pwd)
  // get teh heading / status text == ""
  const annApp = new AnnotateHomePage(page);
  annApp.Login();
  const statusMessage = annApp.getSatatus();
  expect(statusMessage).equals("Welcome User")
})

test.skip('User logging for more than one  time shoukd be displayed with already exists screen',async ({ page })=>{
  const annApp = new AnnotateHomePage(page);
  annApp.Login();
  annApp.openTab();
  annApp.Login()
  const statusMessage = annApp.getSatatus();
  expect(statusMessage).equals("User Already Logged In")
})


test.skip('Examples can be accessed in HerokuApp',async ({ page })=>{
  const herokuapp = new HerokuHomePage(page);
  await herokuapp.visit();
  //await herokuapp.checkAvailableExamplesCount(44);
  await herokuapp.goToExample('ADDRemove')
  await herokuapp.checkHeading('Welcome');
  
})

test.skip('API Login works',async ({ page })=>{
  const psAPI = new Login("");
  psAPI.executeLogin();
  
})


test.skip('Adding elements work', async ({page}) =>{
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link',{name:'Add/Remove Elements'}).click();
  // Get the Add Button
  await page.getByRole('button',{name:"Add Element"}).click();
  // page.getByTestId('parrot') - 
  //Assertion
  await expect(page.getByRole('button',{name:"Delete"})).toHaveCount(1);
  // HomePage
  // AddRemove
  const hpage = new HerokuHomePage(page);
  const addRemPage = new AddRemoveElements(page);
  hpage.visit();
  hpage.goToExample('Add/Remove');
  addRemPage.add(1);
  addRemPage.verifyAddedElements(1);

})

test.skip('Adding 2 elements work', async ({page}) =>{
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link',{name:'Add/Remove Elements'}).click();
  // Get the Add Button
  await page.getByRole('button',{name:"Add Element"}).click();
  // page.getByTestId('parrot') - 
  //Assertion
  await expect(page.getByRole('button',{name:"Delete"})).toHaveCount(1);
  // HomePage
  // AddRemove
  const hpage = new HerokuHomePage(page);
  const addRemPage = new AddRemoveElements(page);
  hpage.visit();
  hpage.goToExample('Add/Remove');
  addRemPage.add(2);
  addRemPage.verifyAddedElements(2);

})

test.skip('Adding 2 elements work in app', async ({page}) =>{
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link',{name:'Add/Remove Elements'}).click();
  // Get the Add Button
  await page.getByRole('button',{name:"Add Element"}).click();
  // page.getByTestId('parrot') - 
  //Assertion
  await expect(page.getByRole('button',{name:"Delete"})).toHaveCount(1);
  // HomePage
  // AddRemove

  // Mobile App
  // Desktop App / Java App
  // WebApplication
  const hpage = new HerokuHomePage(page); // HomePage adaptation with Playwright
  const addRemPage = new AddRemoveElements(page);
  hpage.visit();
  hpage.goToExample('Add/Remove');
  addRemPage.add(2);
  addRemPage.verifyAddedElements(2);

})

test.skip('Accessing Heroku HomePage app using Interfaces', async ({page}) =>{
  const herokuApp = new HomePageWithInterfaceImpl(page);
  await herokuApp.visit();
  
})

test.only('Checking Number of links in Home Page', async ({page}) =>{
  const herokuApp = new HomePageWithInterfaceImpl(page);
  await herokuApp.visit();
  await herokuApp.checkNoOfExamples(44);
  
})

test.skip('WebSockets Tests', async ({page}) =>{
  let wsdata;
  page.on('websocket', data=>{
    console.log(data.url());
    console.log(data.isClosed());
  })
  await page.goto('http://localhost:7080/');
  await page.getByRole("textbox").type('Sending Data from Script');
  await page.getByRole("button").click();
  await expect(wsdata).toBeDefined();

})

