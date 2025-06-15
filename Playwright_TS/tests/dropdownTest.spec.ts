import { test, expect } from '@playwright/test';

test('Single Static Dropdown Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.waitForTimeout(2000);
    await page.selectOption('#Skills',{value:'Android'}); // Preferred way to select option by value
    await page.waitForTimeout(2000);
    await page.selectOption('#Skills',{label:'AutoCAD'}); // Second preferred way to select option by label
    await page.waitForTimeout(2000);
    await page.selectOption('#Skills',{index:5}); // Least preferred way to select option by index
    await page.waitForTimeout(2000);
});

test('Multi Static Dropdown Test', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption('#multi-select',[
        {value:'Florida'},
        {label:'New York'},
        {index:5}
    ]);
    await page.waitForTimeout(5000);
});

test('Searchable Dynamic Dropdown Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator('span[role="combobox"]').click();
    await page.locator('input[type="search"]').fill('India');
    await page.locator('ul#select2-country-results>li').click();
    await page.waitForTimeout(2000);
});

test('Non-Searchable Dynamic Dropdown Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator('span[role="combobox"]').click();
    await page.locator('ul#select2-country-results>li',{hasText:"New Zealand"}).click();
    await page.waitForTimeout(2000);
});