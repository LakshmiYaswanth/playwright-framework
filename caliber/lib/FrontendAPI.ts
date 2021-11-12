import { Locator, Page } from "@playwright/test";
import axios from 'axios';
import { environment } from "./Environment";
import { Utils } from "./utils";
import { WebActions } from "./webElementAction";
var data = require("../utils/test-data/test-data.json");
var faker = require('faker');
let BaseUrl = environment.baseURL;
let lastName: string;
let firstName: string;
let aliasName = data.testData.signup.aliasName;
let contactNo = data.testData.signup.contactNo;
let ActivationBaseUrl = BaseUrl + "/activate/";
let tokenAPI = environment.tokenAPI;
let normalAPI = environment.normalAPI;
let signupAPI = environment.signupAPI;
let _keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const utilsPage = new Utils()
export class SignUpUsingApi extends WebActions {
    readonly page: Page;
    firstname: Locator;
    mobile: Locator;
    password: Locator;
    termsAndConditions: Locator;
    activateButton: Locator;
    showPassword: Locator;
    invitationCode: Locator;
    submitCode: Locator;
    fullName: Locator;
    emailId: Locator;
    mobileNo: Locator;
    signupButton: Locator;
    invalidEmailError: Locator;
    existingEmailError: Locator;
    fullNameMandatoryError: Locator;
    emailMandatoryError: Locator;
    welcomeMessage: Locator;
    lastname: Locator;
    constructor(page: Page) {
        super(page)
        this.page = page;
        this.frontendSignUpAPI()
    }
    frontendSignUpAPI() {
        this.firstname = this.page.locator("#firstname");
        this.mobile = this.page.locator("#contactNo");
        this.password = this.page.locator("#password");
        this.termsAndConditions = this.page.locator("#checkboxAgreement");
        this.activateButton = this.page.locator("#userActivateBtn");
        this.showPassword = this.page.locator("#showPwd");
        this.invitationCode = this.page.locator("#coupon_code");
        this.submitCode = this.page.locator('[ng-clickElement="verifyCoupon()"]');
        this.fullName = this.page.locator("#signupFullname");
        this.emailId = this.page.locator("#signupEmail");
        this.mobileNo = this.page.locator("#signupContactNo");
        this.signupButton = this.page.locator('[ng-clickElement="createUser();Formreset();submitted=true"]');
        this.invalidEmailError = this.page.locator(".//*[@id='content']/div/div/div[1]/div[2]/div[2]/div[3]/form/div[3]/span/span[2]/span");
        this.existingEmailError = this.page.locator(".//*[@id='content']/div/div/div[1]/div[2]/div[2]/h5[2]");
        this.fullNameMandatoryError = this.page.locator("id('content')/div/div/div[1]/div[2]/div[2]/div[3]/form/div[1]/span/span[1]/span");
        this.emailMandatoryError = this.page.locator("id('content')/div/div/div[1]/div[2]/div[2]/div[3]/form/div[3]/span/span[1]/span");
        this.welcomeMessage = this.page.locator("id('step0')/div[1]/p[2]");
        this.lastname = this.page.locator("#lastname");
    }
    public async userSignupAndActivationwithEncryptedValue() {
        let email = utilsPage.getRandomEmail();
        firstName = faker.name.firstName();
        lastName = faker.name.lastName();
        let status = await this.createUserWithEncryptedKey(
            '"' +
            "firstName" +
            '"' +
            ":" +
            '"' +
            firstName +
            '"' +
            "," +
            '"' +
            "lastName" +
            '"' +
            ":" +
            '"' +
            lastName +
            '"' +
            "," +
            '"' +
            "email" +
            '"' +
            ":" +
            '"' +
            email +
            '"' +
            "," +
            '"' +
            "aliasName" +
            '"' +
            ":" +
            '"' +
            aliasName +
            '"' +
            "," +
            '"' +
            "contactNo" +
            '"' +
            ":" +
            '"' +
            contactNo +
            '"'
        );
        if (status == 200) {
            if (environment.DEBUG) {

                console.log("The result of user signup is: " + status);
            }
            let activationKey = await this.getActivationToken('"' + "email" + '"' + ":" + '"' + email + '"');

            var activationUrl = ActivationBaseUrl + activationKey;
            if (environment.DEBUG) {
                console.log(activationUrl);
            }
            await this.navigateToURL(activationUrl);
            await this.createPasswordforNormalSignup();

        }
    }
    public async userSignupAndActivation() {
        let email = utilsPage.getRandomEmail();
        firstName = faker.name.firstName();
        lastName = faker.name.lastName();
        if (aliasName == "REV") {
            let status = await this.createUsers(
                '"' +
                "firstName" +
                '"' +
                ":" +
                '"' +
                firstName +
                '",' +
                '"' +
                "lastName" +
                '"' +
                ":" +
                '"' +
                lastName +
                '",' +
                '"' +
                "email" +
                '"' +
                ":" +
                '"' +
                email +
                '",' +
                '"' +
                "aliasName" +
                '"' +
                ":" +
                '"' +
                aliasName +
                '",' +
                '"' +
                "contactNo" +
                '"' +
                ":" +
                '"' +
                contactNo +
                '"'
            );
            if (status == 200) {
                if (environment.DEBUG) {
                    console.log("The result of user signup is: " + status);
                }
                let activationKey = await this.getActivationToken('"' + "email" + '"' + ":" + '"' + email + '"');
                var activationUrl = ActivationBaseUrl + activationKey;
                if (environment.DEBUG) {
                    console.log(activationUrl);
                }
                await this.navigateToURL(activationUrl);
                await this.createPassword();
                //DashboardPage.userActivityAfterActivation();
            }

        }
    }
    //1. the Full name, Email, Contact Number entered is displayed in Profile Menu
    public async userSignupAndActivationWithEmail(emailId: string) {
        firstName = faker.name.firstName();
        lastName = faker.name.lastName();
        if (aliasName == "REV") {
            let email = emailId;
            let status = await this.createUsers(
                '"' +
                "firstName" +
                '"' +
                ":" +
                '"' +
                firstName +
                '",' +
                '"' +
                "lastName" +
                '"' +
                ":" +
                '"' +
                lastName +
                '",' +
                '"' +
                "email" +
                '"' +
                ":" +
                '"' +
                email +
                '",' +
                '"' +
                "aliasName" +
                '"' +
                ":" +
                '"' +
                aliasName +
                '",' +
                '"' +
                "contactNo" +
                '"' +
                ":" +
                '"' +
                contactNo +
                '"'
            )
            if (status == 200) {
                if (environment.DEBUG) {
                    console.log("The defered result of user signup is: " + status);
                }
                let activationKey = await this.getActivationToken('"' + "email" + '"' + ":" + '"' + email + '"');
                let activationUrl = ActivationBaseUrl + activationKey;
                if (environment.DEBUG) {
                    console.log(activationUrl);
                }
                await this.navigateToURL(activationUrl);
                await this.createPassword();
            }
        }
    }
    public async createUsers(body: string) {
        var data = "{" + body + "}";
        let response;
        const req = await axios
            .post(signupAPI, data, {
                headers: {
                    "content-type": "application/json",
                    "publicSignupKey": "rcrct4rpjyq9n4dvDytAaHdydb3atOdc"
                }
            });
        try {
            response = req.status;
            if (environment.DEBUG) {
                console.log("CreateUsers post response = ", response);
            }
            return response;
        }
        catch (error) {
            if (environment.DEBUG) {
                console.log("CreateUsers post error= ", error);
            }
            return error;
        }

    }
    public async createUserWithEncryptedKey(body: string) {
        var data = "{" + body + "}";
        let response: number;
        var key = base64.EncryptToken(data);
        if (environment.DEBUG) {
            console.log(key);
        }
        if (environment.DEBUG) {
            console.log(normalAPI);
        }
        if (environment.DEBUG) {
            console.log("Send data in post request = ", data);
        }

        const req = await axios.post(normalAPI, key, {
            headers: {
                "content-type": "application/json"
            }
        });
        try {
            response = req.status;
            if (environment.DEBUG) {
                console.log("CreateUsers post response = ", response);
            }
            return response;
        }
        catch (error) {
            if (environment.DEBUG) {
                console.log("CreateUsers post error= ", error);
            }
            return error;
        }
    }
    public async getActivationToken(body: string) {
        var data = "{" + body + "}";
        if (environment.DEBUG) {
            console.log(tokenAPI);
            console.log("Send data in post request = ", data);
        }
        const request = await axios.post(tokenAPI, data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        try {
            if (environment.DEBUG) {
                console.log("Activation Token= ", request.data.data.token);
            }
            return request.data.data.token;
        }
        catch (error) {
            if (environment.DEBUG) {
                console.log("UserDetails post error= ", error);
            }
            return error;
        }
    }
    public async termsAndConditionsExits() {
        let deletes: any = await this.termsAndConditions.count();
        if (deletes > 0) {
            await this.clickElement(this.termsAndConditions);
        } else {
            console.log('No terms And Conditions');
        }
    }
    public async createPassword() {
        await this.waitForLocator(this.password);
        await this.delay(6000);
        await this.fillText(this.password, data.testData.signup.password);
        await this.termsAndConditionsExits();
        await this.clickWithNavigation(this.activateButton);
    }
    //Create password for normal signup using encrypted key method
    public async createPasswordforNormalSignup() {
        await this.fillText(this.mobile, data.testData.signup.contactNo);
        await this.delay(1000);
        await this.fillText(this.password, data.testData.signup.password);
        await this.delay(1000);
        await this.termsAndConditionsExits();
        await this.clickWithNavigation(this.activateButton);
    }

}

export class base64 {
    public static _utf8_encode = (string: string) => {
        string = string ? string.toString().replace(/\r\n/g, "\n") : "";
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };

    public static EncryptToken(input: string) {
        var output = "";
        var chr1: number,
            chr2: number,
            chr3: number,
            enc1: number,
            enc2: number,
            enc3: number,
            enc4: number;
        var i = 0;
        input = this._utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output =
                output +
                _keyStr.charAt(enc1) +
                _keyStr.charAt(enc2) +
                _keyStr.charAt(enc3) +
                _keyStr.charAt(enc4);
        }
        return output;
    }
}