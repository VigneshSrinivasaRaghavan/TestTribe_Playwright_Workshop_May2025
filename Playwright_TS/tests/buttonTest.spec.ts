import {test,expect} from '@playwright/test';

test('Regular Single Left click test', async ({ page }) => {
  await page.goto('https://play1.automationcamp.ir/mouse_events.html');    
  await page.locator('#click_area').click();
  await expect(page.locator('#click_type')).toHaveText('Click');
});

test('Double Left click test', async ({ page }) => {
  await page.goto('https://play1.automationcamp.ir/mouse_events.html');    
  await page.locator('#click_area').dblclick();
  await expect(page.locator('#click_type')).toHaveText('Double-Click');
});

test('Regular Single Right click test', async ({ page }) => {
  await page.goto('https://play1.automationcamp.ir/mouse_events.html');    
  await page.locator('#click_area').click({button: 'right'});
  await expect(page.locator('#click_type')).toHaveText('Right-Click');
});