import { test, expect } from '@playwright/test'

test('Visble/Hidden Assertion', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    // await expect(page.locator('#displayed-text')).not.toBeVisible(); --> Way 1
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.locator('#show-textbox').click();
    await expect(page.locator('#displayed-text')).toBeVisible();
})

test('Present/NotPresent Assertion', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await expect(page.locator('button[onclick="deleteElement()"]')).toHaveCount(0);
    await page.locator('button[onclick="addElement()"]').click();
    await expect(page.locator('button[onclick="deleteElement()"]')).toHaveCount(1);
    await page.locator('button[onclick="deleteElement()"]').click();
    await expect(page.locator('button[onclick="deleteElement()"]')).toHaveCount(0);
})

test('Enabled/disabled assertion', async ({ page }) => {
    await page.goto("https://letcode.in/button");
    await expect(page.locator('#home')).toBeEnabled();
    await expect(page.locator('button[title="Disabled button"]')).not.toBeEnabled(); // Way 1
    await expect(page.locator('button[title="Disabled button"]')).toBeDisabled(); // Way 1
})

test('Text match/mismatch assertion', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await expect(page.locator('.orangehrm-login-title')).toHaveText('Login');
    await expect(page.locator('.orangehrm-login-title')).toContainText('Log');
    await expect(page.locator('.orangehrm-login-title')).not.toHaveText('Vignesh');
})

test('Element Attribute assertion', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await expect(page.locator('input[name="username"]')).toHaveAttribute('placeholder','Username');
    await expect(page.locator('input[name="username"]')).toHaveAttribute('class','/.*oxd-input/');
})

test('URL assertion', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");

    // Full URL match
    expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Partial URL match
    await expect(page).toHaveURL(/auth/);
})

test('Title assertion', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");

    // Full title match
    expect(page.title()).toBe('OrangeHRM');
    await expect(page).toHaveTitle('OrangeHRM');

    // Partial title match
    await expect(page).toHaveTitle(/Orange/);
})

test('Screenshot assertion', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await expect(page.locator('.orangehrm-login-title')).toHaveText('Login');
    await expect(page).toHaveScreenshot();
    await page.locator('input[placeholder="Username"]').fill('Admin');
    await expect(page).toHaveScreenshot();
})