import { test, expect } from '@playwright/test';

test('test locator get by role', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/locators.html');

  //creating and saving the locator in a const 
  const clickmeButtonlocator=page.getByRole('button',{name:'Click Me'});
  //performing the action on the locator
  await clickmeButtonlocator.click();
  
});

test('test locator get by label,locator chaining iframes', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/iframeapp.html');

  //creating and saving the frame locator in a const 
  const framepagelocator=page.frameLocator('#loginFrame');

 //creating and saving the label locator inside iframe in a const 
  const labelpasswordlocator=framepagelocator.getByLabel('Password');
  
  
  //performing the action on the locator,fill works similar to sendkeys in selenium
  await labelpasswordlocator.fill('mypassword')
  
});


test('test locator get by placeholder', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/locators.html');

  //creating and saving the locator in a const 
  const placeholderlocator=page.getByPlaceholder('Search here...');
  await placeholderlocator.fill('playwright');
 
  
});


test('test locator get by text', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/locators.html');

  //creating locator and expecting the locator to be visible action

  await expect(page.getByText('Welcome, John')).toBeVisible();
  await expect(page.getByText('Welcome, John',{exact:true})).toBeVisible();  
 
  
});

test('test locator Regular Expressions', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/locators.html');

  //creating locator and expecting the locator to be visible action
  //Regular Expressions
  
  //await expect(page.getByText(/welcome,\sjohn/i)).toBeVisible();

  //await expect(page.getByText(/welcome,\s[a-z]/i)).toBeVisible();

  //await expect(page.getByText(/[a-z],\s[a-z]/i)).toBeVisible();

  await expect(page.getByText(/[A-Za-z],\s[A-Za-z]/i)).toBeVisible();

  //await expect(page.getByText(/[A-Za-z],\s[A-Za-z]{5,20}/i)).toBeVisible();
});


test('test locator alt text', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/locators.html');

  //creating locator and action
  await page.getByAltText('Playwright Logo').click();

  
});

test('test locator get by title', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/locators.html');

  //creating locator and action
  await expect(page.getByTitle('More Info')).toHaveText('Hover over me');

  
});


test('test locator get by testid', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/locators.html');

  //creating locator and action
  await expect(page.getByTestId('submit-btn')).toHaveText('Submit Form');

  
});




