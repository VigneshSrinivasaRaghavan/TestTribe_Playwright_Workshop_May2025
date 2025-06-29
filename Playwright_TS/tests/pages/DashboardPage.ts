import { Page, Locator } from '@playwright/test';
import BasePage from './BasePage';

/*
In TypeScript, marking a property as readonly means:
It can only be assigned once, typically during:
 1. The property declaration
 2. The class constructor
Once set, it cannot be modified from anywhere else in the class or outside it.
*/

export class DashboardPage extends BasePage {
  private readonly adminTab: Locator;
  private readonly profileAccordion: Locator;
  private readonly logoutLink: Locator;

  constructor(page: Page) {
    super(page);
    this.adminTab = page.locator('//span[text()="Admin"]');
    this.profileAccordion = page.locator('.oxd-userdropdown-name');
    this.logoutLink = page.locator('//a[text()="Logout"]');
  }

  async clickAdminTab() {
    await this.b_clickElement(this.adminTab);
  }

  async clickProfileAccordion() {
    await this.b_clickElement(this.profileAccordion);
  }

  async clickLogoutButton() {
    await this.b_clickElement(this.logoutLink);
  }
}
