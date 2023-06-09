const { BasePage } = require("./basePage");
exports.RegistrationPage = class RegistrationPage extends BasePage {

    constructor(page) {
        super(page, '/sign-up');
        this.fullName = page.locator("[placeholder='Full name']");
        this.email = page.locator("[placeholder='Email address']");
        this.password = page.locator("[type='password']");
        this.registerButton = page.getByRole('button');
        this.SignIn = page.locator("[href='/sign-in']");
    }

    async registration(fullName, email, password) {
        await this.fullName.type(fullName);
        await this.email.type(email);
        await this.password.type(password);
        await this.registerButton.click();
    }

    async openSignInLink() {
        await this.SignInLink.click();
    }


}