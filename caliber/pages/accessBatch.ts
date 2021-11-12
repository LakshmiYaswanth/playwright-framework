import { expect, Locator, Page } from "@playwright/test";
import { Utils } from "../lib/utils";
import { WebActions } from "../lib/webElementAction";
const utilsPage = new Utils();
export class AccessBatchMenu extends WebActions {
    readonly page: Page;
    greenFlag: Locator;
    redFlag: Locator;
    weeks: Locator;
    selectBatch: Locator;
    batchSearch: Locator;
    selectBatchFromDrop: Locator;
    weekSync: Locator;
    lastName: Locator;
    firstName: Locator;
    notes: Locator;
    searchTrainer: Locator;
    weekNotes: Locator;
    openWeekNotes: Locator;
    weekNotesInModel: Locator;
    overAllweekNotesInModel: Locator;
    bold: Locator;
    italic: Locator;
    underline: Locator;
    orderedlist: Locator;
    bulletlist: Locator;
    header: Locator;
    cleanText: Locator;
    overAllbold: Locator;
    overAllItalic: Locator;
    overAllUnderline: Locator;
    overAllOrderedlist: Locator;
    overAllBulletlist: Locator;
    overAllheader: Locator;
    overAllCleanText: Locator;
    closeBtn: Locator;
    cancelModelNotes: Locator;
    saveModelNotes: Locator;
    overAllsaveModelNotes: Locator;
    deleteModel: Locator;
    overAllData: Locator;
    createAssignmentbtn: Locator;
    selectCategory: Locator;
    updatedCategory: Locator;
    selectAssignment: Locator;
    updatedAssignment: Locator;
    maxpoints: Locator;
    gradeScore: Locator;
    updateMaxpoints: Locator;
    editAssignment: Locator;
    createAssignment: Locator;
    updateAssignmentBtn: Locator;
    cancelcreateAssignment: Locator;
    closeCreateAssignment: Locator;
    importGrades: Locator;
    successimportGrades: Locator;
    hoverFirstName: Locator;
    editflag: Locator;
    positiveflag: Locator;
    negativeflag: Locator;
    flagComment: Locator;
    deleteFlag: Locator;
    deleteFlagDisable: Locator;
    createComment: Locator;
    updateComment: Locator;
    viewErrorComment: Locator;
    viewFlagError: Locator;
    accessBatch: Locator;
    currentRadio: Locator;
    deleteBtn: Locator;
    deleteConform: Locator;
    previousRadio: Locator;
    futureRadio: Locator;
    tableRow: Locator;
    assignmentAveragePerctage: Locator;
    totalWeekAveragePercentage: Locator;
    goBack: Locator;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.accessBatchMenuLocators()
    }
    accessBatchMenuLocators() {
        this.goBack = this.page.locator("//button[text()='Go Back']");
        this.deleteFlagDisable = this.page.locator("//button[contains(@class,'btn w-auto disabled')]");
        this.greenFlag = this.page.locator("(//em[contains(@class,'fas fa-flag green-flag')])[1]");
        this.redFlag = this.page.locator("(//em[contains(@class,'fas fa-flag red-flag')])[1]");
        this.weeks = this.page.locator("//ul[@class='nav nav-tabs']//li");
        this.selectBatch = this.page.locator("//div[@class='dropdown ng-star-inserted']//button[1]");
        this.batchSearch = this.page.locator("(//input[@type='search'])[1]");
        this.selectBatchFromDrop = this.page.locator("(//li[@role='button']//a)");
        this.weekSync = this.page.locator("//button[@id='batchCurrActivitySyncBtn']//span[1]");
        this.lastName = this.page.locator("//a[contains(.,'Last Name')]");
        this.firstName = this.page.locator("//a[contains(.,'First Name')]");
        this.notes = this.page.locator("//th[text()='Notes']");
        this.searchTrainer = this.page.locator("#searchText");
        this.weekNotes = this.page.locator("(//div[@data-placeholder='Week notes'])");
        this.openWeekNotes = this.page.locator("(//div[@class='notes-cta']//span)");
        this.weekNotesInModel = this.page.locator("(//div[@data-placeholder='Insert text here ...'])[2]");
        this.overAllweekNotesInModel = this.page.locator("(//div[@data-placeholder='Insert text here ...'])[1]");
        this.bold = this.page.locator("(//button[@class='ql-bold'])[2]");
        this.italic = this.page.locator("(//button[@class='ql-italic'])[2]");
        this.underline = this.page.locator("(//button[@class='ql-underline'])[2]");
        this.orderedlist = this.page.locator("(//button[@value='ordered'])[2]");
        this.bulletlist = this.page.locator("(//button[@value='bullet'])[2]");
        this.header = this.page.locator("(//span[@class='ql-picker-label'])[3]");
        this.cleanText = this.page.locator("(//button[@class='ql-clean'])[2]");
        this.overAllbold = this.page.locator("(//button[@class='ql-bold'])[1]");
        this.overAllItalic = this.page.locator("(//button[@class='ql-italic'])[1]");
        this.overAllUnderline = this.page.locator("(//button[@class='ql-underline'])[1]");
        this.overAllOrderedlist = this.page.locator("(//button[@value='ordered'])[1]");
        this.overAllBulletlist = this.page.locator("(//button[@value='bullet'])[1]");
        this.overAllheader = this.page.locator("(//span[@class='ql-picker-label'])[1]");
        this.overAllCleanText = this.page.locator("(//button[@class='ql-clean'])[1]");
        this.closeBtn = this.page.locator("//button[@class='close pull-right']//span[1]");
        this.cancelModelNotes = this.page.locator("(//button[text()='CANCEL'])[2]");
        this.saveModelNotes = this.page.locator("(//button[text()='SAVE'])[2]");
        this.overAllsaveModelNotes = this.page.locator("(//button[text()='SAVE'])[1]");
        this.deleteModel = this.page.locator("(//app-delete-note-button[@notetype='Assessment'])");
        this.overAllData = this.page.locator("//div[@data-placeholder='Overall feedback']");
        this.createAssignmentbtn = this.page.locator("//*[@class='create-assessment-button']");
        this.selectCategory = this.page.locator("#selectCategory");
        this.updatedCategory = this.page.locator('#updatedCategory');
        this.selectAssignment = this.page.locator("#selectAssessmentType");
        this.updatedAssignment = this.page.locator('#updateAssessmentType');
        this.maxpoints = this.page.locator("#maxPoints");
        this.gradeScore = this.page.locator("//input[@formcontrolname='grade']");
        this.updateMaxpoints = this.page.locator("#updatedMaxPoints");
        this.editAssignment = this.page.locator("(//th[contains(@class,'col-sm-1 col-md-1')])");
        this.createAssignment = this.page.locator("//button[text()='Create Assessment']");
        this.updateAssignmentBtn = this.page.locator("//button[text()='Update Assessment']");
        this.cancelcreateAssignment = this.page.locator("//button[text()='Cancel']");
        this.closeCreateAssignment = this.page.locator("//button[@class='close pull-right']");
        this.importGrades = this.page.locator("//li[@class='import-grades-button ng-star-inserted']");
        this.successimportGrades = this.page.locator("//button[text()='Import Grades']");
        this.hoverFirstName = this.page.locator("(//a[@class='ng-tns-c324-10']/following::div[@class='centered']//strong)");
        this.editflag = this.page.locator("(//em[contains(@class,'fas fa-pen')])");
        this.positiveflag = this.page.locator("text=Positive Feedback");
        this.negativeflag = this.page.locator("text=Negative Feedback");
        this.flagComment = this.page.locator('#comment');
        this.deleteFlag = this.page.locator("//button[contains(@class,'btn w-auto')]");
        this.createComment = this.page.locator("button:has-text('Create')");
        this.updateComment = this.page.locator("button:has-text('Update')");
        this.viewErrorComment = this.page.locator("//div[text()='Note: Write a comment to proceed']");
        this.viewFlagError = this.page.locator("//div[text()='Note: Choose a flag to proceed']");
        this.accessBatch = this.page.locator('#assess-link');
        this.currentRadio = this.page.locator("#radioCurrent");
        this.deleteBtn = this.page.locator("//button[text()='Delete']");
        this.deleteConform = this.page.locator("//button[text()='Are you sure you want to delete?']");
        this.previousRadio = this.page.locator("#radioPrevious");
        this.futureRadio = this.page.locator("#radioFuture");
        this.tableRow = this.page.locator("(//td[contains(@class,'col-sm-2 col-md-2')])");
        this.assignmentAveragePerctage = this.page.locator("//td[@colspan='2']/following-sibling::td");

    }
    async naviagateToAccessbatch() {
        await Promise.all([
            this.page.waitForResponse(resp => resp.url().includes('caliber/training/batch/batches/all') && resp.status() === 200),
            this.clickWithNavigation(this.accessBatch)
        ]);
    }
    async UIValidationOfAccessPage() {
        await this.waitForLocator(this.currentRadio);
        await this.waitForLocator(this.previousRadio);
        await this.waitForLocator(this.futureRadio);
        await this.waitForLocator(this.selectBatch);
        await this.assertTrue(this.currentRadio);
        await this.assertTrue(this.previousRadio);
        await this.assertTrue(this.futureRadio);
        await this.assertTrue(this.selectBatch);

    }
    async selectCurrentAccessBatch(batchname: string) {
        if (await this.currentRadio.isChecked()) {
            await this.waitForLocator(this.selectBatch);
            await this.clickElement(this.selectBatch);
            await this.typeText(this.batchSearch, batchname);
            if ((await this.selectBatchFromDrop.count()) > 0) {
                await this.clickElement(this.selectBatchFromDrop.first());
                await this.page.waitForLoadState('networkidle');
                await this.waitForLocator(this.lastName);
                return true;
            } else return false;
        } else {
            await this.clickElement(this.currentRadio);
            await this.waitForLocator(this.selectBatch);
            await this.clickElement(this.selectBatch);
            await this.typeText(this.batchSearch, batchname);
            if ((await this.selectBatchFromDrop.count()) > 0) {
                await this.clickElement(this.selectBatchFromDrop.first());
                await this.page.waitForLoadState('networkidle');
                await this.waitForLocator(this.lastName);
                return true;
            } else return false;
        }
    }
    async selectPreviousAccessBatch(batchname: string) {
        this.clickElement(this.previousRadio);
        if (await this.previousRadio.isChecked()) {
            await this.waitForLocator(this.selectBatch);
            await this.clickElement(this.selectBatch);
            await this.typeText(this.batchSearch, batchname);
            if ((await this.selectBatchFromDrop.count()) > 0) {
                await this.clickElement(this.selectBatchFromDrop.first());
                await this.page.waitForLoadState('networkidle');
                await this.waitForLocator(this.lastName);
                return true;
            } else return false;
        }
    }
    async selectFutureAccessBatch(batchname: string) {
        await this.clickElement(this.futureRadio);
        if (await this.futureRadio.isChecked()) {
            await this.waitForLocator(this.selectBatch);
            await this.clickElement(this.selectBatch);
            await this.typeText(this.batchSearch, batchname);
            if ((await this.selectBatchFromDrop.count()) > 0) {
                await this.clickElement(this.selectBatchFromDrop.first());
                await this.page.waitForLoadState('networkidle');
                await this.waitForLocator(this.lastName);
                return true;
            } else return false;
        }
    }
    async viewAllWeeks() {
        await this.waitForLocator(this.weeks.first());
        let weekCount = await this.weeks.count();
        for (let i = 0; i < weekCount; i++) {
            await expect(this.weeks.nth(i)).toBeVisible();
        }
    }
    async searchBatchForAllAccessBatch(batchname: string) {
        console.log(batchname);
        if (await this.selectCurrentAccessBatch(batchname))
            this.log("batch selected from current");
        else if (await this.selectPreviousAccessBatch(batchname))
            this.log("batch selected from previous");
        else if (await this.selectFutureAccessBatch(batchname))
            this.log("batch selected from future");
        else this.log("batch is not available");
    };
    async refreshpage() {
        await this.page.reload();
        await this.page.waitForLoadState('networkidle');
        await this.waitForLocator(this.lastName);
    }
    async getTextForAllUser() {
        await this.page.waitForLoadState('networkidle');
        await this.waitForLocator(this.lastName);
        let userText = this.page.locator("(//div[@class='centered']//strong)");
        let userCount = await userText.count();
        let allTestData: any = [];
        for (let i = 0; i < userCount; i++) {
            let text = await userText.nth(i).innerText();
            allTestData.push(text);
        }
        console.log(allTestData);
        await this.weeks.nth(0).click({ 'clickCount': 1 });
        await this.waitForLocator(this.lastName);
        await this.waitForLocator(this.firstName);
        for (let i = 0; i < userCount; i++) {
            let text = await userText.nth(i).innerText();
            expect(text).toBe(allTestData[i]);
        }
    }
    async viewSortTrainerColumn(name: string, position: any) {
        let headerElement = this.page.locator("//*[normalize-space(text())='" + name + "']");
        await this.waitForLocator(headerElement);
        await this.clickElement(headerElement);
        await this.delay(3000);
        console.log('Clicked assending');
        let firstValueASC = this.page.locator(`//table[contains(@class,'table')]/tbody[1]/tr[1]/td[${position}]`);
        let firstValueASCText: string[] = [];
        let text = await firstValueASC.textContent();
        if (text) {
            firstValueASCText.push(text);
            console.log(firstValueASCText[0]);
        }
        await this.waitForLocator(headerElement);
        await this.clickElement(headerElement);
        await this.delay(3000);
        console.log('Clicked Desending');
        let firstValueDSC = this.page.locator(`//table[contains(@class,'table')]/tbody[1]/tr[1]/td[${position}]`);
        let firstValueDSCText: string[] = [];
        let text2 = await firstValueDSC.textContent();
        if (text2) {
            firstValueDSCText.push(text2);
            console.log(firstValueDSCText[0]);
        }
        await this.clickElement(headerElement);
        await this.delay(3000);
        let lastValue = this.page.locator(`//table[contains(@class,'table')]/tbody[1]/tr[1]/td[${position}]`);
        let text3 = await lastValue.textContent();
        if (text3) {
            console.log("text3", text3);
        }
        if (text3.length > 0)
            expect(firstValueASCText[0]).toBe(text3);
        let weeks = this.page.locator("//ul[@class='nav nav-tabs']//li[1]");
        await this.clickElement(weeks);
        await this.waitForLocator(this.lastName);
        let text4 = await lastValue.textContent();
        if (text4) {
            console.log("text4", text4);
        }
        if (text4.length > 0)
            expect(firstValueASCText[0]).toBe(text4);

    }
    async giveNotesTextEditor(text: string) {
        await this.waitForLocator(this.lastName);
        await this.waitForLocator(this.weekNotes.first());
        let weeksCount = await this.weeks.count();
        for (let i = 0; i < weeksCount; i++) {
            await this.weeks.nth(i).click();
            await this.delay(3000);
            await this.waitForLocator(this.lastName);
            await this.waitForLocator(this.weekNotes.first());
            let notes = await this.weekNotes.count();
            for (let i = 0; i < notes; i++) {
                await this.weekNotes.nth(i).fill(text);
            }
            await this.waitForLocator(this.overAllData);
            await this.fillText(this.overAllData, 'Change all the data');
        }
    }
    async openNotesInPopUpAndGiveData(text) {
        await this.waitForLocator(this.openWeekNotes.first());
        let count = await this.openWeekNotes.count()
        for (let i = 0; i < count - 1; i++) {
            await this.delay(2000)
            await this.openWeekNotes.nth(i).click();
            await this.waitForLocator(this.bold);
            await this.assertTrue(this.header);
            await this.assertTrue(this.bold);
            await this.assertTrue(this.italic);
            await this.assertTrue(this.underline);
            await this.assertTrue(this.orderedlist);
            await this.assertTrue(this.bulletlist);
            await this.assertTrue(this.cleanText);
            await this.assertTrue(this.weekNotesInModel);
            await this.fillText(this.weekNotesInModel, text)
            await this.weekNotesInModel.press("Control+A");
            await this.clickElement(this.bold);
            await this.clickElement(this.italic);
            await this.clickElement(this.underline);
            await this.clickElement(this.orderedlist);
            await this.clickElement(this.bulletlist);
            await this.clickElement(this.cleanText);
            await this.clickElement(this.saveModelNotes);
        }
    }
    async overallWeekNotes(text: any) {
        await this.waitForLocator(this.openWeekNotes.first());
        await this.delay(2000)
        await this.openWeekNotes.last().click();
        await this.waitForLocator(this.overAllbold);
        await this.assertTrue(this.overAllbold);
        await this.assertTrue(this.overAllheader);
        await this.assertTrue(this.overAllItalic);
        await this.assertTrue(this.overAllUnderline);
        await this.assertTrue(this.overAllOrderedlist);
        await this.assertTrue(this.overAllBulletlist);
        await this.assertTrue(this.overAllCleanText);
        await this.assertTrue(this.overAllweekNotesInModel);
        await this.fillText(this.overAllweekNotesInModel, text)
        await this.overAllweekNotesInModel.press("Control+A");
        await this.clickElement(this.overAllbold);
        await this.clickElement(this.overAllItalic);
        await this.clickElement(this.overAllUnderline);
        await this.clickElement(this.overAllOrderedlist);
        await this.clickElement(this.overAllBulletlist);
        await this.clickElement(this.overAllCleanText);
        await this.clickElement(this.overAllsaveModelNotes);
    }
    async deleteNotes() {
        let deleteModelCount = await this.deleteModel.count();
        for (let i = 0; i < deleteModelCount; i++) {
            await this.waitForLocator(this.deleteModel.first());
            let disable = await this.deleteModel.nth(i).isDisabled();
            if (!disable)
                await this.deleteModel.nth(i).click();
            else
                await this.deleteModel.nth(i).click();
            await this.clickElement(this.deleteBtn);
        }

    }
    async openNotesInPopUpAndGiveDataAndRemoveText(text: any) {
        await this.waitForLocator(this.openWeekNotes.first());
        let count = await this.openWeekNotes.count()
        for (let i = 0; i < count - 1; i++) {
            await this.delay(2000)
            await this.openWeekNotes.nth(i).click();
            await this.waitForLocator(this.bold);
            await this.assertTrue(this.header);
            await this.assertTrue(this.bold);
            await this.assertTrue(this.italic);
            await this.assertTrue(this.underline);
            await this.assertTrue(this.orderedlist);
            await this.assertTrue(this.bulletlist);
            await this.assertTrue(this.cleanText);
            await this.assertTrue(this.weekNotesInModel);
            await this.fillText(this.weekNotesInModel, text)
            await this.weekNotesInModel.press("Control+A");
            await this.clickElement(this.bold);
            await this.clickElement(this.italic);
            await this.clickElement(this.underline);
            await this.clickElement(this.orderedlist);
            await this.clickElement(this.bulletlist);
            await this.clickElement(this.cleanText);
            await this.weekNotesInModel.press("Control+A+Backspace");
            await this.clickElement(this.saveModelNotes);
        }
    }
    async overallWeekNotesAndRemoveText(text: any) {
        await this.waitForLocator(this.openWeekNotes.first());
        await this.delay(2000)
        await this.openWeekNotes.last().click();
        await this.waitForLocator(this.overAllbold);
        await this.assertTrue(this.overAllbold);
        await this.assertTrue(this.overAllItalic);
        await this.assertTrue(this.overAllUnderline);
        await this.assertTrue(this.overAllOrderedlist);
        await this.assertTrue(this.overAllBulletlist);
        await this.assertTrue(this.overAllCleanText);
        await this.assertTrue(this.overAllweekNotesInModel);
        await this.fillText(this.overAllweekNotesInModel, text)
        await this.overAllweekNotesInModel.press("Control+A");
        await this.clickElement(this.overAllbold);
        await this.clickElement(this.overAllItalic);
        await this.clickElement(this.overAllUnderline);
        await this.clickElement(this.overAllOrderedlist);
        await this.clickElement(this.overAllBulletlist);
        await this.clickElement(this.overAllCleanText);
        await this.weekNotesInModel.press("Control+A+Backspace");
        await this.clickElement(this.overAllsaveModelNotes);
    }
    async createAssignmentActivityForAllWeeks() {
        await this.waitForLocator(this.lastName);
        let weeksCount = await this.weeks.count();
        for (let i = 0; i < weeksCount; i++) {
            await this.weeks.nth(i).click();
            await this.delay(3000);
            await this.waitForLocator(this.lastName);
            let text: string;
            for (let i = 0; i < 5; i++) {
                let getRandomCategory = '//*[@id="selectCategory"]/option[' + utilsPage.getRandomNumberFromRange(2, 50) + "]";
                let getRandomAssignment = '//*[@id="selectAssessmentType"]/option[' + utilsPage.getRandomNumberFromRange(2, 5) + "]";
                await this.clickElement(this.createAssignmentbtn);
                await this.clickElement(this.selectCategory);
                text = await this.page.locator(getRandomCategory).innerText();
                await this.typeAndEnter(this.selectCategory, text);
                await this.clickElement(this.maxpoints);
                await this.fillText(this.maxpoints, utilsPage.getRandomNumberFromRange(20, 100).toString());
                await this.clickElement(this.selectAssignment);
                text = await this.page.locator(getRandomAssignment).innerText();
                await this.typeAndEnter(this.selectAssignment, text);
                await this.clickElement(this.createAssignment);
            }
        }
    }
    async editAssignmentActivityForAllWeeks() {
        await this.waitForLocator(this.lastName);
        let weeksCount = await this.weeks.count();
        let assignmentCount = await this.editAssignment.count()
        for (let i = 0; i < weeksCount; i++) {
            await this.weeks.nth(i).click();
            await this.delay(3000);
            await this.waitForLocator(this.lastName);
            let text: string;
            for (let i = 0; i < assignmentCount; i++) {
                let getRandomCategory = '//*[@id="updatedCategory"]/option[' + utilsPage.getRandomNumberFromRange(2, 50) + "]";
                let getRandomAssignment = '//*[@id="updateAssessmentType"]/option[' + utilsPage.getRandomNumberFromRange(2, 5) + "]";
                await this.editAssignment.nth(i).click();
                await this.clickElement(this.updatedCategory);
                text = await this.page.locator(getRandomCategory).innerText();
                await this.typeAndEnter(this.updatedCategory, text);
                await this.clickElement(this.updateMaxpoints);
                await this.fillText(this.updateMaxpoints, utilsPage.getRandomNumberFromRange(20, 100).toString());
                await this.clickElement(this.updatedAssignment);
                text = await this.page.locator(getRandomAssignment).innerText();
                await this.typeAndEnter(this.updatedAssignment, text);
                await this.clickElement(this.updateAssignmentBtn);
            }
        }
    }
    async deleteAssignmentActivityForAllWeeks() {
        await this.waitForLocator(this.lastName);
        let weeksCount = await this.weeks.count();
        let assignmentCount = await this.editAssignment.count()
        for (let i = 0; i < weeksCount; i++) {
            await this.weeks.nth(i).click();
            await this.delay(3000);
            await this.waitForLocator(this.lastName);
            for (let i = 0; i < assignmentCount; i++) {
                await this.editAssignment.first().click();
                await this.clickElement(this.deleteBtn);
                await this.clickElement(this.goBack);
                await this.clickElement(this.deleteBtn);
                await this.clickElement(this.deleteConform);
            }

        }
    }
    async cancelAssignmentActivityForAllWeeks() {
        await this.waitForLocator(this.lastName);
        let weeksCount = await this.weeks.count();
        let assignmentCount = await this.editAssignment.count()
        for (let i = 0; i < weeksCount; i++) {
            await this.weeks.nth(i).click();
            await this.delay(3000);
            await this.waitForLocator(this.lastName);
            for (let i = 0; i < assignmentCount; i++) {
                if (assignmentCount === 0) {
                    break;
                } else {
                    await this.editAssignment.first().click();
                    await this.clickElement(this.cancelcreateAssignment)
                }
            }
        }
    }
    async closeAssignmentActivityForAllWeeks() {
        await this.waitForLocator(this.lastName);
        let weeksCount = await this.weeks.count();
        let assignmentCount = await this.editAssignment.count()
        for (let i = 0; i < weeksCount; i++) {
            await this.weeks.nth(i).click();
            await this.delay(3000);
            await this.waitForLocator(this.lastName);
            for (let i = 0; i < assignmentCount; i++) {
                if (assignmentCount === 0) {
                    break;
                } else {
                    await this.editAssignment.first().click();
                    await this.clickElement(this.closeCreateAssignment)
                }
            }
        }
    }
    async scoreForAllAssignmentActivityInAllWeeks() {
        await this.waitForLocator(this.lastName);
        let weeksCount = await this.weeks.count();
        let gradeScoreCount = await this.gradeScore.count()
        for (let i = 0; i < weeksCount; i++) {
            await this.weeks.nth(i).click();
            await this.delay(3000);
            await this.waitForLocator(this.lastName);
            for (let i = 0; i < gradeScoreCount; i++) {
                await this.gradeScore.nth(i).click();
                await this.gradeScore.nth(i).type(utilsPage.getRandomNumberFromRange(2, 100).toString());
            }

        }
    }
    async editScoreForAllAssignmentActivityInAllWeeks() {
        await this.waitForLocator(this.lastName);
        let weeksCount = await this.weeks.count();
        let gradeScoreCount = await this.gradeScore.count()
        for (let i = 0; i < weeksCount; i++) {
            await this.weeks.nth(i).click();
            await this.delay(3000);
            await this.waitForLocator(this.lastName);
            for (let i = 0; i < gradeScoreCount; i++) {
                await this.gradeScore.nth(i).click();
                await this.gradeScore.nth(i).fill(utilsPage.getRandomNumberFromRange(2, 100).toString())
            }
        }
    }

    async createFlagToWeek(test: any) {
        let countOfrows = await this.tableRow.count();
        console.log(countOfrows / 2);
        for (let i = 1; i <= countOfrows / 2; i++) {
            let editUser = this.page.locator("//table[contains(@class,'table')]/tbody[1]/tr[" + i + "]/td[2]/app-associate-details[1]/div[1]/div[1]");
            let editPencil = this.page.locator("(//em[contains(@class,'fas fa-pen')])[" + i + "]");
            await editUser.hover();
            await this.delay(2000);
            await editPencil.click();
            await this.assertTrue(this.flagComment);
            await this.assertTrue(this.positiveflag);
            await this.assertTrue(this.negativeflag);
            await this.assertTrue(this.createComment);
            await this.assertTrue(this.deleteFlagDisable);
            await this.clickElement(this.createComment);
            await this.assertTrue(this.viewFlagError);
            await this.delay(2000);
            let clickRandomFlag = this.page.locator("(//div[@class='d-inline-block ng-star-inserted']//span)[" + utilsPage.getRandomNumberFromRange(1, 2) + "]")
            await this.clickElement(clickRandomFlag);
            await this.clickElement(this.createComment);
            await this.assertTrue(this.viewErrorComment);
            await this.typeAndEnter(this.flagComment, test);
            await this.delay(2000);
            await this.clickElement(this.createComment);
        }
    }
    async editFlagToWeek(test: any) {
        let countOfrows = await this.tableRow.count();
        console.log(countOfrows / 2);
        for (let i = 1; i <= countOfrows / 2; i++) {
            let editUser = this.page.locator("//table[contains(@class,'table')]/tbody[1]/tr[" + i + "]/td[2]/app-associate-details[1]/div[1]/div[1]");
            let editPencil = this.page.locator("(//em[contains(@class,'fas fa-pen')])[" + i + "]");
            await editUser.hover();
            await this.delay(2000);
            await editPencil.click();
            await this.assertTrue(this.flagComment);
            await this.assertTrue(this.positiveflag);
            await this.assertTrue(this.negativeflag);
            await this.assertTrue(this.updateComment);
            await this.assertTrue(this.deleteFlag);
            await this.flagComment.press("Control+A+Backspace");
            let clickRandomFlag = this.page.locator("(//div[@class='d-inline-block ng-star-inserted']//span)[" + utilsPage.getRandomNumberFromRange(1, 2) + "]")
            await this.clickElement(clickRandomFlag);
            await this.clickElement(this.updateComment);
            await this.assertTrue(this.viewErrorComment);
            await this.typeAndEnter(this.flagComment, test);
            await this.delay(2000);
            await this.clickElement(this.updateComment);
        }
    }
    async cancelFlagToWeek() {
        let countOfrows = await this.tableRow.count();
        console.log(countOfrows / 2);
        for (let i = 1; i <= countOfrows / 2; i++) {
            let editUser = this.page.locator("//table[contains(@class,'table')]/tbody[1]/tr[" + i + "]/td[2]/app-associate-details[1]/div[1]/div[1]");
            let editPencil = this.page.locator("(//em[contains(@class,'fas fa-pen')])[" + i + "]");
            await editUser.hover();
            await this.delay(2000);
            await editPencil.click();
            await this.assertTrue(this.flagComment);
            await this.assertTrue(this.positiveflag);
            await this.assertTrue(this.negativeflag);
            await this.assertTrue(this.updateComment);
            await this.assertTrue(this.deleteFlag);
            await this.clickElement(this.closeBtn);
        }
    }
    async deleteFlagToWeek() {
        let countOfrows = await this.tableRow.count();
        console.log(countOfrows / 2);
        for (let i = 1; i <= countOfrows / 2; i++) {
            let editUser = this.page.locator("//table[contains(@class,'table')]/tbody[1]/tr[" + i + "]/td[2]/app-associate-details[1]/div[1]/div[1]");
            let editPencil = this.page.locator("(//em[contains(@class,'fas fa-pen')])[" + i + "]");
            await editUser.hover();
            await this.delay(2000);
            await editPencil.click();
            await this.assertTrue(this.flagComment);
            await this.assertTrue(this.positiveflag);
            await this.assertTrue(this.negativeflag);
            await this.assertTrue(this.updateComment);
            await this.assertTrue(this.deleteFlag);
            await this.clickElement(this.deleteFlag);
        }
    }
    async viewFlagStatus() {
        await this.assertTrue(this.redFlag);
        await this.assertTrue(this.greenFlag);
    }
    async calculateAvarageScoreForActivity() {
        await this.waitForLocator(this.lastName);
        let rowCount = await this.tableRow.count();
        let sum: number = 0;
        for (let i = 0; i < rowCount / 2; i++) {
            let scoreFortrainers = this.page.locator("//table[contains(@class,'table')]/tbody[1]/tr[" + [i + 1] + "]/td[3]/app-assessment-details-row[1]/div[1]/input[1]");
            sum = sum + Number(await scoreFortrainers.inputValue());
        }
        let average = sum / (rowCount / 2);
        let averagePercantage = ((average / 100) * 100).toFixed(2) + '%';
        expect(await this.assignmentAveragePerctage.first().textContent()).toContain(averagePercantage);
    }
    async calculateAvarageScoreForWeek() {
        await this.waitForLocator(this.lastName);
        let averageCount = await this.assignmentAveragePerctage.count();
        let sum: number = 0;
        for (let i = 0; i < averageCount - 1; i++) {
            console.log(await this.assignmentAveragePerctage.nth(i).textContent());
            sum = Number(sum.toFixed(2)) + Number((await this.assignmentAveragePerctage.nth(i).textContent()).replace('%', ''));
        }
        let average = sum / (await this.editAssignment.count());
        let text = (await this.assignmentAveragePerctage.last().textContent()).split(" ");
        //expect(text[3]).toContain(average);
    }
}