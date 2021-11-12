import { Locator, Page } from "@playwright/test";
import { WebActions } from "../../lib/webElementAction";
import moment from "moment";

export class BatchCreation extends WebActions {
    readonly page: Page;
    createBatchBtn: Locator;
    currentRadio: Locator;
    previousRadio: Locator;
    futureRadio: Locator;
    currentRadioInput: Locator;
    previousRadioInput: Locator;
    futureRadioInput: Locator;
    rosterTab: Locator;
    rosterTabEmailField: Locator;
    addUsers: Locator;
    batchDropDown: Locator;
    batchDropDownSearch: Locator;
    batchname: Locator;
    startName: Locator;
    endName: Locator;
    closeDatePicker: Locator;
    cotrainer: Locator;
    trainer: Locator;
    batchQc: Locator;
    timeZone: Locator;
    timeZoneSearch: Locator;
    studentReport: Locator;
    timezoneClick: Locator;
    save: Locator;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.batchMenuLocators()
    };
    batchMenuLocators() {
        this.createBatchBtn = this.page.locator("#batCurCrBatchBtn");
        this.currentRadio = this.page.locator("//label[@for='radioCurrent']");
        this.previousRadio = this.page.locator("//label[@for='radioPrevious']");
        this.futureRadio = this.page.locator("//label[@for='radioFuture']");
        this.currentRadioInput = this.page.locator("#radioCurrent");
        this.previousRadioInput = this.page.locator("#radioPrevious");
        this.futureRadioInput = this.page.locator("#radioFuture");
        this.rosterTab = this.page.locator("//*[text()='Roster']/..");
        this.rosterTabEmailField = this.page.locator("#RosterInpTxtBox");
        this.addUsers = this.page.locator("//*[@id='addUserTbl']//tbody//label");
        this.batchDropDown = this.page.locator("//*[@id = 'batListBatBtnDpdwnDiv']/button");
        this.batchDropDownSearch = this.page.locator("#batch-drop-down-searchTxt");
        this.batchname = this.page.locator("#crtBatchName");
        this.startName = this.page.locator("//label[text()='Start Date']/following-sibling::div//input");
        this.endName = this.page.locator("//label[text()='End Date']/following-sibling::div//input");
        this.closeDatePicker = this.page.locator("//button[@class='picker__button--close']");
        this.cotrainer = this.page.locator("#crtBatchCoTrainer");
        this.trainer = this.page.locator("#crtBatchTrainerSel");
        this.batchQc = this.page.locator("#crtBatchQC");
        this.timeZone = this.page.locator("#timezoneGrp");
        this.timeZoneSearch = this.page.locator("#timezone-drop-down-searchTxt");
        this.studentReport = this.page.locator("//div[@class='form-check']//label[1]");
        this.timezoneClick = this.page.locator('#timezone-drop-down-option0');
        this.save = this.page.locator('#crtBatchNxtBtn');
    }

    public async selectDates() {
        let lastMonday = moment().day(1).add(-7, "days").format("MM-DD-YYYY");
        let nextFriday = moment().day(5).add(7, "days").format("MM-DD-YYYY");
        this.log("Start Date: " + lastMonday);
        this.log("End Date" + nextFriday);
        await this.fillText(this.startName, lastMonday);
        await this.clickElement(this.closeDatePicker);
        await this.fillText(this.endName, nextFriday);
        await this.clickElement(this.closeDatePicker);
    }
    public async selectDates3Weeks() {
        let lastMonday = moment().day(1).add(-14, "days").format("MM-DD-YYYY");
        let nextFriday = moment().day(5).add(7, "days").format("MM-DD-YYYY");
        this.log("Start Date: " + lastMonday);
        this.log("End Date" + nextFriday);
        await this.fillText(this.startName, lastMonday);
        await this.clickElement(this.closeDatePicker);
        await this.fillText(this.startName, nextFriday);
        await this.clickElement(this.closeDatePicker);
    }
    public async selectTimeZone(timeZone: string) {
        let trainerSelect = this.page.locator("//a[text()='" + timeZone + "']");
        await this.clickElement(this.timeZone);
        await this.delay(2000);
        await this.fillText(this.timeZoneSearch, timeZone);
        await trainerSelect.click();
        await this.assertLowerText(this.timeZone, timeZone);

    };
    public async createBatch(batchname: string, trainername: string, cotrainername: string, qctrainername: string, timezone: string) {
        let trainerSelect = this.page.locator("//a[text()='" + trainername + "']");
        await this.clickElement(this.createBatchBtn);
        await this.fillText(this.batchname, batchname);
        await this.selectDates();
        await this.clickElement(this.trainer);
        await trainerSelect.click();
        if (cotrainername != "NA") {
            let cotrainerSelect = this.page.locator("//div[text()='" + cotrainername + "']");
            await this.clickElement(this.cotrainer);
            await cotrainerSelect.click();
        };
        if (qctrainername != "NA") {
            let QcSelect = this.page.locator("//div[text()='" + cotrainername + "']");
            await this.clickElement(this.batchQc);
            await QcSelect.click();
        }
        await this.selectTimeZone(timezone);
        await this.clickElement(this.studentReport);
        await this.assertEnabled(this.save);
        await this.clickElement(this.save);
        await this.verifyTosterMessageNewUi("Batch created successfully");
    }

    async selectCurrentBatch(batchname: string, username: string) {
        let batchDropDownAllValues = "//a[contains(text(),'" + batchname + "')][1]";
        console.log(batchname)
        let batchDropDownValues = this.page.locator(batchDropDownAllValues);
        if (await this.currentRadioInput.isChecked()) {
            await this.clickElement(this.batchDropDown);
            await this.clearAndType(this.batchDropDownSearch, batchname);
            if ((await batchDropDownValues.count()) > 0) {
                await this.page.pause();
                await (batchDropDownValues).click();
                return true;
            } else return false;
        } else {
            await this.clickElement(this.currentRadio);
            await this.clickElement(this.batchDropDown);
            await this.clearAndType(this.batchDropDownSearch, batchname);
            if ((await batchDropDownValues.count()) > 0) {
                await (batchDropDownValues).click();
                return true;
            } else return false;
        }
    }
    async selectPreviousBatch(batchname: string, username: string) {
        this.clickElement(this.previousRadio);
        let batchDropDownAllValues = "//a[contains(text(),'" + batchname + "')][1]";
        let batchDropDownValues = this.page.locator(batchDropDownAllValues);
        if (await this.previousRadioInput.isChecked()) {
            await this.clickElement(this.batchDropDown);
            await this.clearAndType(this.batchDropDownSearch, batchname);
            if ((await batchDropDownValues.count()) > 0) {
                await (batchDropDownValues).click();
                return true;
            } else return false;
        }
    }
    async selectFutureBatch(batchname: string, username: string) {
        await this.clickElement(this.futureRadio);
        let batchDropDownAllValues = "//a[contains(text(),'" + batchname + "')][1]";
        let batchDropDownValues = this.page.locator(batchDropDownAllValues);
        if (await this.futureRadioInput.isChecked()) {
            await this.clickElement(this.batchDropDown);
            await this.clearAndType(this.batchDropDownSearch, batchname);
            if ((await batchDropDownValues.count()) > 0) {
                await (batchDropDownValues).click();
                return true;
            } else return false;
        }
    }
    async openBatch(batchname: string, username: string) {
        if (await this.selectCurrentBatch(batchname, username))
            this.log("batch selected from current");
        else if (await this.selectPreviousBatch(batchname, username))
            this.log("batch selected from previous");
        else if (await this.selectFutureBatch(batchname, username))
            this.log("batch selected from future");
        else this.log("batch is not available");
    }
    async addSingleAndMultipleTrainees(emails: string) {
        await this.scrollAndClick(this.rosterTab);
        await this.clearAndTypeEnter(this.rosterTabEmailField, emails);
        let selectAllParticipents = this.page.locator("//label[@for='selectAllParticipants']");
        await selectAllParticipents.click();
        let save = this.page.locator("//mdb-tab[contains(@class, 'active')]//*[@id='calendarSettingSave']");
        await save.click();
        await this.verifyTosterMessageNewUi("User added successfully");
    }





}