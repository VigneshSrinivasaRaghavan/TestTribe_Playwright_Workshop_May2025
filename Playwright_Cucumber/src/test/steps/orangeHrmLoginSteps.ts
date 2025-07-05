import { Given, When, Then } from '@cucumber/cucumber';
import {expect} from "@playwright/test";
import { pageFixture } from '../../hooks/pageFixture';


Given('user is on the orangehrm login page', async function () {
await pageFixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('user enters valid username', async function () {
        await pageFixture.page.locator('input[name="username"]').fill('Admin');
});

When('user enters valid password', async function () {
        await pageFixture.page.locator('input[name="password"]').fill('admin123');
});

When('user clicks on the login button', async function () {
        await pageFixture.page.locator('button[type="submit"]').click(); 
});

Then('user should be redirected to the dashboard page', async function () {
    await expect(pageFixture.page.locator('.oxd-topbar-header-title')).toBeVisible();
});