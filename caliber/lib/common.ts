import { expect, Locator, Page } from "@playwright/test";
import { environment } from "./environment";
import { WebActions } from "./webElementAction";
const fs = require("fs");
export class Common extends WebActions {
  readonly page: Page;
  settings: Locator;
  coreUserName: Locator;
  corePassword: Locator;
  coreLoginBtn: Locator;
  loginEmail: Locator;
  loginPass: Locator;
  loginBtn: Locator;
  profiledropDown: Locator;
  logout: Locator;
  trainingMenu: Locator;
  adminMenu: Locator;
  librarymenu: Locator;
  profile: Locator;
  logoutCore: Locator;
  avatarNewUi: Locator;
  logoutNewUi: Locator;
  curriculumMapping: Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.commonPageLocator();
  }
  commonPageLocator() {
    this.settings = this.page.locator("//span[text()='Settings']");
    this.coreUserName = this.page.locator("(//input[@placeholder='Username'])[1]");
    this.corePassword = this.page.locator("//input[@placeholder='Password']");
    this.coreLoginBtn = this.page.locator("//a[text()[normalize-space()='Login']]");
    this.loginEmail = this.page.locator('#loginEmail');
    this.loginPass = this.page.locator('#loginPassword');
    this.loginBtn = this.page.locator('[ng-click="logIn()"]');
    this.profiledropDown = this.page.locator("//li[@id='user-drop']/a");
    this.logout = this.page.locator('[ng-click="logout(); "]');
    this.trainingMenu = this.page.locator('a[role="button"]:has-text("Training")');
    this.adminMenu = this.page.locator('a[role="button"]:has-text("Admin")');
    this.librarymenu = this.page.locator('a[role="button"]:has-text("Library")');
    this.profile = this.page.locator("//span[@class='user-info']//span[1]");
    this.logoutCore = this.page.locator("#mainFormMenu:log-out-BTN");
    this.avatarNewUi = this.page.locator("#navBarAvatar");
    this.logoutNewUi = this.page.locator("#navBarLogoutLi");
    this.curriculumMapping = this.page.locator("//span[text()='Curriculum mapping']");
  }


  /**
   * @description Initializing the application for Core and Front-End
   */
  public async coreAppInitialize() {
    await this.navigateToURL(environment.coreURL);
  }

  public async FTAppInitialize() {
    await this.navigateToURL(environment.baseURL);
  }

  async enterCoreUsername(username: string) {
    await this.fillText(this.coreUserName, username);
  }
  public async enterCorePassword(pass: string) {
    await this.fillText(this.corePassword, pass);
  }
  public async clickCoreLogin() {
    await this.clickWithNavigation(this.coreLoginBtn);
  }
  public async enterFTUsername(username: string) {
    await this.fillText(this.loginEmail, username);
  }
  public async enterFTPassword(pass: string) {
    await this.fillText(this.loginPass, pass);
  }
  public async clickFTLogin() {
    await this.clickWithNavigation(this.loginBtn);
  }
  clickFTUser() {
    let user = (this.profiledropDown);
    return user;
  }
  clickFTLogout() {
    return (this.logout);
  }
  /**
   *
   * @param userName - frontEnd username {use loginCredential.json}
   * @param password - frontEnd password {use loginCredential.json}
   */
  public async loginIntoFrontEnd(userName: string, password: string) {
    await this.navigateToURL(environment.baseURL);
    await this.enterFTUsername(userName);
    await this.enterFTPassword(password);
    await this.clickFTLogin();
  }

  public async logOutFromFrontEnd() {
    await this.clickElement(this.clickFTUser());
    await this.clickElement(this.clickFTLogout());
  }
  public async loginIntoCore(userName: string, password: string) {
    await this.enterCoreUsername(userName);
    await this.enterCorePassword(password);
    await this.clickCoreLogin();
  }
  public async logOutFromCore() {
    await this.clickElement(this.profile);
    await this.clickElement(this.logoutCore);
  }
  public async clickTrainingMenu() {
    await this.clickElement(this.trainingMenu);
  };
  public async clickLibraryMenu() {
    await this.page.mouse.down();
    await this.clickElement(this.librarymenu);
  }
  public async clickAdminMenu() {
    await this.page.mouse.down();
    await this.clickElement(this.adminMenu);
  }
  public async clickAvatar() {
    await this.clickElement(this.avatarNewUi);
  }
  public async clicklogoutNewUI() {
    await this.clickAvatar();
    await this.clickElement(this.logoutNewUi);
  }
  public async clickCurriculumMapping() {
    await this.clickWithNavigation(this.curriculumMapping);
  }
  public async settingsMenu() {
    await this.clickWithNavigation(this.settings);
  }
  ftCurriculumData = {
    curriculumName: [],
    curriculumNameDefault: [],
    batchName: [],
    userName: [],
  };
  setFtCurriculumData(type: string, data: string) {
    switch (type) {
      case "batchName":
        this.ftCurriculumData.batchName.push(data);
        break;
      case "userName":
        this.ftCurriculumData.userName.push(data);
        break;
    }
    var json = JSON.stringify(this.ftCurriculumData);
    fs.writeFileSync("utils/test-data/ft-curriculum-data.json", json, {
      mode: 0o666,
    });
    console.log("1. the file has been updated");
  }

}
