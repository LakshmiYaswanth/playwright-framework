import { expect, Locator, Page } from "@playwright/test";
import { Utils } from "../lib/utils";
import { WebActions } from "../lib/webElementAction";
const utilsPage = new Utils();

export class QualityAuditMenu extends WebActions {
    readonly page: Page;
    removeCategory: Locator;
    addCategory: Locator;
    selectCategoty: Locator;
    weeks: Locator;
    randomAssociate: Locator;
    feedBack: Locator;
    search: Locator;
    lastName: Locator;
    firstName: Locator;
    starFeedBack: Locator;
    questionFeedBack: Locator;
    angryFeedBack: Locator;
    mehFeedBack: Locator;
    smileFeedBack: Locator;
    overAllmehFeedBack: Locator;
    overAllsmileFeedBack: Locator;
    overAllangryFeedBack: Locator;
    overAllquestionFeedBack: Locator;
    overAllstarFeedBack: Locator;
    qualityAuditBtn: Locator;
    saveBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.qualityPageLocator();
    }
    qualityPageLocator() {
        this.saveBtn = this.page.locator('a.save-button.fade-in');
        this.qualityAuditBtn = this.page.locator("#quality-link")
        this.removeCategory = this.page.locator("(//span[contains(@class,'label label-default')]//span)");
        this.addCategory = this.page.locator("//em[contains(@class,'fa fa-plus')]");
        this.weeks = this.page.locator("//ul[@class='nav nav-tabs']//li");
        this.randomAssociate = this.page.locator('//label[@for="someSwitchOptionDefault"]');
        this.feedBack = this.page.locator("app-qc-feedback em");
        this.search = this.page.locator('#searchText');
        this.lastName = this.page.locator("//a[contains(.,'Last Name')]");
        this.firstName = this.page.locator("//a[contains(.,'First Name')]");
        this.starFeedBack = this.page.locator('(//em[contains(@class,"fa fa-2x qc-feedback fa-star ng-star-inserted")])');
        this.questionFeedBack = this.page.locator('(//em[contains(@class,"fa fa-2x qc-feedback fa-question-circle ng-star-inserted")])');
        this.angryFeedBack = this.page.locator('(//em[contains(@class,"fa fa-2x qc-feedback fa-frown ng-star-inserted")])');
        this.mehFeedBack = this.page.locator('(//em[contains(@class,"fa fa-2x qc-feedback fa-meh ng-star-inserted")])');
        this.smileFeedBack = this.page.locator('(//em[contains(@class,"fa fa-2x qc-feedback fa-smile ng-star-inserted")])');
        this.overAllmehFeedBack = this.page.locator('(//em[contains(@class,"qc-feedback fa fa-3x fa-2x fa-meh")])');
        this.overAllsmileFeedBack = this.page.locator('(//em[contains(@class,"qc-feedback fa fa-3x fa-2x fa-smile")])');
        this.overAllangryFeedBack = this.page.locator('(//em[contains(@class,"qc-feedback fa fa-3x fa-2x fa-frown")])');
        this.overAllquestionFeedBack = this.page.locator('(//em[contains(@class,"qc-feedback fa fa-3x fa-2x fa-question-circle")])')

    }
    async naviagateToQualityAuditBatch() {
        await Promise.all([
            this.page.waitForResponse(resp => resp.url().includes('caliber/training/batch/batches/all') && resp.status() === 200),
            this.clickWithNavigation(this.qualityAuditBtn)
        ]);
    }
    async createCategoryActivityForAllWeeks() {
        await this.waitForLocator(this.lastName);
        await this.waitForLocator(this.feedBack.first());
        let weeksCount = await this.weeks.count();
        for (let i = 0; i < weeksCount; i++) {
            await this.weeks.nth(i).click();
            await this.delay(3000);
            await this.waitForLocator(this.lastName);
            for (let i = 0; i < 3; i++) {
                await this.clickElement(this.addCategory);
                this.selectCategoty = this.page.locator("(//a[@class='ng-tns-c306-4 ng-star-inserted'])[" + utilsPage.getRandomNumberFromRange(2, 50) + "]");
                await this.clickElement(this.selectCategoty);
            }
        }
    }
    async deleteCategoryActivityForAllWeeks() {
        await this.waitForLocator(this.lastName);
        await this.waitForLocator(this.feedBack.first());
        let weeksCount = await this.weeks.count();
        for (let i = 0; i < weeksCount; i++) {
            await this.weeks.nth(i).click();
            await this.delay(3000);
            await this.waitForLocator(this.lastName);
            await this.waitForLocator(this.feedBack.first())
            let removeCategoryCount = await this.removeCategory.count();
            for (let i = 0; i < removeCategoryCount; i++) {
                await this.delay(2000);
                await this.clickElement(this.removeCategory.first());
                this.log('clicked element')
            }
        }
    }
    async addfeedBack() {
        await this.waitForLocator(this.lastName);
        await this.waitForLocator(this.feedBack.first());
        let weeksCount = await this.weeks.count();
        for (let i = 0; i < weeksCount; i++) {
            await this.weeks.nth(i).click();
            await this.delay(3000);
            await this.waitForLocator(this.lastName);
            await this.waitForLocator(this.feedBack.first());
            let feedBackCount = await this.feedBack.count();
            for (let i = 0; i < feedBackCount - 1; i++) {
                await this.clickElement(this.feedBack.nth(i));
                if (i == 0) {
                    await this.clickElement(this.starFeedBack);
                }
                else if (i == 1) {
                    await this.clickElement(this.questionFeedBack);
                }
                else if (i == 2) {
                    await this.clickElement(this.angryFeedBack);
                }
                else if (i == 3) {
                    await this.clickElement(this.mehFeedBack);
                }
                else if (i == 4) {
                    await this.clickElement(this.smileFeedBack);
                }
            }
            await this.assertTrue(this.overAllmehFeedBack);
            await this.clickElement(this.saveBtn);
        }
    }
    async updatefeedBack() {
        await this.waitForLocator(this.lastName);
        await this.waitForLocator(this.feedBack.first());
        let weeksCount = await this.weeks.count();
        for (let i = 0; i < weeksCount; i++) {
            await this.weeks.nth(i).click();
            await this.delay(3000);
            await this.waitForLocator(this.lastName);
            await this.waitForLocator(this.feedBack.first());
            let feedBackCount = await this.feedBack.count();
            for (let i = 0; i < feedBackCount - 1; i++) {
                await this.clickElement(this.feedBack.nth(i));
                await this.clickElement(this.starFeedBack);
            }
            await this.assertTrue(this.overAllsmileFeedBack);
            await this.clickElement(this.saveBtn);
        }
    }
    async removeFeedBack() {
        await this.waitForLocator(this.lastName);
        await this.waitForLocator(this.feedBack.first());
        let weeksCount = await this.weeks.count();
        for (let i = 0; i < weeksCount; i++) {
            await this.weeks.nth(i).click();
            await this.delay(3000);
            await this.waitForLocator(this.lastName);
            await this.waitForLocator(this.feedBack.first());
            let feedBackCount = await this.feedBack.count();
            for (let i = 0; i < feedBackCount - 1; i++) {
                await this.clickElement(this.feedBack.nth(i));
                await this.clickElement(this.questionFeedBack);
            }
            await this.delay(2000);
            await this.assertTrue(this.overAllquestionFeedBack);
            await this.clickElement(this.saveBtn);
        }
    }
    async updateOverAllFeedBack() {
        await this.clickElement(this.feedBack.last());
        await this.clickElement(this.smileFeedBack);
        await this.clickElement(this.saveBtn);
    }
    async clickRandomUser() {
        await this.waitForLocator(this.randomAssociate);
        await this.assertTrue(this.randomAssociate);
        await this.clickElement(this.randomAssociate);
        await this.clickElement(this.saveBtn);
    }
    async userSearch() {
        await this.assertTrue(this.search);
        let firstname = this.page.locator("(//div[@class='centered']//strong)[1]");
        await this.assertTrue(firstname);
        let text = await firstname.textContent();
        await this.typeAndEnter(this.search, text)
    }
}