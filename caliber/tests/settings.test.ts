import test from '../lib/BasePages';
import { environment } from '../lib/environment';
import { Utils } from '../lib/utils';

const utilsPage = new Utils()
let categoryName: string = "AutoTest_Category_" + utilsPage.getTimeStamp();
let updatedCategoryName: string = "Auto_update_Category_" + utilsPage.getTimeStamp();
let locationName: string = "Revature LLC, Reston VA 20190";
let officeName: string = "N/A";

test.describe("Creation of Categories,Locations,Trainers for Settings Menu", () => {
    // ROLE: VP
    test("login as Vp_user", async ({ login, home, settings }) => {
        await test.step('To verify user navigate to signup url', async () => {
            await login.caliberAppInitialize();
            await login.clickSignUpBtn()
            await login.caliberlogin(environment.vpuser, environment.password, true);
        });
        await test.step('Verify Home page', async () => {
            await login.validationCaliberVPPage();
            await home.validateHomePage();
        });
        await test.step('TC_001 - Verify Settings drop-down', async () => {
            await settings.clickSettingsDropDown(true);
        });
        await test.step('TC_002, TC_003 - Verify trainer details page', async () => {
            await settings.trainersDetailPage(environment.vpUserName);
        });
        await test.step('TC_004, TC_005 - Verify location detail page', async () => {
            await settings.locationDetailPage(locationName, officeName);
        });
        await test.step('TC_006 - Verify category detail page', async () => {
            await settings.categoryDetailPage();
        });
        await test.step('TC_007, TC_008 - Verify, User able to add the assessment category', async () => {
            await settings.addAssessmentCategory(categoryName);
        });
        await test.step('TC_009 - Verify, User able to add the assessment category', async () => {
            await settings.editAssessmentCategory(categoryName, updatedCategoryName);
        });
        await test.step('TC_011 - Verify, User able to Inactivate the assessment category by clicking on the specific category.', async () => {
            await settings.deActivateCategory(updatedCategoryName);
        });
        await test.step('TC_010 - Verify, User able to activate the assessment category by clicking on the specific category.', async () => {
            await settings.activateCategory(updatedCategoryName);
        });
        await test.step('To verify user can able to logout', async () => {
            await login.caliberlogout();
        });
    });
    // ROLE: QC MEMBER
    test("login as QC_user", async ({ login, home, settings }) => {
        await test.step('To verify user navigate to signup url', async () => {
            await login.caliberAppInitialize();
            await login.clickSignUpBtn()
            await login.caliberlogin(environment.caliberQc, environment.password, true);
        });
        await test.step('TC_001 - Verify Settings drop-down', async () => {
            await settings.clickSettingsDropDown(false);
        });
        await test.step('TC_002 - Verify category detail page', async () => {
            await settings.categoryDetailPage();
        });
        await test.step('TC_003, TC_004 - Verify, User able to add the assessment category', async () => {
            await settings.addAssessmentCategory(categoryName);
        });
        await test.step('TC_005 - Verify, User able to add the assessment category', async () => {
            await settings.editAssessmentCategory(categoryName, updatedCategoryName);
        });
        await test.step('TC_007 - Verify, User able to Inactivate the assessment category by clicking on the specific category.', async () => {
            await settings.deActivateCategory(updatedCategoryName);
        });
        await test.step('TC_006 - Verify, User able to activate the assessment category by clicking on the specific category.', async () => {
            await settings.activateCategory(updatedCategoryName);
        });
        await test.step('To verify user can able to logout', async () => {
            await login.caliberlogout();
        });
    });
});
// test.describe("Creation of ", () => {
//     test("login as Vp_user", async ({ login, home, settings }) => {
//         await test.step('To verify user navigate to signup url', async () => {
//             await login.caliberAppInitialize();
//             await login.clickSignUpBtn()
//             await login.caliberlogin(environment.vpuser, environment.password, true);
//         });
//         await test.step('Verify Home page', async () => {
//             await login.validationCaliberVPPage();
//             await home.validateHomePage();
//         });
//         await test.step('TC_001 - Verify Settings drop-down', async () => {
//             await settings.clickSettingsDropDown(true);
//         });
//         await test.step('TC_002, TC_003 - Verify trainer details page', async () => {
//             await settings.trainersDetailPage(environment.vpUserName);
//         });
//         await test.step('TC_004, TC_005 - Verify location detail page', async () => {
//             await settings.locationDetailPage(locationName, officeName);
//         });
//         await test.step('TC_006 - Verify category detail page', async () => {
//             await settings.categoryDetailPage();
//         });
//         await test.step('TC_007, TC_008 - Verify, User able to add the assessment category', async () => {
//             await settings.addAssessmentCategory(categoryName);
//         });
//         await test.step('TC_009 - Verify, User able to add the assessment category', async () => {
//             await settings.editAssessmentCategory(categoryName, updatedCategoryName);
//         });
//         await test.step('TC_011 - Verify, User able to Inactivate the assessment category by clicking on the specific category.', async () => {
//             await settings.deActivateCategory(updatedCategoryName);
//         });
//         await test.step('TC_010 - Verify, User able to activate the assessment category by clicking on the specific category.', async () => {
//             await settings.activateCategory(updatedCategoryName);
//         });
//         await test.step('To verify user can able to logout', async () => {
//             await login.caliberlogout();
//         });
//     });
//     // ROLE: QC MEMBER
//     test("login as QC_user", async ({ login, home, settings }) => {
//         await test.step('To verify user navigate to signup url', async () => {
//             await login.caliberAppInitialize();
//             await login.clickSignUpBtn()
//             await login.caliberlogin(environment.caliberQc, environment.password, true);
//         });
//         await test.step('TC_001 - Verify Settings drop-down', async () => {
//             await settings.clickSettingsDropDown(false);
//         });
//         await test.step('TC_002 - Verify category detail page', async () => {
//             await settings.categoryDetailPage();
//         });
//         await test.step('TC_003, TC_004 - Verify, User able to add the assessment category', async () => {
//             await settings.addAssessmentCategory(categoryName);
//         });
//         await test.step('TC_005 - Verify, User able to add the assessment category', async () => {
//             await settings.editAssessmentCategory(categoryName, updatedCategoryName);
//         });
//         await test.step('TC_007 - Verify, User able to Inactivate the assessment category by clicking on the specific category.', async () => {
//             await settings.deActivateCategory(updatedCategoryName);
//         });
//         await test.step('TC_006 - Verify, User able to activate the assessment category by clicking on the specific category.', async () => {
//             await settings.activateCategory(updatedCategoryName);
//         });
//         await test.step('To verify user can able to logout', async () => {
//             await login.caliberlogout();
//         });
//     });
// });




