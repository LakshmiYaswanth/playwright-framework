export class TestDataBatchCreation {

    /**
     * @description All the mandatory labels
     */
    public static getMandatoryLabels() {
        let labels: string[] = [];
        labels[0] = "Batch Name is required.";
        labels[1] = "Start Date is required.";
        labels[2] = "End Date is required.";
        labels[3] = "Incharge is required.";
        labels[4] = "Active Days is required";
        labels[5] = "Active Hours is required";
        return labels;
    }
    /**
     * @description Header names to be present in the page table
     */
    public static headerNameData() {
        let header: string[] = [];
        header[0] = 'S.No.';
        header[1] = 'Batch Name';
        header[2] = 'Training ID';
        header[3] = 'Start Date';
        header[4] = 'End Date';
        header[5] = 'Incharge';
        header[6] = 'Co-Trainers';
        header[7] = 'No. of Trainees';
        header[8] = 'Actions';
        return header as string[];
    }
    /**
     * Login credential for Training Admin role
     */
    public static loginCredential() {
        return {
            userName: 'apitestTrainingAdmin1@yopmail.com',
            // userName: 'apitesttrainingadmin1@yopmail.com',
            passWord: 'Pass123$',
            mailinator: 'koushik@mailinator.com',
            contentAdmin: 'apitestContentAdmin@yopmail.com',
            contentCreator: 'apitestContentCreator@yopmail.com'

        }
    }
    // public static loginCredential() {
    //     return {
    // userName: 'apitestTrainingAdmin1@yopmail.com',
    // userName: 'apitesttrainingadmin1@yopmail.com',
    // passWord: 'Pass123$',
    // mailinator: 'koushik@mailinator.com',
    // contentAdmin: 'apitestContentAdmin@yopmail.com'
    //     }
    // }
    /**
     * @description Generate a batch name with prefix of Automation
     * @param batchName previous or current or future
     */
    public static generateBatchName(batchName: string) {
        switch (batchName) {
            case "previous":
                return "Test_Automation_Batch_Previous_100"
            case "current":
                // return "Test_Automation_Batch_Current_100"
                return "TestCurriculum_Quiz"
            case "future":
                return "Test_Automation_Batch_Future_100"
            case "portfolio":
                return "Automation_Portfolio_Batch";
            default:
                return batchName;

        }
    }
    public static startAndEndDate(days: number) {
        let currentDate = this.setDate(0);
        let requiredDate = this.setDate(days);
        console.log(currentDate + ' => ' + requiredDate);
        return {
            current: currentDate,
            requiredDate: requiredDate
        }
    }
    public static getDateTill(date: number) {
        return this.setDate(date);
    }

    public static setDate(days: number) {
        let currentDate = new Date()
        const monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun",
            "Jul", "Aug", "Sep",
            "Oct", "Nov", "Dec"
        ];
        const day = [
            0o1, 0o2, 0o4, 0o5, 0o5,
            0o6,
            0o7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,]
        currentDate.getDate() + currentDate.setDate(currentDate.getDate() + (days));
        let monthIndex = currentDate.getMonth();
        return day[currentDate.getDate() - 1] + '-' + monthNames[monthIndex];
    }

}