import test from '../lib/BasePages';
import { environment } from '../lib/environment';
import { Utils } from '../lib/Utils';
import * as batchData from './../utils/test-data/ft-curriculum-data.json';
let utils = new Utils();
let batchName: string;
//let batchName: string = batchData.batchName[0];
test.describe("Batch management for VP_USER", () => {
    test("Test data creation", async ({ batch, common, signUp }) => {
        let emailId: string[] = [];
        await test.step("Create users", async () => {
            let email: string;
            for (let i = 0; i < 5; i++) {
                email = utils.getRandomEmail();
                await signUp.userSignupAndActivationWithEmail(email);
                emailId.push(email);
                await common.logOutFromFrontEnd();
            };
        })
        await test.step('To verify user navigate to signup url', async () => {
            await common.coreAppInitialize();
            await common.loginIntoCore(environment.vpUserEmail, environment.password);
            await common.clickTrainingMenu();
            await common.clickAdminMenu();
            await common.clickCurriculumMapping();
        });
        await test.step('create batch', async () => {
            batchName = utils.getBatchName();
            common.setFtCurriculumData('batchName', batchName);
            await batch.createBatch(batchName, environment.trainerUserName, environment.vpUserName, environment.qcUserName, environment.usTimeZone);
        });
        await test.step('Map user to the batch', async () => {
            await common.clickAdminMenu();
            await common.clickTrainingMenu();
            await common.settingsMenu();
            await batch.openBatch(batchName, "");
            await batch.addSingleAndMultipleTrainees(`${emailId[0]}, ${emailId[1]}, ${emailId[2]}, ${emailId[3]}, ${emailId[4]}`)
            await common.clicklogoutNewUI();
        });
    });
    test("Navigate to Vp_user For manage batch", async ({ login, manageBatch }) => {
        await test.step('Navigate to caliber', async () => {
            await login.caliberAppInitialize();
            await login.clickSignUpBtn();
            await login.caliberlogin(environment.vpuser, environment.password, true);
        });
        await test.step('Navigate to manage batch', async () => {
            await manageBatch.naviagateToManageBatch();
        });
        await test.step('TC_001 To verify,Following buttons are displaying in Manage batch page:1. Current radio 2. Previous radio3. Future radio4. "Show archived batches only" toggle 5. "Batch sync" button', async () => {
            await manageBatch.UIValiadtion();
        });
        await test.step('TC_012 To verify, User able to view the following columns: 1.Training Name2.Training Type 3.Skill Type4.Trainer5.Co-Trainer6.Location7.Start Date8.End Date9.Training Style 10.Actions', async () => {
            await manageBatch.valiadateTableColumn();
        });
        await test.step('TC_013,TC_014,TC_015,TC_016,TC_017,TC_018,TC_019,TC_020 User able to view Training batch names under Training name column', async () => {
            await manageBatch.assertColumnData();
        });
        await test.step('TC_002 To verify,The Current radio buttons is selected By-default and It is displaying only the Current (i.e., On going)batches', async () => {
            await manageBatch.clickCurrent();
        });
        await test.step('TC_003 To verify,The Previous radio option is displaying only the Previous (i.e., Completed) batches', async () => {
            await manageBatch.clickPrevious();
        });
        await test.step('TC_004 To verify,The Future radio option is displaying only the Future (i.e., Upcoming) batches', async () => {
            await manageBatch.clickFuture();
        });
        await test.step('Current', async () => {
            await manageBatch.clickCurrent();
        });
        // await test.step("Click Archive Batch", async () => {
        //     await manageBatch.clickArchive();
        // });
        // await test.step("Click Unarchive Batch", async () => {
        //     await manageBatch.clickUnArchive();
        // });
        await test.step('TC_010 To verify,The Manual batch sync functionality is syncing all the batches having Last_Modified_Date from in-between 3 days before(past) the Current (Syncing)date ', async () => {
            await manageBatch.clickSyncBtn();
        });
        await test.step('TC_007 To verify,User is able to search a Training name using Wildcard character pattern', async () => {
            await manageBatch.searchBatchForAllBatch(batchName);
        });
        await test.step('TC_048 To verify,User able to pin the specific batch ', async () => {
            await manageBatch.searchBatch(batchName);
            await manageBatch.clickPinBtn();
        });
        await test.step('TC_022 To verify, User able to view "Standard" options as default ', async () => {
            await manageBatch.defaultType();
        });
        await test.step("TC_014,TC_021,TC_022,TC_023 To verify,User able to view the following option based on batch training type ", async () => {
            await manageBatch.selectProductType();
            await manageBatch.selectStandaredType();
        });
        let table = "batchListTable";
        await test.step("TC_013,TC_058,TC_059,TC_060 Verify Training Name Sorting in Batch Dashboard page", async () => {
            await manageBatch.clearSearch();
            let pos = 1;
            await manageBatch.confirmSortingWorks("Training Name", table, pos);
        });
        await test.step("TC_016,TC_058,TC_059,TC_060 Verify Trainer Name Sorting in Batch Dashboard page", async () => {
            let pos = 5;
            await manageBatch.confirmSortingWorks("Trainer", table, pos);
        });
        await test.step("TC_017,TC_058,TC_059,TC_060 Verify co-trainer Sorting in Batch Dashboard page", async () => {
            let pos = 7;
            await manageBatch.confirmSortingWorks("Co-Trainer", table, pos);
        });
        await test.step("TC_018,TC_058,TC_059,TC_060 Verify location Sorting in Batch Dashboard page", async () => {
            let pos = 8;
            await manageBatch.confirmSortingWorks("Location", table, pos);
        });
        await test.step("TC_019,TC_058,TC_059,TC_060 Verify start date Sorting in Batch Dashboard page", async () => {
            let pos = 9;
            await manageBatch.confirmSortingWorks("Start Date", table, pos);
        });
        await test.step("TC_049 Verify Taining type Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheck("trainingTypeFilter", table, 3);
            await manageBatch.filtersCheckAllFilters("trainingTypeFilter");
        });
        await test.step("TC_015,TC_050 Verify skillTypeFilter Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheck("skillTypeFilter", table, 4);
            await manageBatch.filtersCheckAllFilters("skillTypeFilter");
        });
        await test.step("TC_051,TC_056 Verify leadTrainerFilter Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheck("leadTrainerFilter", table, 5);
            await manageBatch.filtersCheckAllFilters("leadTrainerFilter");
        });
        //Issue https://revature.atlassian.net/browse/CALIBER20-1390
        // await test.step("TC_052 Verify coTrainerFilter Filters in batch Dashboard page", async () => {
        //     await manageBatch.clearFilter();
        //     await manageBatch.filtersCheck("coTrainerFilter", table, 7);
        //     await manageBatch.filtersCheckAllFilters("coTrainerFilter");
        // });
        await test.step("TC_053 Verify location Filter Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheck("locationFilter", table, 8);
            await manageBatch.filtersCheckAllFilters("locationFilter");
        });
        await test.step("TC_049,TC_054 Verify Taining type Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheckWithName("trainingTypeFilter", table, "searchColumnTextTraining", "Regular", 3);
        });
        await test.step("TC_015,TC_050 Verify skillTypeFilter Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheckWithName("skillTypeFilter", table, "searchColumnTextSkillType", "java track", 4);
        });
        await test.step("TC_051,TC_056 Verify leadTrainerFilter Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheckWithName("leadTrainerFilter", table, "searchColumnTextTrainer", "Julie Seals", 5);
        });
        await test.step("TC_052 Verify coTrainerFilter Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheckWithName("coTrainerFilter", table, "searchColumnTextCoTrainer", "Emily H Higgins", 7);
        });
        await test.step("TC_053 Verify location Filter Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheckWithName("locationFilter", table, "searchColumnText", "USA (TL-0086)", 8);
        });
        await test.step("TC_055 To verify, whether user can search the batches with Invalid inputs in Filter column text field", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filterNoUserWithName("trainingTypeFilter", "searchColumnTextTraining", "09oi8u", 1);
        });
        await test.step("TC_057 To verify, whether batch gets displayed, if any one filter not gets matched", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filterNoUserWithName("skillTypeFilter", "searchColumnTextSkillType", "9io8u8", 2);
        });
        await test.step("TC_057 To verify, whether batch gets displayed, if any one filter not gets matched", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filterNoUserWithName("leadTrainerFilter", "searchColumnTextTrainer", "9io9i0", 3);
        });
        await test.step("TC_057 To verify, whether batch gets displayed, if any one filter not gets matched", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filterNoUserWithName("coTrainerFilter", "searchColumnTextCoTrainer", "9u8iuy", 4);
        });
        await test.step("TC_057 To verify, whether batch gets displayed, if any one filter not gets matched", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filterNoUserWithName("locationFilter", "searchColumnText", "bgnvhffcdxd", 5);
        });
        await test.step("TC_061,TC_062 Verify Pagination in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.pagination();
        });
        await test.step("TC_024 To verify,User able to view the no.of trainees", async () => {
            await manageBatch.searchBatch(batchName);
            await manageBatch.validateTrainers(5);
            await manageBatch.clickTrainer();
        });
        await test.step("TC_025,TC_032 To verify,User able to view the details of trainees", async () => {
            await manageBatch.viewTrainerColumn();
            await manageBatch.viewSortTrainerColumn("Name", 2);
            await manageBatch.viewSortTrainerColumn("Email", 3);
            await manageBatch.closeBtnModel();
        });
        await test.step("logout", async () => {
            await login.caliberlogout();
        });
    });
    test("Test data creation for all users", async ({ batch, common, signUp }) => {
        let emailId: string[] = [];
        await test.step("Create users", async () => {
            let email: string;
            for (let i = 0; i < 5; i++) {
                email = utils.getRandomEmail();
                await signUp.userSignupAndActivationWithEmail(email);
                emailId.push(email);
                await common.logOutFromFrontEnd();
            };
        })
        await test.step('To verify user navigate to signup url', async () => {
            await common.coreAppInitialize();
            await common.loginIntoCore(environment.vpUserEmail, environment.password);
        });
        await test.step('Map user to the batch', async () => {
            await common.settingsMenu();
            await batch.openBatch(batchName, "");
            await batch.addSingleAndMultipleTrainees(`${emailId[0]}, ${emailId[1]}, ${emailId[2]}, ${emailId[3]}, ${emailId[4]}`)
            await common.clicklogoutNewUI();
        });
    });
    test("Navigate to Vp_user for test", async ({ login, manageBatch }) => {
        await test.step('Navigate to caliber', async () => {
            await login.caliberAppInitialize();
            await login.clickSignUpBtn();
            await login.caliberlogin(environment.vpuser, environment.password, true);
        });
        await test.step('Navigate to manage batch', async () => {
            await manageBatch.naviagateToManageBatch();
        });
        await test.step('Search Batch Name', async () => {
            await manageBatch.searchBatch(batchName);
            await manageBatch.hoverAndClick();
        });
        await test.step('TC_047 To verify,The Trainee sync functionality is syncing all the Trainees into caliber present in RevPro against an Individual batch', async () => {
            await manageBatch.searchBatch(batchName);
            await manageBatch.traineeSyncClick();
        });
        await test.step('TC_026,TC_031 To verify,User able to view the active trainees if  "Show active trainees only" button is enabled', async () => {
            await manageBatch.clickTrainer();
            await manageBatch.clickActiveTrainers(10);
        });
        await test.step('TC_027 To verify,User able to view the Inactive trainees if  "Show active trainees only" button is disabled', async () => {
            await manageBatch.clickTotalTrainers(10);
        });
        await test.step('TC_028 To verify,User able to remove the trainees in batch', async () => {
            await manageBatch.clickDropUser(9);
        });
        await test.step('TC_029 To verify,User able to reactivate the trainees in batch', async () => {
            await manageBatch.addDropUser(10);
        });
        await test.step('TC_046 To verify,User able to Delete the trainees from a batch', async () => {
            await manageBatch.clickDeleteUser(9);
        });
        await test.step('Check if all search parameters are used to fetch data shown on result grid and the valid input details for the search feature', async () => {
            await manageBatch.clearSearch();
            await manageBatch.clickTrainer();
            await manageBatch.clickSwitchBranch();
            await manageBatch.checkBatchPresent("Trainercaliber Automation");
        });
        await test.step('TC_033 To verify, User able to switch the trainees from one batch to another', async () => {
            await manageBatch.checkBatchPresent("Trainercaliber");
        });
        await test.step('TC_034,TC_045 To verify, User able to switch the trainees from one batch to another', async () => {
            await manageBatch.checkBatchPresent("Automation");
        });
        await test.step('TC_035 To verify, User able to switch the trainees from one batch to another', async () => {
            await manageBatch.checkBatchPresent("Trainer");
        });
        await test.step('TC_036 To verify, User able to switch the trainees from one batch to another', async () => {
            await manageBatch.checkBatchPresent("Tr");
        });
        await test.step('TC_037 To verify, User able to switch the trainees from one batch to another', async () => {
            await manageBatch.checkBatchPresent("#$%&");
        });
        await test.step('TC_030 To verify, User able to switch the trainees from one batch to another', async () => {
            await manageBatch.checkBatchPresent("Trainercaliber");
            await manageBatch.selectBranch();
            await manageBatch.clickConformSwitchBatch();
        });
        await test.step('TC_048 To verify,User able to pin the specific batch ', async () => {
            await manageBatch.searchBatch(batchName);
            await manageBatch.clickPinBtn();
        });
        await test.step('logout', async () => {
            await login.caliberlogout();
        });
    });
});
test.describe("Batch management for QC_TRAINER", () => {
    test("Test data creation", async ({ batch, common, signUp }) => {
        let emailId: string[] = [];
        await test.step("Create users", async () => {
            let email: string;
            for (let i = 0; i < 5; i++) {
                email = utils.getRandomEmail();
                await signUp.userSignupAndActivationWithEmail(email);
                emailId.push(email);
                await common.logOutFromFrontEnd();
            };
        })
        await test.step('To verify user navigate to signup url', async () => {
            await common.coreAppInitialize();
            await common.loginIntoCore(environment.vpUserEmail, environment.password);
            await common.clickTrainingMenu();
            await common.clickAdminMenu();
            await common.clickCurriculumMapping();
        });
        await test.step('create batch', async () => {
            batchName = utils.getBatchName();
            common.setFtCurriculumData('batchName', batchName);
            await batch.createBatch(batchName, environment.trainerUserName, environment.vpUserName, environment.qcUserName, environment.usTimeZone);

        });
        await test.step('Map user to the batch', async () => {
            await common.clickAdminMenu();
            await common.clickTrainingMenu();
            await common.settingsMenu();
            await batch.openBatch(batchName, "");
            await batch.addSingleAndMultipleTrainees(`${emailId[0]}, ${emailId[1]}, ${emailId[2]}, ${emailId[3]}, ${emailId[4]}`)
            await common.clicklogoutNewUI();
        });
    });
    test("Navigate to Vp_user For manage batch", async ({ login, manageBatch }) => {

        await test.step('Navigate to caliber', async () => {
            await login.caliberAppInitialize();
            await login.clickSignUpBtn();
            await login.caliberlogin(environment.vpuser, environment.password, true);
        });
        await test.step('Navigate to manage batch', async () => {
            await manageBatch.naviagateToManageBatch();
        });
        await test.step('TC_001 To verify,Following buttons are displaying in Manage batch page:1. Current radio 2. Previous radio3. Future radio4. "Show archived batches only" toggle 5. "Batch sync" button', async () => {
            await manageBatch.UIValiadtion();
        });
        await test.step('TC_012 To verify, User able to view the following columns: 1.Training Name2.Training Type 3.Skill Type4.Trainer5.Co-Trainer6.Location7.Start Date8.End Date9.Training Style 10.Actions', async () => {
            await manageBatch.valiadateTableColumn();
        });
        await test.step('TC_013,TC_014,TC_015,TC_016,TC_017,TC_018,TC_019,TC_020 User able to view Training batch names under Training name column', async () => {
            await manageBatch.assertColumnData();
        });
        await test.step('TC_010 To verify,The Manual batch sync functionality is syncing all the batches having Last_Modified_Date from in-between 3 days before(past) the Current (Syncing)date ', async () => {
            await manageBatch.clickSyncBtn();
        });
        await test.step('TC_007 To verify,User is able to search a Training name using Wildcard character pattern', async () => {
            await manageBatch.searchBatchForAllBatch(batchName);
        });
        await test.step("logout", async () => {
            await login.caliberlogout();
        });
    });
    test("Navigate to Caliber QC For manage batch", async ({ login, manageBatch }) => {
        await test.step('Navigate to caliber', async () => {
            await login.caliberAppInitialize();
            await login.clickSignUpBtn();
            await login.caliberlogin(environment.caliberQc, environment.password, true);
        });
        await test.step('Navigate to manage batch', async () => {
            await manageBatch.naviagateToManageBatch();
        });
        await test.step('TC_120 To verify,Following buttons are displaying in Manage batch page:1. Current radio 2. Previous radio3. Future radio4. "Show archived batches only" toggle 5. "Batch sync" button', async () => {
            await manageBatch.UITrainerValiadtion();
        });
        await test.step('TC_127 To verify, User able to view the following columns: 1.Training Name2.Training Type 3.Skill Type4.Trainer5.Co-Trainer6.Location7.Start Date8.End Date9.Training Style 10.Actions', async () => {
            await manageBatch.valiadateTableColumn();
        });
        await test.step('TC_128,TC_129,TC_130,TC_131,TC_132,TC_133,TC_134,TC_135 User able to view Training batch names under Training name column', async () => {
            await manageBatch.assertColumnData();
        });
        await test.step('TC_121 To verify,The Current radio buttons is selected By-default and It is displaying only the Current (i.e., On going)batches', async () => {
            await manageBatch.clickCurrent();
        });
        await test.step('TC_122 To verify,The Previous radio option is displaying only the Previous (i.e., Completed) batches', async () => {
            await manageBatch.clickPrevious();
        });
        await test.step('TC_123 To verify,The Future radio option is displaying only the Future (i.e., Upcoming) batches', async () => {
            await manageBatch.clickFuture();
        });
        await test.step('Current', async () => {
            await manageBatch.clickCurrent();
        });
        // await test.step("Click Archive Batch", async () => {
        //     await manageBatch.clickArchive();
        // });
        // await test.step("Click Unarchive Batch", async () => {
        //     await manageBatch.clickUnArchive();
        // });
        await test.step('TC_126 To verify,User is able to search a Training name using Wildcard character pattern', async () => {
            await manageBatch.searchBatchForAllBatch(batchName);
        });
        await test.step('TC_105 To verify,User able to pin the specific batch ', async () => {
            await manageBatch.searchBatch(batchName);
            await manageBatch.clickPinBtn();
        });
        await test.step('TC_022 To verify, User able to view "Standard" options as default ', async () => {
            await manageBatch.defaultType();
        });
        await test.step("TC_014,TC_136,TC_137,TC_138 To verify,User able to view the following option based on batch training type ", async () => {
            await manageBatch.selectProductType();
            await manageBatch.selectStandaredType();
        });
        let table = "batchListTable";
        await test.step("TC_013,TC_115,TC_116,TC_117 Verify Training Name Sorting in Batch Dashboard page", async () => {
            await manageBatch.clearSearch();
            let pos = 1;
            await manageBatch.confirmSortingWorks("Training Name", table, pos);
        });
        await test.step("TC_016,TC_172,TC_173,TC_174 Verify Trainer Name Sorting in Batch Dashboard page", async () => {
            let pos = 5;
            await manageBatch.confirmSortingWorks("Trainer", table, pos);
        });
        await test.step("TC_017,TC_172,TC_173,TC_174 Verify co-trainer Sorting in Batch Dashboard page", async () => {
            let pos = 7;
            await manageBatch.confirmSortingWorks("Co-Trainer", table, pos);
        });
        await test.step("TC_018,TC_172,TC_173,TC_174 Verify location Sorting in Batch Dashboard page", async () => {
            let pos = 8;
            await manageBatch.confirmSortingWorks("Location", table, pos);
        });
        await test.step("TC_019,TC_115,TC_116,TC_117 Verify start date Sorting in Batch Dashboard page", async () => {
            let pos = 9;
            await manageBatch.confirmSortingWorks("Start Date", table, pos);
        });
        await test.step("TC_163 Verify Taining type Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheck("trainingTypeFilter", table, 3);
            await manageBatch.filtersCheckAllFilters("trainingTypeFilter");
        });
        await test.step("TC_015,TC_164 Verify skillTypeFilter Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheck("skillTypeFilter", table, 4);
            await manageBatch.filtersCheckAllFilters("skillTypeFilter");
        });
        await test.step("TC_165,TC_056 Verify leadTrainerFilter Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheck("leadTrainerFilter", table, 5);
            await manageBatch.filtersCheckAllFilters("leadTrainerFilter");
        });
        //Issue https://revature.atlassian.net/browse/CALIBER20-1390
        // await test.step("TC_166 Verify coTrainerFilter Filters in batch Dashboard page", async () => {
        //     await manageBatch.clearFilter();
        //     await manageBatch.filtersCheck("coTrainerFilter", table, 7);
        //     await manageBatch.filtersCheckAllFilters("coTrainerFilter");
        // });
        await test.step("TC_167 Verify location Filter Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheck("locationFilter", table, 8);
            await manageBatch.filtersCheckAllFilters("locationFilter");
        });
        await test.step("TC_106,TC_111 Verify Taining type Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheckWithName("trainingTypeFilter", table, "searchColumnTextTraining", "Regular", 3);
        });
        await test.step("TC_015,TC_107 Verify skillTypeFilter Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheckWithName("skillTypeFilter", table, "searchColumnTextSkillType", "java track", 4);
        });
        await test.step("TC_108,TC_113 Verify leadTrainerFilter Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheckWithName("leadTrainerFilter", table, "searchColumnTextTrainer", "Julie Seals", 5);
        });
        await test.step("TC_109 Verify coTrainerFilter Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheckWithName("coTrainerFilter", table, "searchColumnTextCoTrainer", "Emily H Higgins", 7);
        });
        await test.step("TC_170 Verify location Filter Filters in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filtersCheckWithName("locationFilter", table, "searchColumnText", "USA (TL-0086)", 8);
        });
        await test.step("TC_170 To verify, whether user can search the batches with Invalid inputs in Filter column text field", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filterNoUserWithName("trainingTypeFilter", "searchColumnTextTraining", "09oi8u", 1);
        });
        await test.step("TC_169 To verify, whether batch gets displayed, if any one filter not gets matched", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filterNoUserWithName("skillTypeFilter", "searchColumnTextSkillType", "9io8u8", 2);
        });
        await test.step("TC_170 To verify, whether batch gets displayed, if any one filter not gets matched", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filterNoUserWithName("leadTrainerFilter", "searchColumnTextTrainer", "9io9i0", 3);
        });
        await test.step("TC_171 To verify, whether batch gets displayed, if any one filter not gets matched", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filterNoUserWithName("coTrainerFilter", "searchColumnTextCoTrainer", "9u8iuy", 4);
        });
        await test.step("TC_170 To verify, whether batch gets displayed, if any one filter not gets matched", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filterNoUserWithName("locationFilter", "searchColumnText", "bgnvhffcdxd", 5);
        });
        await test.step("TC_175,TC_176 Verify Pagination in batch Dashboard page", async () => {
            await manageBatch.clearFilter();
            await manageBatch.pagination();
        });
        await test.step("TC_139 To verify,User able to view the no.of trainees", async () => {
            await manageBatch.searchBatch(batchName);
            await manageBatch.validateTrainers(5);
            await manageBatch.clickTrainer();
        });
        await test.step("TC_140,TC_147 To verify,User able to view the details of trainees", async () => {
            await manageBatch.viewTrainerColumn();
            await manageBatch.viewSortTrainerColumn("Name", 2);
            await manageBatch.viewSortTrainerColumn("Email", 3);
            await manageBatch.closeBtnModel();
        });
        await test.step("logout", async () => {
            await login.caliberlogout();
        });
    });
    test("Test data creation for all users", async ({ batch, common, signUp }) => {
        let emailId: string[] = [];
        await test.step("Create users", async () => {
            let email: string;
            for (let i = 0; i < 5; i++) {
                email = utils.getRandomEmail();
                await signUp.userSignupAndActivationWithEmail(email);
                emailId.push(email);
                await common.logOutFromFrontEnd();
            };
        })
        await test.step('To verify user navigate to signup url', async () => {
            await common.coreAppInitialize();
            await common.loginIntoCore(environment.vpUserEmail, environment.password);
        });
        await test.step('Map user to the batch', async () => {
            await common.settingsMenu();
            await batch.openBatch(batchName, "");
            await batch.addSingleAndMultipleTrainees(`${emailId[0]}, ${emailId[1]}, ${emailId[2]}, ${emailId[3]}, ${emailId[4]}`)
            await common.clicklogoutNewUI();
        });
    });
    test("Navigate to Caliber QC for test", async ({ login, manageBatch }) => {
        await test.step('Navigate to caliber', async () => {
            await login.caliberAppInitialize();
            await login.clickSignUpBtn();
            await login.caliberlogin(environment.caliberQc, environment.password, true);
        });
        await test.step('Navigate to manage batch', async () => {
            await manageBatch.naviagateToManageBatch();
        });
        await test.step('Search Batch Name', async () => {
            await manageBatch.searchBatch(batchName);
            await manageBatch.hoverAndClick();
        });
        await test.step('TC_161 To verify,The Trainee sync functionality is syncing all the Trainees into caliber present in RevPro against an Individual batch', async () => {
            await manageBatch.searchBatch(batchName);
            await manageBatch.traineeSyncClick();
        });
        await test.step('TC_141, To verify,User able to view the active trainees if  "Show active trainees only" button is enabled', async () => {
            await manageBatch.clickTrainer();
            await manageBatch.clickActiveTrainers(10);
        });
        await test.step('TC_142, To verify,User able to view the Inactive trainees if  "Show active trainees only" button is disabled', async () => {
            await manageBatch.clickTotalTrainers(10);
        });
        await test.step('TC_143, To verify,User able to remove the trainees in batch', async () => {
            await manageBatch.clickDropUser(9);
        });
        await test.step('TC_144, To verify,User able to reactivate the trainees in batch', async () => {
            await manageBatch.addDropUser(10);
            await manageBatch.closeBtnModel();
        });
        await test.step('TC_146,Check if all search parameters are used to fetch data shown on result grid and the valid input details for the search feature', async () => {
            await manageBatch.clearSearch();
            await manageBatch.clickTrainer();
            await manageBatch.clickSwitchBranch();
            await manageBatch.checkBatchPresent("Trainercaliber Automation");
        });
        await test.step('TC_148 To verify, User able to switch the trainees from one batch to another', async () => {
            await manageBatch.checkBatchPresent("Trainercaliber");
        });
        await test.step('TC_149,TC_160 To verify, User able to switch the trainees from one batch to another', async () => {
            await manageBatch.checkBatchPresent("Automation");
        });
        await test.step('TC_150 To verify, User able to switch the trainees from one batch to another', async () => {
            await manageBatch.checkBatchPresent("Trainer");
        });
        await test.step('TC_151 To verify, User able to switch the trainees from one batch to another', async () => {
            await manageBatch.checkBatchPresent("Tr");
        });
        await test.step('TC_152 To verify, User able to switch the trainees from one batch to another', async () => {
            await manageBatch.checkBatchPresent("#$%&");
        });
        await test.step('TC_145 To verify, User able to switch the trainees from one batch to another', async () => {
            await manageBatch.checkBatchPresent("Trainercaliber");
            await manageBatch.selectBranch();
            await manageBatch.clickConformSwitchBatch();
        });
        await test.step('TC_162 To verify,User able to pin the specific batch ', async () => {
            await manageBatch.searchBatch(batchName);
            await manageBatch.clickPinBtn();
        });
        await test.step('logout', async () => {
            await login.caliberlogout();
        });
    });
});
test.describe("Batch management for TRAINER", () => {
    test("Test data creation", async ({ batch, common, signUp }) => {
        let emailId: string[] = [];
        await test.step("Create users", async () => {
            let email: string;
            for (let i = 0; i < 5; i++) {
                email = utils.getRandomEmail();
                await signUp.userSignupAndActivationWithEmail(email);
                emailId.push(email);
                await common.logOutFromFrontEnd();
            };
        })
        await test.step('To verify user navigate to signup url', async () => {
            await common.coreAppInitialize();
            await common.loginIntoCore(environment.vpUserEmail, environment.password);
            await common.clickTrainingMenu();
            await common.clickAdminMenu();
            await common.clickCurriculumMapping();
        });
        await test.step('create batch', async () => {
            batchName = utils.getBatchName();
            common.setFtCurriculumData('batchName', batchName);
            await batch.createBatch(batchName, environment.trainerUserName, environment.vpUserName, environment.qcUserName, environment.usTimeZone);

        });
        await test.step('Map user to the batch', async () => {
            await common.clickAdminMenu();
            await common.clickTrainingMenu();
            await common.settingsMenu();
            await batch.openBatch(batchName, "");
            await batch.addSingleAndMultipleTrainees(`${emailId[0]}, ${emailId[1]}, ${emailId[2]}, ${emailId[3]}, ${emailId[4]}`)
            await common.clicklogoutNewUI();
        });
    });
    test("Navigate to Vp_user For manage batch", async ({ login, manageBatch }) => {

        await test.step('Navigate to caliber', async () => {
            await login.caliberAppInitialize();
            await login.clickSignUpBtn();
            await login.caliberlogin(environment.vpuser, environment.password, true);
        });
        await test.step('Navigate to manage batch', async () => {
            await manageBatch.naviagateToManageBatch();
        });
        await test.step('TC_001 To verify,Following buttons are displaying in Manage batch page:1. Current radio 2. Previous radio3. Future radio4. "Show archived batches only" toggle 5. "Batch sync" button', async () => {
            await manageBatch.UIValiadtion();
        });
        await test.step('TC_012 To verify, User able to view the following columns: 1.Training Name2.Training Type 3.Skill Type4.Trainer5.Co-Trainer6.Location7.Start Date8.End Date9.Training Style 10.Actions', async () => {
            await manageBatch.valiadateTableColumn();
        });
        await test.step('TC_013,TC_014,TC_015,TC_016,TC_017,TC_018,TC_019,TC_020 User able to view Training batch names under Training name column', async () => {
            await manageBatch.assertColumnData();
        });
        await test.step('TC_010 To verify,The Manual batch sync functionality is syncing all the batches having Last_Modified_Date from in-between 3 days before(past) the Current (Syncing)date ', async () => {
            await manageBatch.clickSyncBtn();
        });
        await test.step('TC_007 To verify,User is able to search a Training name using Wildcard character pattern', async () => {
            await manageBatch.searchBatchForAllBatch(batchName);
        });
        await test.step("logout", async () => {
            await login.caliberlogout();
        });
    });
    test("Navigate to Trainer For manage batch", async ({ login, manageBatch }) => {
        await test.step('Navigate to caliber', async () => {
            await login.caliberAppInitialize();
            await login.clickSignUpBtn();
            await login.caliberlogin(environment.trainer, environment.password, true);
        });
        await test.step('TC_078 To verify,The manage batch page is displaying only the Batches which is belongs to Trainer User', async () => {
            await manageBatch.naviagateToManageBatch();
        });
        await test.step('TC_079 To verify,Following buttons are displaying in Manage batch page:1. Current radio 2. Previous radio3. Future radio4. "Show archived batches only" toggle 5. "Batch sync" button', async () => {
            await manageBatch.UITrainerValiadtion();
        });
        await test.step('TC_086 To verify, User able to view the following columns: 1.Training Name2.Training Type 3.Skill Type4.Trainer5.Co-Trainer6.Location7.Start Date8.End Date9.Training Style 10.Actions', async () => {
            await manageBatch.valiadateTableColumn();
        });
        await test.step('TC_087,TC_088,TC_089,TC_090,TC_091,TC_092,TC_093,TC_094 User able to view Training batch names under Training name column', async () => {
            await manageBatch.assertColumnData();
        });
        await test.step('TC_080 To verify,The Current radio buttons is selected By-default and It is displaying only the Current (i.e., On going)batches', async () => {
            await manageBatch.clickCurrent();
        });
        await test.step('TC_081 To verify,The Previous radio option is displaying only the Previous (i.e., Completed) batches', async () => {
            await manageBatch.clickPrevious();
        });
        await test.step('TC_082 To verify,The Future radio option is displaying only the Future (i.e., Upcoming) batches', async () => {
            await manageBatch.clickFuture();
        });
        await test.step('Current', async () => {
            await manageBatch.clickCurrent();
        });
        // await test.step("Click Archive Batch", async () => {
        //     await manageBatch.clickArchive();
        // });
        // await test.step("Click Unarchive Batch", async () => {
        //     await manageBatch.clickUnArchive();
        // });
        await test.step('TC_085 To verify,User is able to search a Training name using Wildcard character pattern', async () => {
            await manageBatch.searchBatchForAllBatch(batchName);
        });
        await test.step("TC_014,TC_115,TC_116,TC_117 To verify,User able to view the following option based on batch training type ", async () => {
            await manageBatch.selectProductTypeTrainer();
            await manageBatch.selectStandaredTypeTrainer();
        });
        let table = "batchListTable";
        await test.step("TC_013,TC_115,TC_116,TC_117 Verify Training Name Sorting in Batch Dashboard page", async () => {
            await manageBatch.clearSearch();
            let pos = 1;
            await manageBatch.confirmSortingWorks("Training Name", table, pos);
        });
        await test.step("TC_016,TC_115,TC_116,TC_117 Verify Trainer Name Sorting in Batch Dashboard page", async () => {
            let pos = 5;
            await manageBatch.confirmSortingWorks("Trainer", table, pos);
        });
        await test.step("TC_017,TC_115,TC_116,TC_117 Verify co-trainer Sorting in Batch Dashboard page", async () => {
            let pos = 7;
            await manageBatch.confirmSortingWorks("Co-Trainer", table, pos);
        });
        await test.step("TC_018,TC_115,TC_116,TC_117 Verify location Sorting in Batch Dashboard page", async () => {
            let pos = 8;
            await manageBatch.confirmSortingWorks("Location", table, pos);
        });
        await test.step("TC_019,TC_115,TC_116,TC_117 Verify start date Sorting in Batch Dashboard page", async () => {
            let pos = 9;
            await manageBatch.confirmSortingWorks("Start Date", table, pos);
        });
        // await test.step("TC_106,TC_111 Verify Taining type Filters in batch Dashboard page", async () => {
        //     await manageBatch.clearFilter();
        //     await manageBatch.filtersCheckWithName("trainingTypeFilter", table, "searchColumnTextTraining", "Regular", 3);
        // });
        // await test.step("TC_015,TC_107 Verify skillTypeFilter Filters in batch Dashboard page", async () => {
        //     await manageBatch.clearFilter();
        //     await manageBatch.filtersCheckWithName("skillTypeFilter", table, "searchColumnTextSkillType", "java track", 4);
        // });
        // await test.step("TC_108,TC_113 Verify leadTrainerFilter Filters in batch Dashboard page", async () => {
        //     await manageBatch.clearFilter();
        //     await manageBatch.filtersCheckWithName("leadTrainerFilter", table, "searchColumnTextTrainer", "Julie Seals", 5);
        // });
        // await test.step("TC_109 Verify coTrainerFilter Filters in batch Dashboard page", async () => {
        //     await manageBatch.clearFilter();
        //     await manageBatch.filtersCheckWithName("coTrainerFilter", table, "searchColumnTextCoTrainer", "Emily H Higgins", 7);
        // });
        // await test.step("TC_110 Verify location Filter Filters in batch Dashboard page", async () => {
        //     await manageBatch.clearFilter();
        //     await manageBatch.filtersCheckWithName("locationFilter", table, "searchColumnText", "USA (TL-0086)", 8);
        // });
        await test.step("TC_112 To verify, whether user can search the batches with Invalid inputs in Filter column text field", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filterNoUserWithName("trainingTypeFilter", "searchColumnTextTraining", "09oi8u", 1);
        });
        await test.step("TC_114 To verify, whether batch gets displayed, if any one filter not gets matched", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filterNoUserWithName("skillTypeFilter", "searchColumnTextSkillType", "9io8u8", 2);
        });
        await test.step("TC_114 To verify, whether batch gets displayed, if any one filter not gets matched", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filterNoUserWithName("leadTrainerFilter", "searchColumnTextTrainer", "9io9i0", 3);
        });
        await test.step("TC_114 To verify, whether batch gets displayed, if any one filter not gets matched", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filterNoUserWithName("coTrainerFilter", "searchColumnTextCoTrainer", "9u8iuy", 4);
        });
        await test.step("TC_114 To verify, whether batch gets displayed, if any one filter not gets matched", async () => {
            await manageBatch.clearFilter();
            await manageBatch.filterNoUserWithName("locationFilter", "searchColumnText", "bgnvhffcdxd", 5);
        });
        // await test.step("TC_118,TC_119 Verify Pagination in batch Dashboard page", async () => {
        //     await manageBatch.clearFilter();
        //     await manageBatch.pagination();
        // });
        await test.step("TC_098 To verify,User able to view the no.of trainees", async () => {
            await manageBatch.searchBatch(batchName);
            await manageBatch.validateTrainers(5);
            await manageBatch.clickTrainer();
        });
        await test.step("TC_099,TC_032 To verify,User able to view the details of trainees", async () => {
            await manageBatch.viewTrainerColumn();
            await manageBatch.viewSortTrainerColumn("Name", 2);
            await manageBatch.viewSortTrainerColumn("Email", 3);
            await manageBatch.closeBtnModel();
        });
        await test.step("logout", async () => {
            await login.caliberlogout();
        });
    });
    test("Test data creation for all users", async ({ batch, common, signUp }) => {
        let emailId: string[] = [];
        await test.step("Create users", async () => {
            let email: string;
            for (let i = 0; i < 5; i++) {
                email = utils.getRandomEmail();
                await signUp.userSignupAndActivationWithEmail(email);
                emailId.push(email);
                await common.logOutFromFrontEnd();
            };
        })
        await test.step('To verify user navigate to signup url', async () => {
            await common.coreAppInitialize();
            await common.loginIntoCore(environment.vpUserEmail, environment.password);
        });
        await test.step('Map user to the batch', async () => {
            await common.settingsMenu();
            await batch.openBatch(batchName, "");
            await batch.addSingleAndMultipleTrainees(`${emailId[0]}, ${emailId[1]}, ${emailId[2]}, ${emailId[3]}, ${emailId[4]}`)
            await common.clicklogoutNewUI();
        });
    });
    test("Navigate to Trainer for test", async ({ login, manageBatch }) => {
        await test.step('Navigate to caliber', async () => {
            await login.caliberAppInitialize();
            await login.clickSignUpBtn();
            await login.caliberlogin(environment.trainer, environment.password, true);
        });
        await test.step('Navigate to manage batch', async () => {
            await manageBatch.naviagateToManageBatch();
        });
        await test.step('Search Batch Name', async () => {
            await manageBatch.searchBatch(batchName);
            await manageBatch.hoverAndClick();
        });
        await test.step('TC_104 To verify,The Trainee sync functionality is syncing all the Trainees into caliber present in RevPro against an Individual batch', async () => {
            await manageBatch.searchBatch(batchName);
            await manageBatch.traineeSyncClick();
        });
        await test.step('TC_100 To verify,User able to view the active trainees if  "Show active trainees only" button is enabled', async () => {
            await manageBatch.clickTrainer();
            await manageBatch.clickActiveTrainers(10);
        });
        await test.step('TC_101 To verify,User able to view the Inactive trainees if  "Show active trainees only" button is disabled', async () => {
            await manageBatch.clickTotalTrainers(10);
        });
        await test.step('TC_102 To verify,User able to remove the trainees in batch', async () => {
            await manageBatch.clickDropUser(9);
            await manageBatch.closeBtnModel();
        });
        await test.step('TC_105 To verify,User able to pin the specific batch ', async () => {
            await manageBatch.searchBatch(batchName);
            await manageBatch.clickPinBtn();
        });
        await test.step('logout', async () => {
            await login.caliberlogout();
        });
    });
});


