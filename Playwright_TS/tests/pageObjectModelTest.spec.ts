import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { AdminPage } from './pages/AdminPage';

test('OrangeHrm POM Test', async ({ page }) => {
    // Object creation
    // Syntax of object creation
    // const objectName = new ClassName(arguments);
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const adminPage = new AdminPage(page);

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

// Assignment
// https://www.saucedemo.com/