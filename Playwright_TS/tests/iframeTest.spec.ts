import { test, expect } from '@playwright/test';

test('Frame Handling using page.frame()', async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame1 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1?.locator('input[name="mytext1"]').fill('Frame 1 Input');
});

test('Frame Handling using page.frameLocator()', async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame1 = page.frameLocator('frame[src="frame_1.html"]');
    await frame1?.locator('input[name="mytext1"]').fill('Frame 1 Input');
});

test('Nested Frame Handling', async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    const nestedFrame = frame3?.childFrames();
    await nestedFrame[0].locator('(//div[@class="vd3tt"])[1]').check();
});