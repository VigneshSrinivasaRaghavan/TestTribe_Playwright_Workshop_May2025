import { Page,Locator } from '@playwright/test';
import BasePage from './BasePage';

export class LoginPage extends BasePage{

    // Locator variable declaration
    private readonly usernameTextbox:Locator;
    private readonly passwordTextbox:Locator;
    private readonly loginButton:Locator;

    // Constructor to initialize the locators
    constructor(page:Page){
        super(page);
        this.usernameTextbox = page.locator('input[name="username"]');
        this.passwordTextbox = page.locator('//input[@placeholder="Password"]');
        this.loginButton = page.locator('button[type="submit"]');
    }

    // Methods to perform actions on the locators

    async enterUsername(usernameText:string){
        await this.b_fillField(this.usernameTextbox, usernameText);
    }

    async enterPassword(passwordText:string){
        await this.b_fillField(this.passwordTextbox, passwordText);  
    }

    async clickLoginButton(){
        await this.b_clickElement(this.loginButton);
    }
}
