import { ElementHandle, expect, Locator, Page } from '@playwright/test';
import path from 'path';
import { environment } from './environment';
const waitForElement = 100000;
export class WebActions {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    /**
     * @description Naviagte to url
     * @param  Url
     **/
    async navigateToURL(url: any) {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.goto(url)
        ]);
    }
    /**
  * @description wait for locator
  * @param  state and timeout
  **/
    async waitForLocator(locator: Locator) {
        await locator.waitFor({ 'state': 'visible', 'timeout': waitForElement });
    }
    /**
     * @description Wait for the element present
     * @param  pass Web element 
     **/
    async waitForElementAttached(locator: string) {
        await this.page.waitForSelector(locator);
    }
    /**
    * @description Click element with Navigation
    * @param  Pass Web element 
    **/
    async clickWithNavigation(locator: Locator) {
        await Promise.all([
            this.page.waitForNavigation(),
            locator.click()
        ]);
    }
    /**
     * @description Wait for Navigation in web page
     * @param  Pass event for load web page
     **/
    async waitForPageNavigation(event: any) {
        switch (event.toLowerCase()) {
            case `networkidle`:
                await this.page.waitForNavigation({ waitUntil: `networkidle`, timeout: waitForElement });
                break;
            case `load`:
                await this.page.waitForNavigation({ waitUntil: `load`, timeout: waitForElement });
                break;
            case `domcontentloaded`:
                await this.page.waitForNavigation({ waitUntil: `domcontentloaded`, timeout: waitForElement });
        }
    }
    /**
     * @description Wait for element in web page
     * @param  Pass time for load web page
     **/
    async delay(time: number) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }
    /**
     * @description Click On Element In Web page
     * @param  Pass Web Element to Click on Web Page
     **/
    async clickElement(locator: Locator) {
        await locator.click();
    }
    /**
       * @param  webElement
       * @description switch to frame using WebElement
    **/
    async switchToFrameUsingWebElement(framelocator: any, locator: any, text: any) {
        await this.page.waitForSelector(framelocator);
        const frameElementHandle = this.page.locator(framelocator);
        const frame = await (await frameElementHandle.elementHandle()).contentFrame();
        if (frame != null) {
            await frame.fill(locator, text);
        }
    }
    /**
          * @param  webElement
          * @description clear using WebElement
       **/
    async clear(locator: Locator) {
        await this.waitForLocator(locator);
        await locator.click({ clickCount: 3 });
        await locator.press('Backspace');
        await locator.press('Enter');
    }
    /**
       * @param  webElement
       * @description Scroll to WebElement
    **/
    async scrollTo(locator: any) {
        const scrollable_section = await this.page.$(locator)
        await this.page.waitForSelector(locator);
        await this.page.evaluate(selector => {
            const scrollableSection = document.querySelector(selector);
            scrollableSection.scrollTop = scrollableSection.offsetHeight;
        }, scrollable_section);
    }
    /**
 * @param  element
 * @description Click on Scroll and Click
 **/
    async scrollAndClick(locator: Locator) {
        await locator.focus();
        await locator.click();
    }
    /**
   * @param  windowNumber,Web element
   * @description switch to window
   **/
    async switchToWindow(locator: any | Locator, windowNumber: number) {
        const [multipage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            await this.page.click(locator)
        ])
        await multipage.waitForLoadState();
        const allwindows = this.page.context().pages();
        console.log("no.of windows: " + allwindows.length);
        allwindows.forEach(page => {
            console.log(page.url());
        });
        await allwindows[windowNumber].bringToFront();
    };
    /**
  * @param  WebElement
  * @description javascript executor click
  **/
    async clickElementJS(locator: any | Locator) {
        await this.waitForElementAttached(locator);
        await this.page.$eval(locator, (element: HTMLElement) => element.click());
    }
    /**
 * @param  WebElement
 * @description Mouse hover of an Web Element
 **/
    async mouseHover(locator: Locator) {
        await this.waitForLocator(locator);
        await locator.hover();
    }
    /**
    * @param  WebElement
    * @description Mouse hover and click of an Web Element
    **/
    async boundingBoxClickElement(locator: any | Locator) {
        await this.delay(1000);
        const elementHandle = await this.page.$(locator);
        const box = await elementHandle.boundingBox();
        await this.page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    }
    /**
        * @param  WebElement,Text value
        * @description Type data in WebElement
    **/
    async fillText(locator: Locator, text: any) {
        await locator.fill(text);
    }
    /**
       * @param  WebElement,Option
       * @description Select options from dropdown.
   **/
    async selectOptionFromDropdown(locator: Locator, option: any) {
        await locator.type(option);
    }
    /**
      * @param  WebElement
      * @description Download and save files in folder.
  **/
    async downloadFile(locator: any | Locator): Promise<any> {
        const [download] = await Promise.all([
            this.page.waitForEvent(`download`),
            this.page.click(locator)
        ]);
        await download.saveAs(path.join(__dirname, `../Downloads`, download.suggestedFilename()));
        return download.suggestedFilename();
    }

    async keyPress(locator: Locator, key: any) {
        await locator.press(key);
    }
    /**
       * @param  WebElement,Text
       * @description Get text from element.
   **/
    async verifyJSElementValue(locator: any | Locator, text: any) {
        await this.waitForElementAttached(locator);
        const textValue = await this.page.$eval(locator, (element: HTMLInputElement) => element.value);
        expect(textValue.trim()).toBe(text);
    }

    async verifyElementAttribute(locator: any | Locator, attribute: any, value: any) {
        await this.waitForElementAttached(locator);
        const textValue = await this.page.getAttribute(locator, attribute);
        expect(textValue).toBe(value);
    }
    /**
   * @param element
   * @param text
   * @description type on an input field and click ENTER
   **/
    async typeAndEnter(locator: Locator, text: any) {
        await locator.type(text);
        await locator.press('Enter');
    }
    async typeText(locator, text) {
        await locator.type(text);
    }
    /**
     * @param element
     * @param text
     * @description type on an input field and click TAB
     **/
    async typeAndTab(locator: Locator, text: any) {
        await locator.type(text);
        await locator.press('Tab');
    }
    /**
     * @param  element
     * @param  text
     *  @description clear the field type on an input box
     **/
    async clearAndType(locator: Locator, text: any) {
        await locator.fill(text);
    }
    async clearAndTypeTab(locator: Locator, text: any) {
        await locator.fill(text);
        await locator.press('Tab');
    }
    async clearAndTypeEnter(locator: Locator, text: any) {
        await locator.fill(text);
        await locator.press('Enter', { 'timeout': 3000 });
    }
    async typePauseEnter(locator: Locator, text: any) {
        await locator.fill(text);
        await this.page.waitForTimeout(2000);
        await locator.press('Enter');
    }
    /**
     * @description Accepts an alert
     **/
    async acceptAlert(locator: Locator) {
        this.page.on('dialog', dialog => dialog.accept());
        await locator.click();
    }
    /**
     * @description Dismiss an alert
     **/
    async dismissAlert(locator: Locator) {
        this.page.on('dialog', dialog => dialog.dismiss());

        await locator.click();
    }
    /**
     * @description Type and accepts in alert
     **/
    async typeInAlert(locator: Locator, text: any) {
        this.page.on('dialog', dialog =>
            dialog.accept(text));

        await locator.click();
    }
    /**
     * @description Get alert text
     **/
    async getAlertText(locator: Locator) {
        this.page.on("dialog", (dialog) => {
            return dialog.message();
        });
        await locator.click();
    }
    /**
     * @param ele ElementFinder
     * @description wait until the element disappears
     **/
    async invisiblity(locator: Locator) {
        await locator.waitFor({ state: "detached" });
    }
    /**
     * @param src Source element
     * @param trgt Target element
     **/
    async dragAndDrop(source: string, target: string) {
        await this.page.waitForSelector(source);
        await this.page.waitForSelector(target);
        await this.page.dragAndDrop(source, target, { 'force': true });
    }
    async selectDropdownbyNum(locator: Locator | any, optionNum: string | string[] | ElementHandle<Node> | { value?: string; label?: string; index?: number; } | ElementHandle<Node>[] | { value?: string; label?: string; index?: number; }[]) {
        const option = await this.page.$(locator);
        await option?.selectOption(optionNum);
    }
    async selectDropdownbyValue(suggesestionDivID: any, visibleText: string) {
        let locator =
            this.page.locator(`//*[@id='${suggesestionDivID}']//*[contains(text(),'${visibleText.trim()}')]`);
        await locator.click()
    }
    /**
     * @param fileElement
     * @param fileType
     **/
    async uploadAttachment(fileElement: string, fileType: any) {
        let fileToUpload = "../common/test-data/file-uploads/" + fileType;
        this.page.on("filechooser", async (filechooser) => {
            await filechooser.setFiles(fileToUpload)
        })
        await this.page.click(fileElement, { force: true })
    }
    /**
     * @param 
     **/
    async assertFalse(locator: Locator) {

        let hidden = await locator.isHidden();
        expect(hidden).toBeTruthy();
    }
    async assertChecked(locator: Locator) {
        let checked = await locator.isChecked();
        expect(checked).toBeTruthy();
    }
    async assertUnChecked(locator: Locator) {

        let checked = await locator.isChecked();
        expect(checked).toBeFalsy();
    }
    /**
     * @param ele pass the element to do the isDisplayed validation
     **/
    async assertTrue(locator: Locator) {
        await this.waitForLocator(locator);
        await locator.scrollIntoViewIfNeeded();
        let visible = await locator.isVisible();
        expect(visible).toBeTruthy();
    }
    async assertEnabled(locator: Locator) {
        let enable = await locator.isEnabled();
        expect(enable).toBeTruthy();
    }

    async assertDisable(locator: Locator) {
        let disable = await locator.isDisabled();
        expect(disable).toBeTruthy();
    }
    async assertLowerText(locator: Locator, text: string) {

        let textContent = await locator.innerText()
        expect(textContent.trim().toLowerCase()).toContain(text.toLowerCase().trim());
    };
    public async verifyTosterMessageNewUi(text) {
        let toaster = 'mdb-toast-component';
        let locator = this.page.locator(toaster);
        expect(await locator.textContent()).toContain(text);
    }
    public async verifyTosterMessageCaliber(text) {
        let toaster = "//div[@id='toast-container']";
        let locator = this.page.locator(toaster);
        await this.waitForLocator(locator);
        expect(await locator.textContent({ 'timeout': 50000 })).toContain(text);
    }
    async assertText(locator: Locator, text: string) {
        expect(locator).toContainText(text, { 'timeout': 4000 });
    }
    async assertPageTitle(title: any) {
        await this.delay(waitForElement)
        await expect(this.page).toHaveTitle(title);
    }
    async assertPageUrl(url: any) {
        await expect(this.page).toHaveURL(url)
    }
    async holdAndClick(locator: Locator) {
        const box = await locator.boundingBox();
        await locator.click({ delay: 5000 });

    }
    public log(...value: any[]) {
        if (environment.DEBUG) {
            console.log(value);
        }
    }


}