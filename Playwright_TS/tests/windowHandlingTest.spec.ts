import { test, expect } from '@playwright/test';

test('Single Tab Handling Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.pause();
    const newTab = await Promise.all([
        page.waitForEvent('popup'),
        page.click('#Tabbed>a') // Same as page.locator('#Tabbed>a').click()
    ]);
    await newTab[0].locator('.DocSearch-Button-Placeholder').click();
    await newTab[0].locator('#docsearch-input').fill('Playwright');
    await page.bringToFront();
    await page.locator('.analystic[href="#Seperate"]').click();
    await newTab[0].bringToFront();
});

test('Single Window Handling Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.locator('.analystic[href="#Seperate"]').click();
    await page.pause();
    const newWindow = await Promise.all([
        page.waitForEvent('popup'),
        page.click('.btn.btn-primary')
    ]);
    await newWindow[0].locator('.DocSearch-Button-Placeholder').click();
    await newWindow[0].locator('#docsearch-input').fill('Playwright');
    await page.bringToFront();
    await page.locator('.analystic[href="#Multiple"]').click();
    await newWindow[0].bringToFront();
});

test('Multi Tab Handling Test', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');
    await page.pause();
    await page.click('a:has-text("Open Seperate Multiple Windows")');
    const [multipleTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('[onclick="multiwindow()"]')
    ]);

    await multipleTab.waitForLoadState();
    await page.waitForTimeout(2000); // Wait for both tabs to open
    const pages = multipleTab.context().pages();

    await pages[1].bringToFront();
    await pages[1].locator('#email').fill('playwrightAutomation@gmail.com');

    await pages[2].bringToFront();
    await pages[2].locator('.DocSearch-Button-Placeholder').click();
    await pages[2].locator('#docsearch-input').fill('Locator strategies');

    await pages[2].close();
    await pages[2].close();
    await pages[1].close();
});

// Assignment Multi Tab and Window handling - https://www.hyrtutorials.com/p/window-handles-practice.html