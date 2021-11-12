import test from '../lib/BasePages';
import { environment } from '../lib/Environment';
const testData = {
    invalidUser: "12345ertert",
    invalidpassword: "pasopop123%",
    loginErrorMessage: "Login failed! Please recheck the username and password and try again.",
    forgetSuccessMessage: "We've sent you an email with instructions to reset your password. Please check your inbox to restore access to your account",
    forgotErrorMessage: "Username not found",
}
test.describe("Validation for Login page", () => {
    test("login as Vp_user", async ({ login }) => {
        await test.step('To verify user navigate to signup url', async () => {
            await login.caliberAppInitialize();
        });
        await test.step('TC_010 To verify view signUp page', async () => {
            await login.validateSignUpPage();
        });
        await test.step('TC_005,TC_011,TC_012,TC_013 To verify user can give invalid user for forgot password', async () => {
            await login.forgotPasswordForUser(testData.invalidUser);
            await login.validateforgotUI();
            await login.errorMessageForget(testData.forgotErrorMessage);
            await login.closepop();
        });
        await test.step('TC_006 To verify user can give valid user for forgot password', async () => {
            await login.forgotPasswordForUser(environment.vpuser);
            await login.successMessageForget(testData.forgetSuccessMessage);
        });
        await test.step('TC_001,TC_009 To verify user cannot login into caliber with valid username and invalid password', async () => {
            await login.clickSignUpBtn();
            await login.caliberlogin(environment.trainer, testData.invalidpassword, false);
            await login.error(testData.loginErrorMessage);
        });
        await test.step('TC_002 To verify user cannot login into caliber with invalid username and valid password', async () => {
            await login.caliberlogin(testData.invalidUser, environment.password, false);
            await login.error(testData.loginErrorMessage);
        });
        await test.step('TC_003 To verify user cannot login into caliber with invalid username and invalid password', async () => {
            await login.caliberlogin(testData.invalidUser, testData.invalidpassword, false);
            await login.error(testData.loginErrorMessage);
        });
        await test.step('TC_004 To verify user can login into caliber with valid username and valid password', async () => {
            await login.caliberlogin(environment.vpuser, environment.password, true);
        });
        await test.step('To verify user can able to view all menus', async () => {
            await login.validationCaliberVPPage();
        });
        await test.step('Logout from vp_users', async () => {
            await login.caliberlogout();
        });
    });
    test("login as trainer", async ({ login }) => {
        await test.step('To verify user navigate to signup url', async () => {
            await login.caliberAppInitialize();
        });
        await test.step('To verify view signUp page', async () => {
            await login.validateSignUpPage();
        });
        await test.step('TC_002 To verify user can give valid user for forgot password', async () => {
            await login.forgotPasswordForUser(environment.trainer);
            await login.successMessageForget(testData.forgetSuccessMessage);
        });
        await test.step('TC_001 To verify user can login into caliber with valid username and valid password', async () => {
            await login.clickSignUpBtn();
            await login.caliberlogin(environment.trainer, environment.password, true);
        });
        await test.step('To verify user can able to view all menus', async () => {
            await login.validationCaliberTrainerPage();
        });
        await test.step('Logout from vp_users', async () => {
            await login.caliberlogout();
        });
    });
    test("login as QC_user", async ({ login }) => {
        await test.step('To verify user navigate to signup url', async () => {
            await login.caliberAppInitialize();
        });
        await test.step('To verify view signUp page', async () => {
            await login.validateSignUpPage();
        });
        await test.step('TC_002 To verify user can give valid user for forgot password', async () => {
            await login.forgotPasswordForUser(environment.caliberQc);
            await login.successMessageForget(testData.forgetSuccessMessage);
        });
        await test.step('TC_001 To verify user can login into caliber with valid username and valid password', async () => {
            await login.clickSignUpBtn();
            await login.caliberlogin(environment.caliberQc, environment.password, true);
        });
        await test.step('To verify user can able to view all menus', async () => {
            await login.validationCaliberQCPage();
        });
        await test.step('Logout from vp_users', async () => {
            await login.caliberlogout();
        });
    });
});