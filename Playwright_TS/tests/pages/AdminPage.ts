import { Page, Locator } from '@playwright/test';
import BasePage from './BasePage';

export class AdminPage extends BasePage {
/*
In TypeScript, marking a property as readonly means:
It can only be assigned once, typically during:
 1. The property declaration
 2. The class constructor
Once set, it cannot be modified from anywhere else in the class or outside it.
*/
  private readonly employeeNameTextbox: Locator;
  private readonly searchButton: Locator;

  constructor(page: Page) {
    super(page);
    this.employeeNameTextbox = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
    this.searchButton = page.locator('button[type="submit"]');
  }

  async enterUserName(userNameText: string) {
    await this.b_fillField(this.employeeNameTextbox, userNameText);
  }

  async clickSearchButton() {
    await this.b_clickElement(this.searchButton);
  }
}
