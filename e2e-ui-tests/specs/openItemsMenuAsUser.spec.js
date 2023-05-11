const { test, expect, request } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { AppointmentsPage } = require('../pages/openItemsMenuAsUser');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");

let loginPage;
let appointmentsPage;
const env = config.default.use.env;
const user = users[config.default.use.env].user;


test.describe('Menu tests', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        appointmentsPage = new AppointmentsPage(page);
        await loginPage.open();
        await loginPage.login(user.email, user.password);
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/vertical/default-dashboard');
       
    });


    test('Open Appointments link', async ({ page }) => {
        await appointmentsPage.openAppointmentsLink();
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/vertical/appointments');
    });

});