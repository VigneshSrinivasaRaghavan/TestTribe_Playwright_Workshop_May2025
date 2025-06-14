import {test,expect} from '@playwright/test';

test('Checkbox Test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  const cricket = page.locator('#checkbox1');
  const movies = page.locator('#checkbox2');
  const hockey = page.locator('#checkbox3');

  // Way 1 of Initial assertions to check that no checkbox is selected
  await expect(cricket).not.toBeChecked();
  await expect(movies).not.toBeChecked();
  await expect(hockey).not.toBeChecked();

  await cricket.check();
  await hockey.check();

  await expect(cricket).toBeChecked();
  await expect(movies).not.toBeChecked();
  await expect(hockey).toBeChecked();

  await cricket.uncheck();
  await hockey.uncheck();

  await expect(cricket).not.toBeChecked();
  await expect(movies).not.toBeChecked();
  await expect(hockey).not.toBeChecked();
});

// Assignment
// Go to the jQuery Mobile demo page for checkbox and automate all the diferet checkbox
//  https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/