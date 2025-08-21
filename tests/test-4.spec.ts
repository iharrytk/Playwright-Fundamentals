import { test, expect, type Page } from '@playwright/test';
import { format } from 'path';

test('test locator by Actions-text input', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/actions.html');

  //creating and saving the locator in a const  using xpath
  const textboxlocator=page.locator('xpath=//input[@role="textbox"]');

  //performing the action on the locator
  await textboxlocator.fill('peter')
  
});


test('test locator by Actions-date input', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/actions.html');

  //creating and saving the locator in a const  using xpath
  const datelocator=page.locator('xpath=//input[@aria-label="Birth date"]');

  //performing the action on the locator
  await datelocator.fill('2025-08-20');
  
});

test('test locator by Actions-appoitment time input', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/actions.html');

  //creating and saving the locator in a const  using xpath
  const appoitmenttimelocator=page.locator('xpath=//input[@aria-label="Appointment time"]');

  //performing the action on the locator
  await appoitmenttimelocator.fill('11:09');
  
});


test('test locator by Actions-local time input', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/actions.html');

  //creating and saving the locator in a const  using xpath
  const localtimelocator=page.locator('xpath=//input[@aria-label="Local time"]');

  //performing the action on the locator
  await localtimelocator.fill('2025-08-20T11:09');
  
});


test('test locator by Actions-checkbox check and assert the check ', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/actions.html');

  //creating and saving the locator in a const  using xpath
  const checkboxlocator=page.locator('xpath=//input[@aria-label="Subscribe to newsletter"]');

// Check the checkbox
  await checkboxlocator.check();

  // Assert the checked state
  expect(checkboxlocator).toBeChecked();
  
});


test('test locator by Actions-radio buttons check ', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/actions.html');

  //creating and saving the locator in a const  using xpath
  const radiobutttonlocator=page.locator('xpath=//input[@value="XL"]');

// Check the radio button
  await radiobutttonlocator.check();

  // Assert the radio button
  expect(radiobutttonlocator).toBeChecked();
  
});


test('test locator by Actions-singleselect and multiselect dropdowns ', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/actions.html');

  //creating and saving the locator in a const  using xpath
  const singledropdownlocator=page.locator('xpath=//select[@aria-label="Choose a color"]');
    const multidropdowndropdownlocator=page.locator('xpath=//select[@aria-label="Choose multiple colors"]');

// select a single and multidropdown using the value in the HTML DOM
  await singledropdownlocator.selectOption("Blue");
await multidropdowndropdownlocator.selectOption(['Blue','Red']);

  
});


test('test locator by Actions-keys press ', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/actions.html');

  //creating and saving the locator in a const  using xpath
  const locator=page.getByText('Generic Button');
   

// Press enter on the locator
  await locator.press('Enter');


  
});


test('test drag and drop', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/actions.html');

  //drag and drop 
await page.locator('//div[@id="item-to-be-dragged"]').dragTo(page.locator('//div[@id="item-to-drop-at"]'));
   




  
});








