import {test,expect} from '@playwright/test';

test('Orange HRM Login test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');    
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('//input[@placeholder="Password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();
  // Dashboard
  // Admin page
});


// Assignment
// Go to the sauce demo page and complete the login process
// https://www.saucedemo.com/