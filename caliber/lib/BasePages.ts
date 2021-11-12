import { test as baseTest, TestInfo } from '@playwright/test';

import { SignUpUsingApi } from './frontendAPI';
import { Common } from './common';
import { HomeMenu } from '../pages/homePage';
import { BatchCreation } from '../newUI/admin/batchCreation';
import { ManageBatchMenu } from '../pages/manageBatch';
import { LoginPage } from '../pages/loginPage';
import { SettingsMenu } from '../pages/settings';
import { AccessBatchMenu } from '../pages/accessBatch';
import { QualityAuditMenu } from '../pages/qualityAudit';

const test = baseTest.extend<{
    common: Common;
    signUp: SignUpUsingApi;
    login: LoginPage;
    batch: BatchCreation;
    home: HomeMenu;
    manageBatch: ManageBatchMenu;
    access: AccessBatchMenu;
    settings: SettingsMenu;
    quality: QualityAuditMenu;
    testInfo: TestInfo;
}>({
    common: async ({ page }, use) => {
        await use(new Common(page));
    },
    signUp: async ({ page }, use) => {
        await use(new SignUpUsingApi(page))
    },
    login: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    home: async ({ page }, use) => {
        await use(new HomeMenu(page));
    },
    batch: async ({ page }, use) => {
        await use(new BatchCreation(page));
    },
    manageBatch: async ({ page }, use) => {
        await use(new ManageBatchMenu(page));
    },
    settings: async ({ page }, use) => {
        await use(new SettingsMenu(page));
    },
    access: async ({ page }, use) => {
        await use(new AccessBatchMenu(page));
    },
    quality: async ({ page }, use) => {
        await use(new QualityAuditMenu(page));
    }

});
export default test;
export const expect = test.expect;