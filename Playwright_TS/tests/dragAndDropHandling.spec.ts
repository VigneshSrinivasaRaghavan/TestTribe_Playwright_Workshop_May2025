import { test, expect } from '@playwright/test';

test('Drag And Drop - Approach 1', async ({ page }) => {
  await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
  await page.locator('#box3').hover();
  await page.mouse.down();
  await page.locator('#box103').hover();
  await page.mouse.up();
});

test.only('Drag And Drop - Approach 2', async ({ page }) => {
  await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
  await page.locator('#box3').dragTo(page.locator('#box103'));
});