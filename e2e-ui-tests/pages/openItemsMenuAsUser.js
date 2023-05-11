const { BasePage } = require("./basePage");
exports.AppointmentsPage = class AppointmentsPage extends BasePage {

    constructor(page) {
        super(page, '/sign-in');
        this.email = page.locator("[placeholder='Login']");
        this.password = page.locator("[type='Password']");
        this.loginButton = page.getByRole('button');
        this.Appointments = page.getByText('Appointments');



    }

    async login(userEmail, userPassword) {
        await this.email.type(userEmail);
        await this.password.type(userPassword);
        await this.loginButton.click();
    }

    async openAppointmentsLink() {
        await this.Appointments.click();
    }
    
};