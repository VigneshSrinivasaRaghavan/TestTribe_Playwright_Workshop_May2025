import { test, expect } from '@playwright/test';

test('Simple Alert Test', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog',async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toBe("I am a JS Vignesh");
        await alert.accept();
    });
    await page.locator('button[onclick="jsAlert()"]').click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert'); // Assertion is optional
});

test('Confirmation - Ok Alert Test', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog',async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toBe("I am a JS Confirm");
        await alert.accept();
    })
    await page.locator('button[onclick="jsConfirm()"]').click();
    await expect(page.locator('#result')).toHaveText('You clicked: Ok'); // Assertion is optional
});

// Assignemt - Confirmation Alert Test with Cancel button
// test('Confirmation - Cancel Alert Test', async ({ page }) => {
//     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
// });

test('Prompt Alert - Ok button Test', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog',async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toBe("I am a JS prompt");
        await alert.accept("Vignesh");
    })
    await page.locator('button[onclick="jsPrompt()"]').click();
    await expect(page.locator('#result')).toHaveText('You entered: Vignesh'); // Assertion is optional
});

// Assignemt - Prompt Alert Test with Cancel button
// test('Prompt Alert - Cancel button Test', async ({ page }) => {
//     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
// });