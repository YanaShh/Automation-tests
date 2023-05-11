const { test, expect, request } = require('@playwright/test');
const { RegistrationPage } = require('../pages/registrationPage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");

const user = users[config.default.use.env].user;

let registrationPage;

test.describe('Registration tests', () => {

    test.beforeEach(async ({ page }) => {
        registrationPage = new RegistrationPage(page);
        await registrationPage.open();
    });

    test('Registration with valid data', async ({ page }) => {
        await registrationPage.registration(userData.generatedFullName, userData.generatedEmail, userData.password);
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/vertical/default-dashboard');
    });

    test('Open Sign In page from Sign Up', async ({ page }) => {
        await registrationPage.SignIn.click();
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');
    });


});
