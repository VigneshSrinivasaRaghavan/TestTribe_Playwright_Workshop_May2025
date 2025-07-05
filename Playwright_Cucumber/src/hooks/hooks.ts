import { After, Before } from "@cucumber/cucumber";
import { Browser, Page, chromium } from '@playwright/test';
import { pageFixture } from "./pageFixture";

let browser: Browser;
let page: Page;

Before(async function(){
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    pageFixture.page = page;
});

After(async function(){
    await page.close();
    await browser.close();
});