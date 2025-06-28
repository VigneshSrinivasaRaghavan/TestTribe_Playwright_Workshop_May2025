import {expect, test} from '@playwright/test'

test.beforeEach('OrangeHRM Login',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.locator('[type="submit"]').click();
})

test.afterEach('OrangeHRM Logout', async ({page}) => {
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('a[href="/web/index.php/auth/logout"]').click();
})

test('Test 1', async ({ page }) => {
    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
    await page.pause();
})

test('Test 2', async ({ page }) => {
    await page.locator('a[href="/web/index.php/pim/viewPimModule"]').click();
    await page.pause();
})
