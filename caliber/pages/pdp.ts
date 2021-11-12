import { Page } from "@playwright/test";
import { WebActions } from "../lib/webElementAction";

export class PdpPage extends WebActions {
    readonly page: Page;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.pdpLocators()
    }
    pdpLocators() {

    }
}