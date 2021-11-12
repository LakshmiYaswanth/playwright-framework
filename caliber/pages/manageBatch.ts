import { expect, Locator, Page } from "@playwright/test";
import { WebActions } from "../lib/webElementAction";


export class ManageBatchMenu extends WebActions {
    readonly page: Page;
    syncEnded: Locator;
    syncStarted: Locator;
    first: Locator;
    previous: Locator;
    next: Locator;
    last: Locator;
    manageBatch: Locator;
    currentRadio: Locator;
    previousRadio: Locator;
    futureRadio: Locator;
    searchBtn: Locator;
    batchSync: Locator;
    clearfilter: Locator;
    batchlist: Locator;
    archiveBtn: Locator;
    trainingStyleDropDown: Locator;
    standaredlist: Locator;
    productlist: Locator;
    row: Locator;
    trainer: Locator;
    pdp: Locator;
    traineeSync: Locator;
    trainingName: Locator;
    trainingType: Locator;
    coTrainer: Locator;
    trainingStyle: Locator;
    trainerText: Locator;
    skillType: Locator;
    location: Locator;
    startdate: Locator;
    endDate: Locator;
    closeBtn: Locator;
    switchBatch: Locator;
    dropAddUser: Locator;
    dropUser: Locator;
    deleteUser: Locator;
    dropBtn: Locator;
    cancelBtn: Locator;
    switchBtn: Locator;
    conformYes: Locator;
    toogleBtn: Locator;
    activeTrainers: Locator;
    switchConform: Locator;
    conformationBtn: Locator;
    totalTrainers: Locator;
    searchSwitchBranch: Locator;
    dropdownSelectBatch: Locator;
    clickSelectedBranch: Locator;
    switchMessage: Locator;
    deleteBtn: Locator;
    standandType: Locator;
    name: Locator;
    email: Locator;
    trainingStatus: Locator;
    trainerSyncInfo: Locator;
    trainerSyncSuccess: Locator;
    trainingStyleDropDownTrainer: Locator;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.manageBatchMenuLocators()
    }
    manageBatchMenuLocators() {
        this.syncEnded = this.page.locator('text=Batch sync completed successfully');
        this.syncStarted = this.page.locator('//div[@aria-label="Batch sync started"]');
        this.first = this.page.locator("//a[@aria-label='First']");
        this.previous = this.page.locator("//a[@aria-label='Previous']");
        this.next = this.page.locator("//a[@aria-label='Next']");
        this.last = this.page.locator("//a[@aria-label='Last']");
        this.manageBatch = this.page.locator("#manage-link");
        this.currentRadio = this.page.locator("#radioCurrent");
        this.previousRadio = this.page.locator("#radioPrevious");
        this.futureRadio = this.page.locator("#radioFuture");
        this.searchBtn = this.page.locator("#searchText");
        this.batchSync = this.page.locator("//button[@title='Click here to sync manually']");
        this.clearfilter = this.page.locator("div>#clearFilter");
        this.batchlist = this.page.locator("(//*[@id='batchPin'])[1]");
        this.archiveBtn = this.page.locator("(//input[@type='checkbox']/following-sibling::label)[1]");
        this.trainingStyleDropDown = this.page.locator("(//button[contains(@class,'dropdown-toggle waves-light')])[2]");
        this.standaredlist = this.page.locator("(//a[normalize-space(text()) = 'Standard'])[1]");
        this.productlist = this.page.locator("(//a[normalize-space(text()) = 'Project Based Training'])[1]");
        this.row = this.page.locator("//table[contains(@class,'table table-striped')]/tbody[1]/tr[1]");
        this.trainer = this.page.locator("(//div[contains(@class,'glyphicon glyphicon-user')])[1]");
        this.pdp = this.page.locator("(//a[@title='Show Trainees']/following-sibling::a)[1]");
        this.traineeSync = this.page.locator("(//a[@title='Sync Trainees'])[1]");
        this.trainingName = this.page.locator('text=Training Name');
        this.trainingType = this.page.locator('text=Training Type');
        this.coTrainer = this.page.locator("//strong[text()='Co-Trainer ']");
        this.trainingStyle = this.page.locator('text=Training Style');
        this.trainerText = this.page.locator('//strong[text()="Trainer "]');
        this.skillType = this.page.locator('text=Skill Type');
        this.location = this.page.locator('strong:has-text("Location")');
        this.startdate = this.page.locator('text=Start Date');
        this.endDate = this.page.locator('text=End Date');
        this.closeBtn = this.page.locator("(//button[@aria-label='Close']//span)[1]");
        this.switchBatch = this.page.locator("(//span[@tooltip='Switch Batch'])[1]");
        this.dropAddUser = this.page.locator("(//span[@class='fas fa-user-plus'])[1]");
        this.dropUser = this.page.locator("(//span[@class='fas fa-user-minus'])[1]");
        this.deleteUser = this.page.locator("(//span[@class='fas fa-trash-alt'])[1]");
        this.dropBtn = this.page.locator("//button[text()='Drop']");
        this.cancelBtn = this.page.locator("(//button[text()='Cancel'])[2]");
        this.switchBtn = this.page.locator("//button[text()='Switch']");
        this.conformYes = this.page.locator("//button[text()='Yes']");
        this.toogleBtn = this.page.locator("//span[@class='active-toggle']//a[1]");
        this.activeTrainers = this.page.locator("//div[@title='Active Number of Trainees']//p");
        this.switchConform = this.page.locator("//button[text()='Confirm']");
        this.conformationBtn = this.page.locator("(//button[@class='btn']/following-sibling::button)[2]");
        this.totalTrainers = this.page.locator('//div[@title="Total Number of Trainees(Active + Inactive)"]//p');
        this.searchSwitchBranch = this.page.locator("(//input[@type='search'])[2]");
        this.dropdownSelectBatch = this.page.locator("//app-batch-select-dropdown[@id='manageBatchDropdown']/div[1]/button[1]");
        this.clickSelectedBranch = this.page.locator("//ul[contains(@class,'for-manageBatch scrollbar')]//li[1]");
        this.switchMessage = this.page.locator("//small[@class='text-danger ng-star-inserted']");
        this.deleteBtn = this.page.locator("//button[@class='btn button']");
        this.standandType = this.page.locator("(//button[text()=' Standard '])[1]");
        this.name = this.page.locator("//strong[normalize-space(text())='Name']");
        this.email = this.page.locator("//strong[normalize-space(text())='Email']");
        this.trainingStatus = this.page.locator("//strong[normalize-space(text())='Training Status']");
        this.trainerSyncInfo = this.page.locator("//div[@id='toast-container']/div[contains(@class,'toast-info')]");
        this.trainerSyncSuccess = this.page.locator("//div[@id='toast-container']/div[contains(@class,'toast-success')]");
        this.trainingStyleDropDown = this.page.locator("(//button[contains(@class,'dropdown-toggle waves-light')])[2]");
        this.trainingStyleDropDownTrainer = this.page.locator("(//button[contains(@class,'dropdown-toggle waves-light')])[1]");
    };
    async viewTrainerColumn() {
        await this.waitForLocator(this.name);
        await this.waitForLocator(this.email);
        await this.waitForLocator(this.trainingStatus);
        await this.assertTrue(this.name);
        await this.assertTrue(this.email);
        await this.assertTrue(this.trainingStatus);
    }
    async validateTrainers(num: number) {
        await this.delay(3000);
        await this.mouseHover(this.row);
        let trainerCount = "(//a[@title='Show Trainees']//span[1])[1]";
        let ele = this.page.locator(trainerCount);
        console.log(await ele.innerText());
        expect(Number(await ele.innerText())).toEqual(num);
    }
    async closeBtnModel() {
        await this.assertTrue(this.closeBtn);
        await this.clickElement(this.closeBtn);
    }
    async assertColumnData() {
        await this.page.waitForLoadState('domcontentloaded');
        for (let i = 1; i <= 10; i++) {
            let dataTables = this.page.locator("//table[contains(@class,'table table-striped')]/tbody[1]/tr[1]/td[" + i + "]");
            await this.waitForLocator(dataTables);
            await this.assertTrue(dataTables);
        }
    }
    async viewSortTrainerColumn(name: string, position: number) {
        let headerElement = this.page.locator("//strong[normalize-space(text())='" + name + "']");
        await this.delay(5000);
        await this.clickElement(headerElement);
        await this.delay(3000);
        console.log('Clicked assending');
        let firstValueASC = this.page.locator(`//table[@class='table']/tbody[1]/tr[1]/td[${position}]`);
        let firstValueASCText: string[] = [];
        let text = await firstValueASC.textContent();
        if (text) {
            firstValueASCText.push(text);
            console.log(firstValueASCText[0]);
        }
        await this.clickElement(headerElement);
        await this.delay(3000);
        console.log('Clicked Desending');
        let firstValueDSC = this.page.locator(`//table[@class='table']/tbody[1]/tr[1]/td[${position}]`);
        let firstValueDSCText: string[] = [];
        let text2 = await firstValueDSC.textContent();
        if (text2) {
            firstValueDSCText.push(text2);
            console.log(firstValueDSCText[0]);
        }
        await this.clickElement(headerElement);
        await this.delay(3000);
        let lastValue = this.page.locator(`//table[@class='table']/tbody[1]/tr[1]/td[${position}]`);
        let text3 = await lastValue.textContent();
        if (text3) {
            console.log("text3", text3);
        }
        if (text3.length > 0)
            expect(firstValueASCText[0]).toBe(text3);

    }
    async defaultType() {
        await this.waitForLocator(this.standandType);
        await this.assertTrue(this.standandType);
    }
    async clickDeleteUser(num: number) {
        await this.assertTrue(this.deleteUser);
        await this.clickElement(this.deleteUser);
        await this.waitForLocator(this.deleteBtn);
        await this.assertTrue(this.deleteBtn);
        await this.holdAndClick(this.deleteBtn);
        expect(Number(await this.totalTrainers.textContent())).toEqual(num);
        await this.assertTrue(this.closeBtn);
        await this.clickElement(this.closeBtn);
    }
    async clickSwitchBranch() {
        await this.waitForLocator(this.switchBatch);
        await this.assertTrue(this.switchBatch)
        await this.clickElement(this.switchBatch);
    }
    async checkBatchPresent(name: string) {
        await this.waitForLocator(this.dropdownSelectBatch);
        await this.clickElement(this.dropdownSelectBatch);
        await this.waitForLocator(this.searchSwitchBranch);
        await this.fillText(this.searchSwitchBranch, name);
        let dropDownPresnt = this.page.locator("//a[contains(text(),'No results found')]");
        let visible = await dropDownPresnt.count();
        console.log(visible);
        if (visible > 0) {
            dropDownPresnt.click();

        } else {
            await this.waitForLocator(this.clickSelectedBranch);
            await this.clickElement(this.clickSelectedBranch);
        }
    }
    async selectBranch() {
        await this.clickElement(this.switchBtn);
    }
    async clickConformSwitchBatch() {
        await this.assertTrue(this.switchMessage);
        await this.clickElement(this.switchConform);
        await this.assertTrue(this.closeBtn);
        await this.clickElement(this.closeBtn);
    }
    async clickDropUser(num: number) {
        await this.assertTrue(this.dropUser);
        await this.clickElement(this.dropUser);
        await this.assertTrue(this.cancelBtn);
        await this.assertTrue(this.dropBtn);
        await this.clickElement(this.cancelBtn);
        await this.clickElement(this.dropUser);
        await this.clickElement(this.dropBtn);
        await this.assertTrue(this.conformationBtn);
        await this.clickElement(this.conformationBtn);
        await this.delay(2000);
        expect(Number(await this.activeTrainers.textContent())).toEqual(num);

    }
    async addDropUser(num: number) {
        await this.assertTrue(this.toogleBtn);
        await this.clickElement(this.toogleBtn);
        await this.assertTrue(this.dropAddUser);
        await this.clickElement(this.dropAddUser);
        await this.clickElement(this.cancelBtn);
        await this.clickElement(this.dropAddUser);
        await this.clickElement(this.conformYes);
        await this.clickElement(this.conformationBtn);
        await this.delay(2000);
        expect(Number(await this.totalTrainers.textContent())).toEqual(num);
    }
    async clickTrainer() {
        await this.mouseHover(this.row);
        await this.clickElement(this.trainer);
    }
    async clickActiveTrainers(num: number) {
        await this.delay(2000);
        await this.waitForLocator(this.toogleBtn);
        await this.assertTrue(this.toogleBtn);
        await this.clickElement(this.toogleBtn);
        expect(Number(await this.totalTrainers.textContent())).toEqual(num);
    }
    async clickTotalTrainers(num: number) {
        await this.waitForLocator(this.toogleBtn);
        await this.assertTrue(this.toogleBtn);
        await this.clickElement(this.toogleBtn);
        expect(Number(await this.activeTrainers.textContent())).toEqual(num);
    }


    async hoverAndClick() {
        await this.mouseHover(this.row);
        await this.waitForLocator(this.trainer);
        await this.waitForLocator(this.pdp);
        await this.waitForLocator(this.traineeSync);
        await this.assertTrue(this.trainer);
        await this.assertTrue(this.pdp);
        await this.assertTrue(this.traineeSync);
    }

    async clickPinBtn() {
        await this.page.waitForLoadState('load');
        await this.delay(2500);
        await this.assertTrue(this.batchlist);
        await this.clickElement(this.batchlist)
    }
    async traineeSyncClick() {
        await this.mouseHover(this.row);
        await this.delay(2000);
        await this.clickElement(this.traineeSync);
        await this.waitForLocator(this.trainerSyncInfo);
        await this.assertTrue(this.trainerSyncInfo);
        await this.waitForLocator(this.trainerSyncSuccess);
        await this.assertTrue(this.trainerSyncSuccess);
    }
    async searchBatch(text: string) {
        await this.page.reload();
        await this.page.waitForLoadState('networkidle');
        await this.waitForLocator(this.batchlist);
        await this.clear(this.searchBtn);
        await this.clearAndTypeEnter(this.searchBtn, text);
    }
    async selectStandaredType() {
        await this.clickElement(this.trainingStyleDropDown);
        await this.clickElement(this.standaredlist);
    }
    async selectProductType() {
        await this.clickElement(this.trainingStyleDropDown);
        await this.clickElement(this.productlist);
    }
    async selectStandaredTypeTrainer() {
        await this.clickElement(this.trainingStyleDropDownTrainer);
        await this.clickElement(this.standaredlist);
    }
    async selectProductTypeTrainer() {
        await this.clickElement(this.trainingStyleDropDownTrainer);
        await this.clickElement(this.productlist);
    }
    async valiadateTableColumn() {
        await this.assertTrue(this.trainingName);
        await this.assertTrue(this.trainingType);
        await this.assertTrue(this.coTrainer);
        await this.assertTrue(this.trainingStyle);
        await this.assertTrue(this.trainerText);
        await this.assertTrue(this.skillType);
        await this.assertTrue(this.location);
        await this.assertTrue(this.startdate);
        await this.assertTrue(this.endDate.first());
    }
    async clickPrevious() {
        await this.waitForLocator(this.previousRadio);
        let btn: boolean = await this.previousRadio.isDisabled();
        if (btn != true) {
            await this.clickElement(this.previousRadio);
        }
    }
    async clickFuture() {
        await this.waitForLocator(this.futureRadio);
        let btn: boolean = await this.futureRadio.isDisabled();
        if (btn != true) {
            await this.clickElement(this.futureRadio);
        }
    }
    async clickCurrent() {
        await this.waitForLocator(this.currentRadio);
        if (await this.currentRadio.isChecked()) {
            return true;
        } else {
            await this.currentRadio.click();
        }
    }
    async UIValiadtion() {
        await this.waitForLocator(this.manageBatch);
        await this.waitForLocator(this.currentRadio);
        await this.waitForLocator(this.previousRadio);
        await this.waitForLocator(this.futureRadio);
        await this.waitForLocator(this.searchBtn);
        await this.waitForLocator(this.batchSync);
        await this.assertTrue(this.manageBatch)
        await this.assertTrue(this.currentRadio);
        await this.assertTrue(this.previousRadio);
        await this.assertTrue(this.futureRadio);
        await this.assertTrue(this.searchBtn);
        await this.assertTrue(this.batchSync);
        await this.assertFalse(this.archiveBtn);
    }
    async UITrainerValiadtion() {
        await this.waitForLocator(this.manageBatch);
        await this.waitForLocator(this.currentRadio);
        await this.waitForLocator(this.previousRadio);
        await this.waitForLocator(this.futureRadio);
        await this.waitForLocator(this.searchBtn);
        await this.assertTrue(this.manageBatch)
        await this.assertTrue(this.currentRadio);
        await this.assertTrue(this.previousRadio);
        await this.assertTrue(this.futureRadio);
        await this.assertTrue(this.searchBtn);
        await this.assertFalse(this.archiveBtn);
    }
    async clickArchive() {
        await this.clickWithNavigation(this.archiveBtn);
    }
    async clickUnArchive() {
        await this.clickWithNavigation(this.archiveBtn);
    }
    async pagination() {
        let batchCount = "(//*[@id='batchPin'])";
        let batchValues = this.page.locator(batchCount);
        expect(await batchValues.count()).toBe(20);
        await this.assertTrue(this.first);
        await this.assertTrue(this.previous);
        await this.assertTrue(this.next);
        await this.assertTrue(this.last);
        await this.clickElement(this.last);
        await this.clickElement(this.previous);
        await this.clickElement(this.next);
        await this.clickElement(this.first);
    }
    async naviagateToManageBatch() {
        await Promise.all([
            this.page.waitForResponse(resp => resp.url().includes('/batch/batches/all') && resp.status() === 200),
            this.clickWithNavigation(this.manageBatch),
        ]);
    }

    async selectCurrentBatch(batchname: string) {
        if (await this.currentRadio.isChecked()) {
            await this.clearAndTypeEnter(this.searchBtn, batchname);
            await this.delay(3000);
            if ((await this.batchlist.count()) > 0) {
                return true;
            } else return false;
        } else {
            await this.clickElement(this.currentRadio);
            await this.clearAndType(this.searchBtn, batchname);
            if ((await this.batchlist.count()) > 0) {
                return true;
            } else return false;
        }
    }
    async selectPreviousBatch(batchname: string) {
        this.clickElement(this.previousRadio);
        if (await this.previousRadio.isChecked()) {
            await this.clearAndTypeEnter(this.searchBtn, batchname);
            await this.delay(3000);
            if ((await this.batchlist.count()) > 0) {
                return true;
            } else return false;
        }
    }
    async selectFutureBatch(batchname: string) {
        await this.clickElement(this.futureRadio);
        if (await this.futureRadio.isChecked()) {
            await this.clearAndTypeEnter(this.searchBtn, batchname);
            await this.delay(3000);
            if ((await this.batchlist.count()) > 0) {
                return true;
            } else return false;
        }
    }
    clearSearchBtn = "//i[contains(@class,'fa fa-close')][1]";

    async searchBatchForAllBatch(batchname: string) {
        await this.page.reload();
        await this.page.waitForLoadState('networkidle');
        if (await this.selectCurrentBatch(batchname))
            this.log("batch selected from current");
        else if (await this.selectPreviousBatch(batchname))
            this.log("batch selected from previous");
        else if (await this.selectFutureBatch(batchname))
            this.log("batch selected from future");
        else this.log("batch is not available");
    }
    async clearSearch() {
        await this.clear(this.searchBtn);
    }
    async clickSyncBtn() {
        await Promise.all([
            this.waitForLocator(this.batchSync),
            this.page.waitForResponse(resp => resp.url().includes('/sync/status/BS') && resp.status() === 200, { 'timeout': 50000 }),
            this.page.waitForResponse(resp => resp.url().includes('/sync') && resp.status() === 200, { 'timeout': 50000 }),
            this.clickElement(this.batchSync),
        ]);
        await this.waitForLocator(this.syncStarted);
        await this.verifyTosterMessageCaliber('Batch sync started');
        await this.waitForLocator(this.syncEnded);
        await this.verifyTosterMessageCaliber('Batch sync completed successfully')
    }
    async confirmSortingWorks(headerColumn: string, Table: string, position: number) {
        let headerElement = this.page.locator("(//a[contains(.,'" + headerColumn + "')]//following-sibling::span)[1]");
        await this.delay(5000);
        await this.clickElement(headerElement);
        await this.delay(3000);
        console.log('Clicked assending');
        let firstValueASC = this.page.locator(`(//table[@aria-label="${Table}"]//tbody/tr[1]/td[${position}])[1]`);
        let firstValueASCText: string[] = [];
        let text = await firstValueASC.textContent();
        if (text) {
            firstValueASCText.push(text);
            console.log(firstValueASCText[0]);
        }
        await this.clickElement(headerElement);
        await this.delay(3000);
        console.log('Clicked Desending');
        let firstValueDSC = this.page.locator(`(//table[@aria-label="${Table}"]//tbody/tr[1]/td[${position}])[1]`);
        let firstValueDSCText: string[] = [];
        let text2 = await firstValueDSC.textContent();
        if (text2) {
            firstValueDSCText.push(text2);
            console.log(firstValueDSCText[0]);
        }
        let clickLast = this.page.locator("//a[@aria-label='Last']");
        this.clickElement(clickLast);
        await this.delay(3000);
        let lastValue = this.page.locator(`(//table[@aria-label='${Table}']//tbody/tr[last()]/td[${position}])`);
        let text3 = await lastValue.textContent();
        if (text3) {
            console.log("text3", text3);
        }
        if (text3.length > 0)
            expect(firstValueASCText[0]).toBe(text3);

    }
    async clearFilter() {
        let disable = await this.clearfilter.isDisabled();
        if (disable) {
            await this.clearfilter.click();
        }
        await this.delay(4000);
        await this.assertTrue(this.batchlist);
    }
    async filtersCheck(
        containerName: string,
        tableContainer: string,
        columnPostion: number
    ) {
        let filter = this.page.locator(`//*[@id='${containerName}']//i`);
        let clearFilter = this.page.locator(`//*[@id='${containerName}']/following-sibling::div//a[contains(text(),'Clear')]`);
        let listOfFilterElements = this.page.locator(`//*[@id='${containerName}']/following-sibling::div//label`);
        let applyFilter = this.page.locator(`//*[@id='${containerName}']/following-sibling::div//a[contains(text(),'Apply')]`);
        let columnInTable = this.page.locator(`//*[@aria-label='${tableContainer}']//tbody/tr[1]/td[${columnPostion}]`);
        let listCount = await listOfFilterElements.count();
        console.log(listCount);
        for (let i = 0; i < listCount; i++) {
            await filter.click();
            await clearFilter.click();
            await listOfFilterElements.nth(i).click();
            await this.delay(2000);
            let filterText = await listOfFilterElements.nth(i).textContent();
            await applyFilter.click();
            let tableContentCount = await columnInTable.count();
            for (let i = 0; i < tableContentCount; i++) {
                await this.delay(3000);
                expect(await columnInTable.nth(i).textContent()).toContain(filterText);
            }
        }
        await filter.click();
        await clearFilter.click();
        await applyFilter.click();
    }

    async filterNoUserWithName(containerName: string,
        searchId: string,
        text: string,
        postion: number) {
        let filter = this.page.locator(`//*[@id='${containerName}']//i`);
        let clearFilter = this.page.locator(`//*[@id='${containerName}']/following-sibling::div//a[contains(text(),'Clear')]`);
        let searchText = this.page.locator(`//*[@id='${searchId}']`);
        let noResult = this.page.locator(`(//div[text()=' Search yielded no results'])[${postion}]`);
        await filter.click();
        await clearFilter.click();
        await searchText.type(text);
        await this.assertTrue(noResult);
    }
    async filtersCheckWithName(
        containerName: string,
        tableContainer: string,
        searchId: string,
        text: string,
        columnPostion: number
    ) {
        let filter = this.page.locator(`//*[@id='${containerName}']//i`);
        let clearFilter = this.page.locator(`//*[@id='${containerName}']/following-sibling::div//a[contains(text(),'Clear')]`);
        let listOfFilterElements = this.page.locator(`//*[@id='${containerName}']/following-sibling::div//label`);
        let applyFilter = this.page.locator(`//*[@id='${containerName}']/following-sibling::div//a[contains(text(),'Apply')]`);
        let columnInTable = this.page.locator(`//*[@aria-label='${tableContainer}']//tbody/tr[1]/td[${columnPostion}]`);
        let searchText = this.page.locator(`//*[@id='${searchId}']`)
        await filter.click();
        await clearFilter.click();
        await searchText.type(text);
        await listOfFilterElements.nth(0).click();
        await this.delay(2000);
        let filterText = await listOfFilterElements.nth(0).textContent();
        await applyFilter.click();
        let tableContentCount = await columnInTable.count();
        for (let i = 0; i < tableContentCount; i++) {
            await this.delay(3000);
            expect(await columnInTable.nth(i).textContent()).toContain(filterText);
        }
        await filter.click();
        await clearFilter.click();
        await applyFilter.click();
    }
    async filtersCheckAllFilters(
        containerName: string,
    ) {
        let filter = this.page.locator(`//*[@id='${containerName}']//i`);
        let clearFilter = this.page.locator(`//*[@id='${containerName}']/following-sibling::div//a[contains(text(),'Clear')]`);
        let listOfFilterElements = this.page.locator(`//*[@id='${containerName}']/following-sibling::div//label`);
        let applyFilter = this.page.locator(`//*[@id='${containerName}']/following-sibling::div//a[contains(text(),'Apply')]`);
        await filter.click();
        await clearFilter.click();
        let listFilter = await listOfFilterElements.count();
        for (let i = 0; i < listFilter; i++) {
            await listOfFilterElements.nth(i).click();
            await listOfFilterElements.nth(i).textContent();
        }
        await applyFilter.click();
        await filter.click();
        await clearFilter.click();
        await applyFilter.click();
    }
}