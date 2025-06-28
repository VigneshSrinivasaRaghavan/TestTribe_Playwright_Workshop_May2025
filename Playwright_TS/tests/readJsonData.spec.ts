import { test, expect } from '@playwright/test';
import * as data from './testData/orangeHrmLoginData.json'

test('Login test with valid Credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[placeholder="Username"]').fill(data.validUsername);
    await page.locator('[placeholder="Password"]').fill(data.validPassword);
    await page.locator('[type="submit"]').click();
    await page.locator('.oxd-userdropdown').click();
    await page.locator('text=Logout').click();
});

test('Login test with invalid Credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[placeholder="Username"]').fill(data.invalidUsername);
    await page.locator('[placeholder="Password"]').fill(data.invalidPassword);
    await page.locator('[type="submit"]').click();
    await expect(page.locator('.orangehrm-login-error>.oxd-alert--error')).toBeVisible();
});