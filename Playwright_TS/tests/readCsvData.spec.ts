import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const testData = parse(fs.readFileSync(path.join(__dirname,'testData','orangeHrmLoginData.csv')),{
    columns:true,
    skip_empty_lines:true
})

test('Login test with valid Credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[placeholder="Username"]').fill(testData[0].username);
    await page.locator('[placeholder="Password"]').fill(testData[0].password);
    await page.locator('[type="submit"]').click();
    await page.locator('.oxd-userdropdown').click();
    await page.locator('text=Logout').click();
});

test('Login test with invalid Credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[placeholder="Username"]').fill(testData[1].username);
    await page.locator('[placeholder="Password"]').fill(testData[1].password);
    await page.locator('[type="submit"]').click();
    await expect(page.locator('.orangehrm-login-error>.oxd-alert--error')).toBeVisible();
});

/*
Similar to Read CSV - Try to write test read data from excel
Hint - Use xlsx dependency - https://www.npmjs.com/package/xlsx
*/