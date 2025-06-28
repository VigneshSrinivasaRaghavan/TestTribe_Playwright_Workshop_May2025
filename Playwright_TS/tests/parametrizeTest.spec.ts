import { expect, test } from '@playwright/test'

const data = [
  {username: 'Admin', password: 'admin123'},
  {username: 'Admin1', password: 'admin1234'}
]

data.forEach(testData =>{
test(`Login test with ${testData.username} and ${testData.password}`, async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.locator('[placeholder="Username"]').fill(testData.username);
  await page.locator('[placeholder="Password"]').fill(testData.password);
  await page.locator('[type="submit"]').click();
  await page.locator('.oxd-userdropdown').click();
  await page.locator('text=Logout').click();
});
})
