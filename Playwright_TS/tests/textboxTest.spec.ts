import { test, expect } from '@playwright/test'

test('Fill method', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.locator('input[name="username"]').fill('Admin');
// Clear the input field before filling
  await page.locator('input[name="username"]').clear();
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('//input[@placeholder="Password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();
});

test('Press sequential method', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');    
  await page.pause();
  await page.locator('input[name="username"]').pressSequentially('Admin',{delay:500});
  await page.locator('//input[@placeholder="Password"]').pressSequentially('admin123',{delay:500});
  await page.locator('button[type="submit"]').click();
});