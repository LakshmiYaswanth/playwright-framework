import { expect, Locator, Page } from "@playwright/test";
import { WebActions } from "../lib/webElementAction";

export class HomeMenu extends WebActions {
    readonly page: Page;
    canvasgraph: Locator;
    locationdropdown: Locator;
    locations: Locator;
    batchColumn: Locator;
    notAccount: Locator;
    poorStatus: Locator;
    goodstatus: Locator;
    averageStatus: Locator;
    missingGradingReport: Locator;
    weekDisplay: Locator;
    removeWeek: Locator;
    addWeek: Locator;
    missedWeeks: Locator;
    settingMenu: Locator;
    reportMenu: Locator;
    qualityAuditMenu: Locator;
    assessLink: Locator;
    manageBatchMenu: Locator;
    homeMenu: Locator;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.homePageLocators();
    }
    homePageLocators() {
        this.canvasgraph = this.page.locator("//div/canvas");
        this.locationdropdown = this.page.locator("//button[@class='dropdown-toggle']");
        this.locations = this.page.locator("//li[@class='li-p ng-star-inserted']//button");
        this.batchColumn = this.page.locator("//table[@id='lastQATable']/tbody[1]/tr[1]/th");
        this.notAccount = this.page.locator("//table[@id='lastQATable']/tbody/tr/td[normalize-space(text()) = 'N/A']");
        this.poorStatus = this.page.locator("//table[@id='lastQATable']/tbody/tr/td[normalize-space(text()) = 'Poor']");
        this.goodstatus = this.page.locator("//table[@id='lastQATable']/tbody/tr/td[normalize-space(text()) = 'Good']");
        this.averageStatus = this.page.locator("//table[@id='lastQATable']/tbody/tr/td[normalize-space(text()) = 'Average']");
        this.missingGradingReport = this.page.locator("//div[text()=' Missing Grades Report']");
        this.weekDisplay = this.page.locator("(//div[@class='dropdown']//button)[2]");
        this.removeWeek = this.page.locator("//span[@class='pillContent']/following-sibling::span");
        this.addWeek = this.page.locator("//li[@role='button']//a");
        this.missedWeeks = this.page.locator("table.table>thead>tr>th");
        this.settingMenu = this.page.locator('text=Settings');
        this.reportMenu = this.page.locator('#reports-link');
        this.qualityAuditMenu = this.page.locator('#quality-link');
        this.assessLink = this.page.locator('//a[@id="assess-link"]');
        this.manageBatchMenu = this.page.locator('#manage-link');
        this.homeMenu = this.page.locator('#home-link');
    }

    lastQualityTable = [
        'Batch',
        'Poor',
        'Average',
        'Good',
        'Superstar',
        'Overall Batch Status'
    ];
    missingGradesReport = [
        'Trainer',
        'Skill Type',
        'Missing Week',
        'Location'
    ];
    public async validateLastQualityTable() {
        let number = await this.batchColumn.count();
        for (let i = 0; i < number; i++) {
            expect(await this.batchColumn.nth(i).textContent()).toContain(this.lastQualityTable[i]);
        }
    }
    public async validateMissedWeekTable() {
        let number = await this.missedWeeks.count();
        for (let i = 0; i < number; i++) {
            expect(await this.missedWeeks.nth(i).textContent()).toContain(this.missingGradesReport[i]);
        }
    }
    public async validateHomePage() {
        await this.assertTrue(this.canvasgraph);
        await this.assertTrue(this.locationdropdown);
        await this.assertTrue(this.missingGradingReport);
        await this.assertTrue(this.weekDisplay);
        await this.assertTrue(this.removeWeek.first());
    };
    public async viewAllStatus() {
        //await this.assertTrue(this.notAccount);
        await this.assertTrue(this.poorStatus.first());
        await this.assertTrue(this.goodstatus.first());
        await this.assertTrue(this.averageStatus.first());
    };
    public async validationCaliberPage() {
        await this.page.waitForLoadState('networkidle');
        await this.assertTrue(this.homeMenu);
        await this.assertTrue(this.manageBatchMenu);
        await this.assertTrue(this.settingMenu);
        await this.assertTrue(this.assessLink);
        await this.assertTrue(this.qualityAuditMenu);
        await this.assertTrue(this.reportMenu);
    };
    public async selectLocation() {
        await this.clickElement(this.locationdropdown);
        await this.locations.nth(1).click();
    };
    public async removeWeekButton() {
        await this.removeWeek.nth(1).click();
    };
    public async selectRemovedWeek() {
        await this.clickElement(this.weekDisplay);
        await this.addWeek.nth(0).click();
    };
}