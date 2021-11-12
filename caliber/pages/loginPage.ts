
import { Locator, Page } from "@playwright/test";
import { environment } from "../lib/environment";
import { WebActions } from "../lib/webElementAction";
export class LoginPage extends WebActions {
    readonly page: Page;
    signupHeader: Locator;
    signUpImg: Locator;
    signUpBtn: Locator;
    forgotPassword: Locator;
    userName: Locator;
    password: Locator;
    remember: Locator;
    signIn: Locator;
    errorMessage: Locator;
    logout: Locator;
    logoutYes: Locator;
    forgetUser: Locator;
    logoutNo: Locator;
    settingMenu: Locator;
    reportMenu: Locator;
    qualityAuditMenu: Locator;
    assessLink: Locator;
    cloud: Locator;
    manageBatchMenu: Locator;
    homeMenu: Locator;
    submit: Locator;
    forgetclose: Locator;
    forgotSuccessMessage: Locator;
    userNotAvailble: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.loginLocators();
    }

    loginLocators() {
        this.signupHeader = this.page.locator('text=Sign In Required');
        this.signUpImg = this.page.locator('text=You must sign in to continueSign In >> img');
        this.signUpBtn = this.page.locator('//button[@class="btn button btn-block"]');
        this.forgotPassword = this.page.locator('text=Forgot Password?');
        this.userName = this.page.locator('input[name="username"]');
        this.password = this.page.locator('input[name="password"]');
        this.remember = this.page.locator('input[name="chkRemember"]');
        this.signIn = this.page.locator('button:has-text("Sign In")');
        this.errorMessage = this.page.locator('//div[@id="error-msg"]');
        this.logout = this.page.locator('text=Sign Out');
        this.logoutYes = this.page.locator('text=Yes');
        this.forgetUser = this.page.locator('#username');
        this.logoutNo = this.page.locator('text=No');
        this.settingMenu = this.page.locator('text=Settings');
        this.reportMenu = this.page.locator('#reports-link');
        this.qualityAuditMenu = this.page.locator('#quality-link');
        this.assessLink = this.page.locator('//a[@id="assess-link"]');
        this.cloud = this.page.locator('//a[@id="cloud-resources-link"]');
        this.manageBatchMenu = this.page.locator('#manage-link');
        this.homeMenu = this.page.locator('#home-link');
        this.submit = this.page.locator('//button[@type="submit"]');
        this.forgetclose = this.page.locator('//button[@aria-label="Close"]');
        this.forgotSuccessMessage = this.page.locator('//div[@id="toast-container"]');
        this.userNotAvailble = this.page.locator('//*[@class="text-danger ng-star-inserted"]');
    }
    public async caliberAppInitialize() {
        await this.navigateToURL(environment.caliberUrl);
        await this.delay(10000);
    };
    public async closepop() {
        await this.waitForLocator(this.forgetclose)
        await this.clickElement(this.forgetclose)
    }
    public async successMessageForget(text: string) {
        await this.waitForLocator(this.forgotSuccessMessage);
        await this.assertText(this.forgotSuccessMessage, text)
    }
    public async errorMessageForget(text: string) {
        await this.waitForLocator(this.userNotAvailble);
        await this.assertText(this.userNotAvailble, text)
    }
    public async validateforgotUI() {
        await this.assertTrue(this.forgetUser);
        await this.assertTrue(this.submit);
        await this.assertTrue(this.forgetclose);
    }
    public async forgotPasswordForUser(user: any) {
        await this.waitForLocator(this.forgotPassword);
        await this.clickElement(this.forgotPassword);
        await this.fillText(this.forgetUser, user);
        await this.clickElement(this.submit);

    }
    public async validateSignUpPage() {
        await this.assertTrue(this.signupHeader);
        await this.assertTrue(this.signUpImg);
        await this.assertTrue(this.signUpBtn);
        await this.assertTrue(this.forgotPassword);
    };
    public async clickSignUpBtn() {
        await this.waitForLocator(this.signUpBtn);
        await this.clickWithNavigation(this.signUpBtn);
    };
    public async typeUserName(userName: any) {
        await this.waitForLocator(this.userName);
        await this.fillText(this.userName, userName);
    };
    public async typePassword(password: any) {
        await this.waitForLocator(this.password);
        await this.fillText(this.password, password);
    };
    public async clickLoginBtn() {
        await this.waitForLocator(this.signIn);
        await this.clickWithNavigation(this.signIn);
    };
    public async error(text: string) {
        await this.waitForLocator(this.errorMessage);
        await this.assertText(this.errorMessage, text)
    };
    public async caliberlogin(user: any, pass: any, con: any) {
        await this.typeUserName(user);
        await this.typePassword(pass);
        if (con) {
            await this.remember.check();
        } else {
            await this.remember.uncheck()
        }
        await this.clickLoginBtn();
        await this.delay(4000);
    };
    public async validationCaliberVPPage() {
        await this.page.waitForLoadState('networkidle');
        await this.assertTrue(this.homeMenu);
        await this.assertTrue(this.manageBatchMenu);
        await this.assertTrue(this.settingMenu);
        await this.assertTrue(this.assessLink);
        await this.assertTrue(this.qualityAuditMenu);
        await this.assertTrue(this.reportMenu);
        await this.assertTrue(this.logout);
    };
    public async validationCaliberQCPage() {
        await this.page.waitForLoadState('networkidle');
        await this.assertTrue(this.homeMenu);
        await this.assertTrue(this.manageBatchMenu);
        await this.assertTrue(this.settingMenu);
        await this.assertTrue(this.cloud);
        await this.assertTrue(this.qualityAuditMenu);
        await this.assertTrue(this.reportMenu);
        await this.assertTrue(this.logout);
    };
    public async validationCaliberTrainerPage() {
        await this.page.waitForLoadState('networkidle');
        await this.assertTrue(this.manageBatchMenu);
        await this.assertTrue(this.cloud);
        //await this.assertTrue(this.qualityAuditMenu);
        await this.assertTrue(this.reportMenu);
        await this.assertTrue(this.logout);
    };
    public async caliberlogout() {
        await this.waitForLocator(this.logout);
        await this.clickWithNavigation(this.logout);
        await this.clickElement(this.logoutYes);
    }


}