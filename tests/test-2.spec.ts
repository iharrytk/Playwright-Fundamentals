import { test, expect } from '@playwright/test';

test('test locator by xpath', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/locators.html');

  //creating and saving the locator in a const  using xpath
  const clickmeButtonlocator=page.locator('xpath=//button[normalize-space()="Click Me"]');
  //performing the action on the locator
  await clickmeButtonlocator.click();
  
});

test('test locator by css sector', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/locators.html');

  //creating and saving the locator in a const using css sectors
  const clickmeButtonlocator=page.locator('css=button[role="button"]');
  //performing the action on the locator
  await clickmeButtonlocator.click();
  
});


test('test-filter locator-filter by text', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/locators.html');


  //performing the action on the filter locator
  await page.getByRole('listitem')
            .filter({hasText:'Product 2'})
            .getByRole('button',{name:'Add to cart'})
            .click();
  
});


test('test-filter locator-filter by getByRole', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/locators.html');


  //performing the action on the filter locator
  await page.getByRole('listitem')
            .filter({has:page.getByRole('heading',{name:'Product 2'})})
            .getByRole('button',{name:'Add to cart'})
            .click();
  
});


test('test-chaining filters', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/locators.html');

  //identify list locator
const listlocator=page.getByRole('listitem')

  //performing the action on the filter locator to take a screenshot
  await listlocator.filter({hasText:'Mary'})
                    .filter({has:page.getByRole('button',{name:'Say goodbye'})})
                    .screenshot({path:'chainingfilter.png'});
  
});

test('test-Shadow DOM-Element Click ', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/shadowdom.html');

  //identify open shadow DOM locator
const openshadowDOMlocator=page.getByText('Details (Open Shadow)')

  //identify closed shadow DOM locator-test case will fail as the shadowroot is closed
//const closedshadowDOMlocator=page.getByText('Details (Closed Shadow)')

  //performing the action on the open shadow DOM locator
  await openshadowDOMlocator.click();
  
});


