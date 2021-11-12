import test from '../lib/basePages';
import { environment } from '../lib/environment';
test.describe("Validation for HomePage", () => {
    test("login as Vp_user", async ({ login, home }) => {
        await test.step('To verify user navigate to signup url', async () => {
            await login.caliberAppInitialize();
            await login.clickSignUpBtn()
            await login.caliberlogin(environment.vpuser, environment.password, true);
        });
        await test.step('TC_018,TC_034 To verify Home page', async () => {
            await login.validationCaliberVPPage();
            await home.validateHomePage();
        });
        await test.step('TC_008,TC_009,TC_010,TC_011,TC_012,TC_024 To verify view all status', async () => {
            await home.viewAllStatus();
        });
        await test.step(' TC_004,TC_005,TC_006,TC_007,TC_029 To verify,"Last Quality Audit" table is displaying in home menu', async () => {
            await home.validateLastQualityTable();
        });
        await test.step('TC_031 To verify,Following columns are displaying in "Missing Grades Report":1. Trainer2. Skill type3. Missing Week 4. Location', async () => {
            await home.validateMissedWeekTable();
        });
        await test.step('TC_013,TC_030 To verify and select the location', async () => {
            await home.selectLocation();
        });
        await test.step('TC_032 To verify user can remove the week', async () => {
            await home.removeWeekButton();
        });
        await test.step('TC_033,TC-035 To verify user can add the week from include week', async () => {
            await home.selectRemovedWeek();
        });
        await test.step('To verify user can able to logout', async () => {
            await login.caliberlogout();
        });
    });
    test("login as QC_user", async ({ login, home }) => {
        await test.step('To verify user navigate to signup url', async () => {
            await login.caliberAppInitialize();
            await login.clickSignUpBtn()
            await login.caliberlogin(environment.caliberQc, environment.password, true);

        });
        await test.step('TC_018,TC_034 To verify Home page', async () => {
            await login.validationCaliberQCPage();
            await home.validateHomePage();
        });
        await test.step('TC_008,TC_009,TC_010,TC_011,TC_012,TC_024 To verify view all status', async () => {
            await home.viewAllStatus();
        });
        await test.step(' TC_004,TC_005,TC_006,TC_007,TC_029 To verify,"Last Quality Audit" table is displaying in home menu', async () => {
            await home.validateLastQualityTable();
        });
        await test.step('TC_031 To verify,Following columns are displaying in "Missing Grades Report":1. Trainer2. Skill type3. Missing Week 4. Location', async () => {
            await home.validateMissedWeekTable();
        });
        await test.step('TC_013,TC_030 To verify and select the location', async () => {
            await home.selectLocation();
        });
        await test.step('TC_032 To verify user can remove the week', async () => {
            await home.removeWeekButton();
        });
        await test.step('TC_033,TC-035 To verify user can add the week from include week', async () => {
            await home.selectRemovedWeek();
        });
        await test.step('To verify user can able to logout', async () => {
            await login.caliberlogout();
        });
    });
});





