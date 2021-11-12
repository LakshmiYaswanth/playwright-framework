
import test from '../lib/BasePages';
import { environment } from '../lib/environment';
import { Utils } from '../lib/Utils';
import * as batchData from './../utils/test-data/ft-curriculum-data.json';
let utils = new Utils();
let emailId: string[] = [];
let batchName: string;

test.describe("Quality Audit for VP_USER", () => {
    test("Test data creation", async ({ batch, common, signUp }) => {
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
            await batch.createBatch(batchName, environment.trainerUserName, environment.vpUserName, environment.qcUserName, environment.usTimeZone);
            common.setFtCurriculumData('batchName', batchName);

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
    test("Navigate to Vp_user For quaility batch", async ({ login, manageBatch, access, quality }) => {
        await test.step('Navigate to caliber', async () => {
            await login.caliberAppInitialize();
            await login.clickSignUpBtn();
            await login.caliberlogin(environment.vpuser, environment.password, true);
        });
        await test.step('Navigate to manage batch', async () => {
            await manageBatch.naviagateToManageBatch();
        });
        await test.step('Naviage to access batch', async () => {
            await quality.naviagateToQualityAuditBatch();
            await access.UIValidationOfAccessPage();
        });
        await test.step('TC_005 To verify, Synced batches are getting displayed in Batches drop-down ', async () => {
            await access.searchBatchForAllAccessBatch("Trainer");
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
        await test.step('TC_048 To verify,User able to pin the specific batch ', async () => {
            await manageBatch.searchBatch(batchName);
            await manageBatch.clickPinBtn();
        });
        await test.step('TC_005 Naviage to access batch', async () => {
            await quality.naviagateToQualityAuditBatch();
            await access.UIValidationOfAccessPage();
        });
        await test.step('TC_001 To verify,The Current radio buttons is selected By-default and It is displaying only the Current (i.e., On going)batches', async () => {
            await manageBatch.clickCurrent();
        });
        await test.step('TC_002 To verify,The Previous radio option is displaying only the Previous (i.e., Completed) batches', async () => {
            await manageBatch.clickPrevious();
        });
        await test.step('TC_003 To verify,The Future radio option is displaying only the Future (i.e., Upcoming) batches', async () => {
            await manageBatch.clickFuture();
        });
        await test.step('To verify,The Current radio buttons is selected By-default and It is displaying only the Current (i.e., On going)batches', async () => {
            await manageBatch.clickCurrent();
        });
        await test.step('TC_006 To verify,Weeks are displaying from batch start date week to the current date week', async () => {
            await access.viewAllWeeks();
        });
        await test.step('TC_007,TC_008,TC_009 To verify,Trainees are displaying under all weeks', async () => {
            await access.refreshpage();
            await access.getTextForAllUser();
        });
        await test.step('TC_011,TC_010,TC_014 To verify, User can sort the trainees in ascending order and desending order based on last name', async () => {
            await access.refreshpage();
            await access.viewSortTrainerColumn('Last Name', 1);
        });
        await test.step('TC_012,TC_013,TC_015,TC_049 To verify,User can sort the trainees in ascending order and desending order based on last name', async () => {
            await access.viewSortTrainerColumn('First Name', 2);
        });
        await test.step('TC_016,TC_017,TC_021,TC_022,TC_050 To verify,User can enter the notes for a week', async () => {
            await access.giveNotesTextEditor('First Name Last Name');
        });
        await test.step('TC_018,TC_019,TC_020 To verify,User can enter the notes for a week in the Rich Text Editor', async () => {
            await access.openNotesInPopUpAndGiveData('Welcome to the JavaScriptTutorial.net website! This JavaScript Tutorial helps you learn the JavaScript programming language from scratch quickly and effectively.');
        });
        await test.step('TC_023,TC_024,TC_025 To verify,User can enter the Overall feedback for a week in the Rich Text Editor', async () => {
            await access.overallWeekNotes('Welcome to the JavaScriptTutorial.net website! This JavaScript Tutorial helps you learn the JavaScript programming language from scratch quickly and effectively.');
        });
        await test.step('TC_026,TC_028 To verify,User can delete the overall feedback of a week', async () => {
            await access.deleteNotes();
        });
        await test.step('TC_027 To verify,User can delete the feedback of a week with cancel', async () => {
            await access.openNotesInPopUpAndGiveDataAndRemoveText('Welcome to the JavaScriptTutorial.net website! This JavaScript Tutorial helps you learn the JavaScript programming language from scratch quickly and effectively.');
        });
        await test.step('TC_028 To verify,User can delete the overall feedback of a week with cancel', async () => {
            await access.overallWeekNotesAndRemoveText('Welcome to the JavaScriptTutorial.net website! This JavaScript Tutorial helps you learn the JavaScript programming language from scratch quickly and effectively.');
        });
        await test.step('TC_029,TC_030,TC_032,TC_031,TC_033 To verify,User can give the red flag with comments for the trainee', async () => {
            await access.createFlagToWeek("Please test");
        });
        await test.step('TC_040,TC_041 ,To verify,Red flag is getting displayed for the trainee in same week of  Assess Batch menu', async () => {
            await access.viewFlagStatus();
        });
        await test.step('TC_034,TC_036, To verify,User can change the red flag with comments for the trainee', async () => {
            await access.editFlagToWeek("Please test");
        });
        await test.step('TC_035,TC_037 To verify,User can change the green flag without comments for the trainee', async () => {
            await access.cancelFlagToWeek();
        });
        await test.step('TC_038,TC_039 To verify,User can delete the red flag of the trainee', async () => {
            await access.deleteFlagToWeek();
        });
        // await test.step('edit score Activity for all weeks', async () => {
        //     await quality.clickRandomUser();
        // });
        await test.step('TC_041,TC_042,TC_043 To verify,User can add the category for the week', async () => {
            await quality.createCategoryActivityForAllWeeks();
        });
        await test.step('TC_044 To verify,User can remove the category for the week', async () => {
            await quality.deleteCategoryActivityForAllWeeks();
        });
        await test.step('create category for all weeks', async () => {
            await quality.createCategoryActivityForAllWeeks();
        });
        await test.step('TC_045,TC_047 To verify,User can give the smiley for the trainee', async () => {
            await quality.addfeedBack();
        });
        await test.step('update feedback for all users', async () => {
            await quality.updatefeedBack();
        });
        await test.step('TC_046 To verify,User can remove the smiley for the trainee', async () => {
            await quality.removeFeedBack();
        });
        await test.step('add feedback status for all users', async () => {
            await quality.addfeedBack();
        });
        await test.step('TC_047 To verify,User can change the Overall QC status smiley', async () => {
            await quality.updateOverAllFeedBack();
        });
        await test.step('search user', async () => {
            await quality.userSearch();
        });
        await test.step('Logout', async () => {
            await login.caliberlogout();
        });
    });
});

test.describe("Quality Audit for QC_TRAINER", () => {
    test("Test data creation", async ({ batch, common, signUp }) => {
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
    test("Navigate to Caliber QC For manage batch", async ({ login, manageBatch, quality, access }) => {
        await test.step('Navigate to caliber', async () => {
            await login.caliberAppInitialize();
            await login.clickSignUpBtn();
            await login.caliberlogin(environment.caliberQc, environment.password, true);
        });
        await test.step('Navigate to manage batch', async () => {
            await manageBatch.naviagateToManageBatch();
        });
        await test.step('Naviage to access batch', async () => {
            await quality.naviagateToQualityAuditBatch();
            await access.UIValidationOfAccessPage();
        });
        await test.step('TC_005 To verify, Synced batches are getting displayed in Batches drop-down ', async () => {
            await access.searchBatchForAllAccessBatch("caliber");
        });
        await test.step('Navigate to manage batch', async () => {
            await manageBatch.naviagateToManageBatch();
        });
        await test.step('TC_001 To verify,Following buttons are displaying in Manage batch page:1. Current radio 2. Previous radio3. Future radio4. "Show archived batches only" toggle 5. "Batch sync" button', async () => {
            await manageBatch.UITrainerValiadtion();
        });
        await test.step('TC_012 To verify, User able to view the following columns: 1.Training Name2.Training Type 3.Skill Type4.Trainer5.Co-Trainer6.Location7.Start Date8.End Date9.Training Style 10.Actions', async () => {
            await manageBatch.valiadateTableColumn();
        });
        await test.step('TC_013,TC_014,TC_015,TC_016,TC_017,TC_018,TC_019,TC_020 User able to view Training batch names under Training name column', async () => {
            await manageBatch.assertColumnData();
        });
        await test.step('TC_048 To verify,User able to pin the specific batch ', async () => {
            await manageBatch.searchBatch(batchName);
            await manageBatch.clickPinBtn();
        });
        await test.step('Naviage to access batch', async () => {
            await quality.naviagateToQualityAuditBatch();
            await access.UIValidationOfAccessPage();
        });
        await test.step('TC_001 To verify,The Current radio buttons is selected By-default and It is displaying only the Current (i.e., On going)batches', async () => {
            await manageBatch.clickCurrent();
        });
        await test.step('TC_002 To verify,The Previous radio option is displaying only the Previous (i.e., Completed) batches', async () => {
            await manageBatch.clickPrevious();
        });
        await test.step('TC_003 To verify,The Future radio option is displaying only the Future (i.e., Upcoming) batches', async () => {
            await manageBatch.clickFuture();
        });
        await test.step('To verify,The Current radio buttons is selected By-default and It is displaying only the Current (i.e., On going)batches', async () => {
            await manageBatch.clickCurrent();
        });
        await test.step('TC_006 To verify,Weeks are displaying from batch start date week to the current date week', async () => {
            await access.viewAllWeeks();
        });
        await test.step('TC_007,TC_008,TC_009 To verify,Trainees are displaying under all weeks', async () => {
            await access.refreshpage();
            await access.getTextForAllUser();
        });
        await test.step('TC_011,TC_010,TC_014 To verify, User can sort the trainees in ascending order and desending order based on last name', async () => {
            await access.refreshpage();
            await access.viewSortTrainerColumn('Last Name', 1);
        });
        await test.step('TC_012,TC_013,TC_015,TC_049 To verify,User can sort the trainees in ascending order and desending order based on last name', async () => {
            await access.viewSortTrainerColumn('First Name', 2);
        });
        await test.step('TC_016,TC_017,TC_021,TC_022,TC_050 To verify,User can enter the notes for a week', async () => {
            await access.giveNotesTextEditor('First Name Last Name');
        });
        await test.step('TC_018,TC_019,TC_020 To verify,User can enter the notes for a week in the Rich Text Editor', async () => {
            await access.openNotesInPopUpAndGiveData('Welcome to the JavaScriptTutorial.net website! This JavaScript Tutorial helps you learn the JavaScript programming language from scratch quickly and effectively.');
        });
        await test.step('TC_023,TC_024,TC_025 To verify,User can enter the Overall feedback for a week in the Rich Text Editor', async () => {
            await access.overallWeekNotes('Welcome to the JavaScriptTutorial.net website! This JavaScript Tutorial helps you learn the JavaScript programming language from scratch quickly and effectively.');
        });
        await test.step('TC_026,TC_028 To verify,User can delete the overall feedback of a week', async () => {
            await access.deleteNotes();
        });
        await test.step('TC_027 To verify,User can delete the feedback of a week with cancel', async () => {
            await access.openNotesInPopUpAndGiveDataAndRemoveText('Welcome to the JavaScriptTutorial.net website! This JavaScript Tutorial helps you learn the JavaScript programming language from scratch quickly and effectively.');
        });
        await test.step('TC_028 To verify,User can delete the overall feedback of a week with cancel', async () => {
            await access.overallWeekNotesAndRemoveText('Welcome to the JavaScriptTutorial.net website! This JavaScript Tutorial helps you learn the JavaScript programming language from scratch quickly and effectively.');
        });
        await test.step('TC_029,TC_030,TC_032,TC_031,TC_033 To verify,User can give the red flag with comments for the trainee', async () => {
            await access.createFlagToWeek("Please test");
        });
        await test.step('TC_040,TC_041 ,To verify,Red flag is getting displayed for the trainee in same week of  Assess Batch menu', async () => {
            await access.viewFlagStatus();
        });
        await test.step('TC_034,TC_036, To verify,User can change the red flag with comments for the trainee', async () => {
            await access.editFlagToWeek("Please test");
        });
        await test.step('TC_035,TC_037 To verify,User can change the green flag without comments for the trainee', async () => {
            await access.cancelFlagToWeek();
        });
        await test.step('TC_038,TC_039 To verify,User can delete the red flag of the trainee', async () => {
            await access.deleteFlagToWeek();
        });
        // await test.step('edit score Activity for all weeks', async () => {
        //     await quality.clickRandomUser();
        // });
        await test.step('TC_041,TC_042,TC_043 To verify,User can add the category for the week', async () => {
            await quality.createCategoryActivityForAllWeeks();
        });
        await test.step('TC_044 To verify,User can remove the category for the week', async () => {
            await quality.deleteCategoryActivityForAllWeeks();
        });
        await test.step('create category for all weeks', async () => {
            await quality.createCategoryActivityForAllWeeks();
        });
        await test.step('TC_045,TC_047 To verify,User can give the smiley for the trainee', async () => {
            await quality.addfeedBack();
        });
        await test.step('update feedback for all users', async () => {
            await quality.updatefeedBack();
        });
        await test.step('TC_046 To verify,User can remove the smiley for the trainee', async () => {
            await quality.removeFeedBack();
        });
        await test.step('add feedback status for all users', async () => {
            await quality.addfeedBack();
        });
        await test.step('TC_047 To verify,User can change the Overall QC status smiley', async () => {
            await quality.updateOverAllFeedBack();
        });
        await test.step('search user', async () => {
            await quality.userSearch();
        });
        await test.step('Logout', async () => {
            await login.caliberlogout();
        });
    });
});