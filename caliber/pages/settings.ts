import { expect, Locator, Page } from "@playwright/test";
import { WebActions } from "../lib/WebElementAction";

export class SettingsMenu extends WebActions {
    readonly page: Page;
    revatureLogo: Locator;
    homeMenu: Locator;
    settingsMenu: Locator;
    trainers: Locator;
    location: Locator;
    category: Locator;
    nameColumn: Locator;
    emailColumn: Locator;
    locationColumn: Locator;
    officeNameColumn: Locator;
    activeCategoryColumn: Locator;
    staleCategoryColumn: Locator;
    clickAddAssessmentCategory: Locator;
    addAssessmentCategoryPopupTitle: Locator;
    enterCategoryName: Locator;
    addCategoryButton: Locator;
    successMsg: Locator;
    closeButton: Locator;
    clickEditAssessmentCategory: Locator;
    editAssessmentCategoryPopupTitle: Locator;
    selectAssessmentCategory: Locator;
    updateCategoryName: Locator;
    saveButtonInPopup: Locator;
    closeButtonInPopup: Locator;
    clickYesActiveCategoryPopup: Locator;
    clickNoActiveCategoryPopup: Locator;
    clickYesStaleCategoryPopup: Locator;
    clickNoStaleCategoryPopup: Locator;
    successToastMsg: Locator;
    pdp: Locator;
    pdpSettings: Locator;
    softSkill: Locator;
    softSkillGroups: Locator;
    skillTemplates: Locator;
    touchPointTemplete: Locator;
    createNewBtn: Locator;
    softSkillColumn: Locator;
    softSkillGroupsColumn: Locator;
    gradesColumn: Locator;
    actions: Locator;
    editSkill: Locator;
    deleteSkill: Locator;
    softSkillName: Locator;
    skillHeadersColumn: Locator;
    skillDescription: Locator;
    skillPoints: Locator;
    addGrades: Locator;
    deleteGrades: Locator;
    createSkillheader: Locator;
    closeSkill: Locator;
    cancel: Locator;
    save: Locator;
    createSkillGroup: Locator;
    softSkillGroupName: Locator;
    softSkillDescription: Locator;
    softSkillGroupDescription: Locator;
    softSkillGroupEdit: Locator;
    softSkillGroupDelete: Locator;
    softSkillGroupDropDown: Locator;
    softSkillGroupDropDownCheck: Locator;
    skillTemplatesCreateBtn: Locator;
    skillTempleteHeader: Locator;
    skillTempleteRole: Locator;
    skillTempleteAction: Locator;
    skillTempleteEdit: Locator;
    skillTempleteDelete: Locator;
    softSkillDelete: Locator;
    softSkillCancel: Locator;
    softSkillSave: Locator;
    closeSkillTemplete: Locator;
    roleDropDown: Locator;
    selectRole: Locator;
    touchPointTempleteHeader: Locator;
    skillTemplateActions: Locator;
    touchPointTempEdit: Locator;
    activeAndDeActivate: Locator;
    touchPointTemplateNameInput: Locator;
    weeksDuration: Locator;
    touchTempAdd: Locator;
    touchTempCancel: Locator;
    touchTempSave: Locator;
    enterTouchpointName: Locator;
    addweek: Locator;
    selectskillTemplatesBtn: Locator;
    touchPointDelete: Locator;
    closeTouchTemplete: Locator;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.settingMenuLocators()
    }
    settingMenuLocators() {

        //Settings Drop-down
        this.revatureLogo = this.page.locator("img[alt='revature']");
        this.homeMenu = this.page.locator("text=Home");
        this.settingsMenu = this.page.locator("text=Settings");
        this.trainers = this.page.locator("#trainers-link");
        this.location = this.page.locator("#location-link");
        this.category = this.page.locator("#category-link");
        this.pdp = this.page.locator("#pdp-link");

        //Trainers Detail page
        this.nameColumn = this.page.locator("//th[text()='Name']");
        this.emailColumn = this.page.locator("//th[text()='Email']");

        //Location page
        this.locationColumn = this.page.locator("th:has-text('Location')");
        this.officeNameColumn = this.page.locator("text=Office Name");

        //Category page
        this.activeCategoryColumn = this.page.locator("//h3[text()='Active Categories']");
        this.staleCategoryColumn = this.page.locator("//h3[text()='Stale Categories']");

        //add assessment category
        this.clickAddAssessmentCategory = this.page.locator("//a[contains(.,'Add Assessment Category')]");
        this.addAssessmentCategoryPopupTitle = this.page.locator("//h4[text()='Add Assessment Category ']");
        this.enterCategoryName = this.page.locator("(//div[@class='modal-body']//input)[1]");
        this.addCategoryButton = this.page.locator("//button[text()='Add Category']");
        this.successMsg = this.page.locator("(//span[@class='ng-star-inserted'])[1]");
        this.closeButton = this.page.locator("(//h4[text()='Add Assessment Category ']/following::button[text()='Close'])[1]");

        //edit assessment category
        this.clickEditAssessmentCategory = this.page.locator("li[role='button']:has-text('Edit Assessment Category')");
        this.editAssessmentCategoryPopupTitle = this.page.locator("//h4[text()='Edit Assessment Category']");
        this.selectAssessmentCategory = this.page.locator("#selectedCategory");
        this.updateCategoryName = this.page.locator("//div[contains(@class,'form-group col-lg-12')]//input[1]");
        this.saveButtonInPopup = this.page.locator("//button[text()='Save']");
        this.closeButtonInPopup = this.page.locator("(//button[text()='Close'])[2]");

        //active/inactive assessment category
        this.clickYesActiveCategoryPopup = this.page.locator("(//button[text()='YES'])[1]");
        this.clickNoActiveCategoryPopup = this.page.locator("(//button[text()='NO'])[1]");
        this.clickYesStaleCategoryPopup = this.page.locator("(//button[text()='YES'])[2]");
        this.clickNoStaleCategoryPopup = this.page.locator("(//button[text()='NO'])[2]");
        this.successToastMsg = this.page.locator("#toast-container");

        //pdp page
        this.pdpSettings = this.page.locator("//h2[@class='sidebar-heading text-uppercase']");
        this.softSkill = this.page.locator("//a[@routerlink='softSkill']");
        this.softSkillGroups = this.page.locator("//a[@routerlink='softSkillGroup']");
        this.skillTemplates = this.page.locator("//a[@routerlink='skillTemplate']");
        this.touchPointTemplete = this.page.locator("//a[@routerlink='touchPointTemplate']");
        this.createNewBtn = this.page.locator("//button[normalize-space(text())='CREATE NEW']");

        //softSkill
        this.softSkillColumn = this.page.locator("//th[text()='SOFT SKILL']");
        this.softSkillGroupsColumn = this.page.locator("//th[text()='SOFT SKILL GROUP']");
        this.gradesColumn = this.page.locator("//th[text()='GRADES']");
        this.actions = this.page.locator("//th[text()='ACTIONS']");
        this.editSkill = this.page.locator("(//a[@title='Edit'])");
        this.deleteSkill = this.page.locator("(//a[@title='Delete'])");
        this.softSkillName = this.page.locator('#softSkill.name');
        this.skillHeadersColumn = this.page.locator("//table[@class='table table-responsive']//th");
        this.skillDescription = this.page.locator("(//textarea[@placeholder='Add a Description'])");
        this.skillPoints = this.page.locator("(//input[@type='number'])");
        this.addGrades = this.page.locator("//button[text()='Add Grades']");
        this.deleteGrades = this.page.locator("(//a[@container='false']//span)");
        this.createSkillheader = this.page.locator("//h4[text()=' CREATE SOFT SKILL ']");
        this.closeSkill = this.page.locator("(//span[text()='×'])[2]");
        this.cancel = this.page.locator("//button[text()='CANCEL']");
        this.save = this.page.locator("//button[@type='submit']");

        //Soft skill group
        this.createSkillGroup = this.page.locator("//button[text()='CREATE NEW']");
        this.softSkillGroupName = this.page.locator("#softSkillGroup.name");
        this.softSkillGroupDescription = this.page.locator("#softSkillGroup.description");
        this.softSkillGroupEdit = this.page.locator("(//a[@title='Edit'])");
        this.softSkillGroupDelete = this.page.locator("(//a[@title='Delete'])");
        this.softSkillGroupDropDown = this.page.locator("(//button[@id='dropdownMenuButton'])[1]");
        this.softSkillGroupDropDownCheck = this.page.locator("(//li[@class='dropdown-item ng-star-inserted']//a)");
        //soft skill templete
        this.skillTemplatesCreateBtn = this.page.locator("#addSkillTemplateBtn");
        this.skillTempleteHeader = this.page.locator("#skillTemplateName");
        this.skillTempleteRole = this.page.locator("#skillTemplateRole");
        this.skillTempleteAction = this.page.locator("#skillTemplateActions");
        this.skillTempleteEdit = this.page.locator("(//a[@id='SkillTempEdit'])");
        this.skillTempleteDelete = this.page.locator("(//a[@id='SkillTempDelt'])");
        this.softSkillDelete = this.page.locator('#softSkillDelt');
        this.softSkillCancel = this.page.locator("#skillTempCancel");
        this.softSkillSave = this.page.locator("#skillTempSave");
        this.closeSkillTemplete = this.page.locator("(//span[text()='×'])[1]");
        this.roleDropDown = this.page.locator("(//button[contains(@class,'dropdown-toggle waves-light')])[2]");
        this.selectRole = this.page.locator("(//li[@role='button']//a)");
        //Touch point Templete
        this.touchPointTempleteHeader = this.page.locator('#skillTemplateName');
        this.skillTemplateActions = this.page.locator("#skillTemplateActions");
        this.touchPointTempEdit = this.page.locator("(//a[@id='TouchPointTempEdit'])");
        this.activeAndDeActivate = this.page.locator("(//button[@title='Click to deactivate'])");
        this.touchPointTemplateNameInput = this.page.locator("#touchPointTemplateNameInput");
        this.weeksDuration = this.page.locator("#weeksDuration");
        this.touchTempAdd = this.page.locator("#touchTempAdd");
        this.touchTempCancel = this.page.locator("#touchTempCancel");
        this.touchTempSave = this.page.locator("#touchTempSave");
        this.enterTouchpointName = this.page.locator("//input[@placeholder='Enter Touchpoint Name']");
        this.addweek = this.page.locator("(//input[@type='checkbox'])");
        this.selectskillTemplatesBtn = this.page.locator("(//button[@id='dropdownMenuButton'])");
        this.touchPointDelete = this.page.locator("(//a[@id='touchPointTempDelt']//span)");
        this.closeTouchTemplete = this.page.locator("(//span[text()='×'])[1]");
    }


    async clickSettingsDropDown(vp) {
        await this.assertTrue(this.settingsMenu);
        await this.clickElement(this.settingsMenu);
        if (vp) {
            await this.assertTrue(this.trainers);
            await this.assertTrue(this.location);
            await this.assertTrue(this.category);
            await this.assertTrue(this.pdp);
        } else {
            await this.assertTrue(this.category);
        }
    }
    async clickSettingsMenu() {
        this.delay(2000);
        await this.waitForLocator(this.settingsMenu);
        await this.clickElement(this.settingsMenu);
    }
    async trainersDetailPage(trainerName: string) {
        await this.clickSettingsMenu();
        await this.clickElement(this.trainers);
        await this.clickSettingsMenu();
        await this.assertPageUrl("https://caliber2-staging.revaturelabs.com/trainers");
        await this.assertTrue(this.nameColumn);
        await this.assertTrue(this.emailColumn);
        let trainer = this.page.locator("//td[text()='" + trainerName + "']");
        await trainer.scrollIntoViewIfNeeded()
        await this.waitForLocator(trainer);
        await this.assertTrue(trainer);
    }
    async locationDetailPage(locationName, officeName) {
        await this.clickSettingsMenu();
        await this.clickElement(this.location);
        await this.assertPageUrl("https://caliber2-staging.revaturelabs.com/locations");
        await this.assertTrue(this.locationColumn);
        await this.assertTrue(this.officeNameColumn);
        // await this.clickSettingsMenu();
        let location = this.page.locator("(//td[text()='" + locationName + "'])[1]");
        let office = this.page.locator("(//td[text()='" + officeName + "'])[1]");
        await this.waitForLocator(location);
        await this.assertTrue(location);
        await this.waitForLocator(office);
        await this.assertTrue(office);
    }
    async categoryDetailPage() {
        await this.clickSettingsMenu();
        await this.clickElement(this.category);
        // await this.clickSettingsMenu();
        await this.assertPageUrl("https://caliber2-staging.revaturelabs.com/category");
        await this.assertTrue(this.activeCategoryColumn);
        await this.assertTrue(this.staleCategoryColumn);
    }
    async addAssessmentCategory(categoryName) {
        await this.clickElement(this.clickAddAssessmentCategory);
        // this.delay(2000);
        await this.waitForLocator(this.addAssessmentCategoryPopupTitle);
        await this.assertTrue(this.addAssessmentCategoryPopupTitle);
        await this.clearAndType(this.enterCategoryName, categoryName);
        await this.log(categoryName);
        await this.clickElement(this.addCategoryButton);
        await this.waitForLocator(this.successMsg);
        await this.assertTrue(this.successMsg);
        await this.clickElement(this.closeButton);
        let activeCategory = this.page.locator("//h3[text()='Active Categories']/following::span[text()=' " + categoryName + " ']");
        await this.waitForLocator(activeCategory);
        await this.assertTrue(activeCategory);
    }
    async editAssessmentCategory(categoryName, updateCategoryName) {
        await this.clickElement(this.clickEditAssessmentCategory);
        await this.waitForLocator(this.editAssessmentCategoryPopupTitle);
        await this.assertTrue(this.editAssessmentCategoryPopupTitle);
        await this.clickElement(this.selectAssessmentCategory);
        await this.typeAndEnter(this.selectAssessmentCategory, categoryName);
        await this.typeAndEnter(this.updateCategoryName, updateCategoryName);
        await this.log(updateCategoryName);
        await this.clickElement(this.saveButtonInPopup);
        await this.clickElement(this.closeButtonInPopup);
    }
    async deActivateCategory(categoryName) {
        let category = this.page.locator("//h3[text()='Active Categories']/following::span[text()=' " + categoryName + " ']");
        await this.clickElement(category);
        await this.clickElement(this.clickYesActiveCategoryPopup);
        await this.assertText(this.successToastMsg, "Category updated successfully");
    }
    async activateCategory(categoryName) {
        let category = this.page.locator("//h3[text()='Stale Categories']/following::span[text()=' " + categoryName + " ']");
        await this.clickElement(category);
        await this.clickElement(this.clickYesStaleCategoryPopup);
    }
    async selectPdpMenu() {
        await this.assertTrue(this.settingsMenu);
        await this.clickElement(this.settingsMenu);
        await this.waitForLocator(this.pdp);
        await this.clickElement(this.pdp);
    }
    async clickSoftSkill() {
        await this.waitForLocator(this.softSkill);
        await this.clickElement(this.softSkill);
    }
    async clicksoftSkillGroups() {
        await this.waitForLocator(this.softSkillGroups);
        await this.clickElement(this.softSkillGroups);
    }
    async clickskillTemplates() {
        await this.waitForLocator(this.skillTemplates);
        await this.clickElement(this.skillTemplates);
    }
    async clicktouchPointTemplete() {
        await this.waitForLocator(this.touchPointTemplete);
        await this.clickElement(this.touchPointTemplete);
    }
    async assertAllPdPheaders() {
        await this.assertTrue(this.softSkill);
        await this.assertTrue(this.softSkillGroups);
        await this.assertTrue(this.skillTemplates);
        await this.assertTrue(this.touchPointTemplete);
    }
    async assertSoftSkillHeaders() {
        await this.assertTrue(this.softSkillColumn);
        await this.assertTrue(this.softSkillGroupsColumn);
        await this.assertTrue(this.gradesColumn);
        await this.assertTrue(this.actions);
        await this.assertTrue(this.editSkill.nth(1));
        await this.assertTrue(this.deleteSkill.nth(1));
    };
    async
}