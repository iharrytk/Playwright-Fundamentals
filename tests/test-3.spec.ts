import { test, expect } from '@playwright/test';

test('test Dialog handling-Alerts', async ({ page }) => {
await page.goto('http://127.0.0.1:5500/tests/dialog.html');

 //register the dialog
page.on('dialog', dialog => dialog.accept());

//keep the allert dialog ina  constant
const dialogalert=await page.getByText('Show Alert');

//perform click action on the alert dialog
await dialogalert.click();
  
});


test('test Dialog handling-Confirm Accept', async ({ page }) => {
await page.goto('http://127.0.0.1:5500/tests/dialog.html');

 //register the dialog
page.on('dialog', dialog => dialog.accept());

//keep the Confirm dialog in a  constant
const dialogconfirmaccept=await page.getByText('Show Confirm');

//perform click action on the confirm dialog
await dialogconfirmaccept.click();
  
});


test('test Dialog handling-Confirm dismiss', async ({ page }) => {
await page.goto('http://127.0.0.1:5500/tests/dialog.html');

 //register the dialog
page.on('dialog', dialog => dialog.dismiss());

//keep the Confirm dialog in a  constant
const dialogconfirmaccept=await page.getByText('Show Confirm');

//perform click action on the confirm dialog
await dialogconfirmaccept.click();
  
});



test('test Dialog handling-Print Dialog', async ({ page }) => {
await page.goto('http://127.0.0.1:5500/tests/dialog.html');

 //register the dialog listener to print the page
await page.evaluate('(() => {window.waitForPrintDialog = new Promise(f => window.print = f);})()');

//keep the print dialog in a  constant
const dialogconfirmaccept=await page.getByText('Print Page');

//perform click action on the print dialog
await dialogconfirmaccept.click();

await page.waitForFunction('window.waitForPrintDialog');
  
});