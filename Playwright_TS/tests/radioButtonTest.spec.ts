import {test,expect} from '@playwright/test';

test('Radio Button Test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  const maleRadioButton = page.locator('input[value="Male"]');
  const femaleRadioButton = page.locator('input[value="FeMale"]');

  // Way 1 of Initial assertions to check that no radio button is selected
  await expect(maleRadioButton).not.toBeChecked();
  await expect(femaleRadioButton).not.toBeChecked();

   // Way 2 of Initial assertions to check that no radio button is selected
  expect(await maleRadioButton.isChecked()).toBeFalsy();
  expect(await femaleRadioButton.isChecked()).toBeFalsy();

  // Select male radio button
  await maleRadioButton.check();
 await expect(maleRadioButton).toBeChecked();
  await expect(femaleRadioButton).not.toBeChecked();
   expect(await maleRadioButton.isChecked()).toBeTruthy();
  expect(await femaleRadioButton.isChecked()).toBeFalsy();

  // Select female radio button
   await femaleRadioButton.check();
 await expect(maleRadioButton).not.toBeChecked();
  await expect(femaleRadioButton).toBeChecked();
   expect(await maleRadioButton.isChecked()).toBeFalsy();
  expect(await femaleRadioButton.isChecked()).toBeTruthy();
});


// Assignment
// Go to the jQuery Mobile demo page for checkbox and automate all the diferet checkbox
//  https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/