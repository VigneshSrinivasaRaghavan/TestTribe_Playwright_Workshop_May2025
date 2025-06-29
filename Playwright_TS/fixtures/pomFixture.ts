import { test as baseTest} from '@playwright/test';
import { LoginPage } from '../tests/pages/LoginPage';
import { DashboardPage } from '../tests/pages/DashboardPage';
import { AdminPage } from '../tests/pages/AdminPage';

type pages = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    adminPage: AdminPage;
}

const testPages = baseTest.extend<pages>({
    loginPage:async({page},use) =>{
        await use(new LoginPage(page));
    },
    dashboardPage:async({page},use) =>{
        await use(new DashboardPage(page));
    },
    adminPage:async({page},use) =>{
        await use(new AdminPage(page));
    }
})
export const test = testPages;
export const expect = testPages.expect;