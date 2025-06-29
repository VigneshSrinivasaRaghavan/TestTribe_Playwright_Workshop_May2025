import { test } from '../fixtures/pomFixture';

test('OrangeHrm POM Test', async ({ page,loginPage,dashboardPage,adminPage}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.enterUsername('Admin');
    await loginPage.enterPassword('admin123');
    await loginPage.clickLoginButton();
    await dashboardPage.clickAdminTab();
    await adminPage.enterUserName('Admin');
    await adminPage.clickSearchButton();
    await dashboardPage.clickProfileAccordion();
    await dashboardPage.clickLogoutButton();
});