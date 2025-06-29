import { Page, Locator } from "@playwright/test";

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async b_navigateTo(url: string, maxTimeout?: number) {
    await this.page.goto(url, { timeout: maxTimeout, waitUntil: 'networkidle' });
  }

  async b_clickElement(element: Locator, isForceClick?: boolean, maxTimeout?: number) {
    await this.b_waitForElementVisible(element, maxTimeout);
    await element.click({ force: isForceClick });
  }

  async b_fillField(element: Locator, text: string, isForceFill?: boolean, maxTimeout?: number) {
    await this.b_waitForElementVisible(element, maxTimeout);
    await element.fill(text, { timeout: maxTimeout, force: isForceFill });
  }

  async b_waitForElementVisible(element: Locator | string, maxTimeout?: number) {
    if (typeof element === "string") {
      await this.page.waitForSelector(element, { state: "visible", timeout: maxTimeout });
    } else {
      await element.waitFor({ state: "visible", timeout: maxTimeout });
    }
  }

  async b_waitForElementHidden(element: Locator, maxTimeout?: number) {
    await element.waitFor({ state: 'hidden', timeout: maxTimeout });
  }

  async b_getElementText(element: Locator, maxTimeout?: number): Promise<string> {
    await this.b_waitForElementVisible(element, maxTimeout);
    return element.innerText({ timeout: maxTimeout });
  }

  async b_isElementVisible(element: Locator, maxTimeout?: number): Promise<boolean> {
    await this.b_waitForElementVisible(element, maxTimeout);
    return element.isVisible({ timeout: maxTimeout });
  }

  async b_getElementCount(element: Locator, maxTimeout?: number): Promise<number> {
    await this.b_waitForElementVisible(element, maxTimeout);
    return await element.count();
  }

  async b_waitForPageToLoad(): Promise<void> {
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForTimeout(1000);
  }

  async b_selectStaticDropDown(element: Locator, dropDownText: string): Promise<void> {
    await element.selectOption({ label: dropDownText });
  }

  async b_selectDynamicDropDown(dropdownLocator: Locator, dropdownValuesLocator: Locator, dropDownText: string): Promise<void> {
    await dropdownLocator.click();
    const optionLocator = dropdownValuesLocator.locator(`text=${dropDownText}`);
    await optionLocator.waitFor({ state: 'visible' });
    await optionLocator.click();
  }
}
