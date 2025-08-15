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


