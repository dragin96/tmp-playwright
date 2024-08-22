import {Base} from "./base";

export class LoginPage extends Base{
    async open() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async submitForm(userData) {
        const { login, password } = userData;

        await this.page.getByPlaceholder('Username').fill(login);
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.locator('#login-button').click();
    }

}
