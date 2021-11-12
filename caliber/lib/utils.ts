const fs = require("fs");
var obj = {
  interns: {
    inActiveInterns: [],
    activeInterns: [],
  },
};
var projectJson = {
  projects: {
    created: [],
    drafted: [],
  },
};

let quizData = {
  quiz: {
    bestChoice: [],
    multipleChoice: [],
    shortAnswer: [],
  },
  batch: {
    currentBatch: [],
    previousBatch: [],
    futureBatch: [],
  },
  Curriculum: {
    activeCurriculum: [],
  },
  users: {
    user1: [],
    user2: [],
    user3: [],
  },
};

let projectData = {
  project: {
    associateProject: [],
    traineeProject: [],
    candiateProject: [],
  },
  batch: {
    currentBatch: [],
  },
  Curriculum: {
    activeCurriculum: [],
  },
  users: {
    user1: [],
    user2: [],
  },
};

let ftCurriculumData = {
  curriculumName: [],
  curriculumNameDefault: [],
  batchName: [],
  userName: [],
};

let courseData = {
  course: {
    EditorContents: [],
  },
};

let curriculumReviewData = {
  project: {
    associateProject: [],
  },
  quiz: {
    quiz: [],
  },
  batch: {
    currentBatch: [],
  },
  Curriculum: {
    activeCurriculum: [],
  },
  users: {
    user1: [],
    user2: [],
    user3: [],
  },
};
export class Utils {
  /**
   * @param length length of the string to be
   * @description used to generate number of characters by th given length
   */
  public getRandomString(length: number) {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
  public getTimeStamp() {
    var d = new Date();
    var timeStamp = d.getTime();
    return timeStamp;
  }
  public getRandomEmail() {
    //var randomEmail = (this.getRandomProfileName() + "@yopmail.com");
    var uniqueValue = this.getTimeStamp().toString();
    var randomEmail = "revtek" + uniqueValue + "@mailinator.com";
    console.log(randomEmail);
    return randomEmail;
  }
  public getRandomEmailYopmail() {
    //var randomEmail = (this.getRandomProfileName() + "@yopmail.com");
    var uniqueValue = this.getTimeStamp().toString();
    var randomEmail = "revtek" + uniqueValue + "@yopmail.com";
    console.log(randomEmail);
    return randomEmail;
  }

  public setMaxTime() {
    return 30000;
  }
  public getRandomNumber(size: number) {
    return Math.floor(Math.random() * size);
  }

  public getRandomNumberFromRange(start: number, end: number) {
    return Math.ceil(start - 1 + Math.random() * (end - start + 1));
  }

  /*public getRandomNumberFromRange (min:number, max:number) {
          return Math.ceil(max - 1 + (Math.random() * (max - min + 1)));
      }*/

  public getRandomMobileNumber(length: number) {
    return Math.floor(
      Math.pow(10, length - 1) +
      Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
    );
  }

  public getRandomCategoryName(length: number) {
    var randomCategoryName =
      "Automated_Catgeory" + this.getRandomString(length - 18);
    return randomCategoryName;
  }
  public getRandomCertificationName(length: number) {
    var randomCertificationName =
      "Certification" + this.getRandomString(length - 12);
    return randomCertificationName;
  }
  public getRandomProfileNamewithspecialcharcter() {
    var stringValue = this.getRandomString(7);
    var uniqueValue = this.getTimeStamp().toString();
    var randomProfileNamewithspecialcharcter = stringValue + uniqueValue;
    return randomProfileNamewithspecialcharcter;
  }

  public getRandomProfileName() {
    var stringValue1 = this.getRandomString(5);
    var stringValue2 = this.getRandomString(3);
    var uniqueValue = this.getTimeStamp().toString();
    //var randomProfileName = (stringValue1 + uniqueValue + stringValue2);
    var randomProfileName = "Profile" + uniqueValue + stringValue2;
    return randomProfileName;
  }

  public getRandomPortfolioName() {
    // var stringValue = this.getRandomString(8);
    //var uniqueValue = this.getTimeStamp().toString();
    var uniqueValue = this.getRandomNumber(10000);
    //var randomPortfolioName = (stringValue + uniqueValue);
    var randomPortfolioName = "Portfolio" + uniqueValue;
    return randomPortfolioName;
  }

  public getRandomSecondaryEmail() {
    var randomEmail = this.getRandomProfileName() + "@mailinator.com";
    return randomEmail;
  }

  public setQuizData(type: string, data: string) {
    switch (type) {
      case "quizBestChoice":
        quizData.quiz.bestChoice.push(data);
        break;
      case "quizShortAnswer":
        quizData.quiz.shortAnswer.push(data);
        break;
      case "quizMultipleChoice":
        quizData.quiz.multipleChoice.push(data);
        break;
      case "batchNameCurrent":
        quizData.batch.currentBatch.push(data);
        break;
      case "batchNamePrevious":
        quizData.batch.previousBatch.push(data);
        break;
      case "batchNameFuture":
        quizData.batch.futureBatch.push(data);
        break;
      case "curriculumName":
        quizData.Curriculum.activeCurriculum.push(data);
        break;
      case "user1":
        quizData.users.user1.push(data);
        break;
      case "user2":
        quizData.users.user2.push(data);
        break;
      case "user3":
        quizData.users.user3.push(data);
        break;
    }
    // obj.quiz.bestChoice.push(bestchoice);
    var json = JSON.stringify(quizData);
    fs.writeFileSync("./common/test-data/training-quiz-data.json", json, {
      mode: 0o666,
    });
    console.log("1. the file has been updated");
  }

  public setFtCurriculumData(type: string, data: string) {
    switch (type) {
      case "curriculumName":
        ftCurriculumData.curriculumName.push(data);
        break;
      case "curriculumNameDefault":
        ftCurriculumData.curriculumNameDefault.push(data);
        break;
      case "batchName":
        ftCurriculumData.batchName.push(data);
        break;
      case "userName":
        ftCurriculumData.userName.push(data);
        break;
    }
    var json = JSON.stringify(ftCurriculumData);
    fs.writeFileSync("./common/test-data/ft-curriculum-data.json", json, {
      mode: 0o666,
    });
    console.log("1. the file has been updated");
  }

  public setProjectData(type: string, data: string) {
    switch (type) {
      case "associateProject":
        projectData.project.associateProject.push(data);
        break;
      case "traineeProject":
        projectData.project.traineeProject.push(data);
        break;
      case "candidateProject":
        projectData.project.candiateProject.push(data);
        break;
      case "batchNameCurrent":
        projectData.batch.currentBatch.push(data);
        break;
      case "curriculumName":
        projectData.Curriculum.activeCurriculum.push(data);
        break;
      case "user1":
        projectData.users.user1.push(data);
        break;
      case "user2":
        projectData.users.user2.push(data);
        break;
    }
    // obj.quiz.bestChoice.push(bestchoice);
    var json = JSON.stringify(projectData);
    fs.writeFileSync("./common/test-data/training-project-data.json", json);
    console.log("Training Project data file has been updated");
  }

  public setCurriculumReviewData(type: string, data: string) {
    switch (type) {
      case "associateProject":
        curriculumReviewData.project.associateProject.push(data);
        break;
      case "quizName":
        curriculumReviewData.quiz.quiz.push(data);
        break;
      case "batchNameCurrent":
        curriculumReviewData.batch.currentBatch.push(data);
        break;
      case "curriculumName":
        curriculumReviewData.Curriculum.activeCurriculum.push(data);
        break;
      case "user1":
        curriculumReviewData.users.user1.push(data);
        break;
      case "user2":
        curriculumReviewData.users.user2.push(data);
        break;
      case "user3":
        curriculumReviewData.users.user3.push(data);
        break;
    }
    // obj.quiz.bestChoice.push(bestchoice);
    var json = JSON.stringify(curriculumReviewData);
    fs.writeFileSync(
      "./common/test-data/training-curriculum-review-data.json",
      json
    );
    console.log("Training Curriculum review data file has been updated");
  }

  public setInactiveInternData(
    username: string,
    password: string,
    status: string
  ) {
    fs.readFile(
      "./common/test-data/intern-data.json",
      "utf8",

      function (err, content) {
        if (err) {
          obj.interns.inActiveInterns.push([
            {
              username: username,
              password: password,
              status: status,
            },
          ]);
          var json = JSON.stringify(obj);
          fs.writeFile("./common/test-data/intern-data.json", json, "utf8");
          console.log("the file has been created");
          console.log(err);
        } else {
          obj = JSON.parse(content);
          obj.interns.inActiveInterns.push({
            username: username,
            password: password,
            status: status,
          });
          var json = JSON.stringify(obj);
          fs.writeFile("./common/test-data/intern-data.json", json, "utf8");
          console.log("the file has been updated");
        }
      }
    );
  }
  public setCourseData(contents: string) {
    courseData.course.EditorContents.push(contents);
    var json = JSON.stringify(courseData);
    fs.writeFileSync("./common/test-data/course-ckeditor-data.json", json);
    console.log("Course CKEditor data file has been updated");
  }
  public setNewIntern(username: string) {
    obj.interns.activeInterns.push(username);
    var json = JSON.stringify(obj);
    fs.writeFile("./common/test-data/new-intern.json", json, "utf8");
    console.log("the file has been updated");
  }

  public setActiveIntern(username: string) {
    fs.readFile(
      "./common/test-data/new-intern.json",
      "utf8",
      function (err, content) {
        if (err) {
          obj.interns.inActiveInterns.push(username);
          var json = JSON.stringify(obj);
          fs.writeFile("./common/test-data/interns.json", json, "utf8");
          console.log("the file has been created");
          console.log(err);
        } else {
          obj = JSON.parse(content);
          obj.interns.activeInterns.push(username);
          var json = JSON.stringify(obj);
          fs.writeFile(
            "./common/test-data/active-intern-data.json",
            json,
            "utf8"
          );
          console.log("the file has been updated");
        }
      }
    );
  }

  public setInternData(username: string) {
    fs.readFile(
      "./common/test-data/intern-data.json",
      "utf8",
      function (err, content) {
        if (err) {
          obj.interns.activeInterns.push([
            {
              username: username,
            },
          ]);
          var json = JSON.stringify(obj);
          fs.writeFile("./common/test-data/intern-data.json", json, "utf8");
          console.log("the file has been created");
          console.log(err);
        } else {
          obj = JSON.parse(content);
          obj.interns.activeInterns.push({
            username: username,
          });
          var json = JSON.stringify(obj);
          fs.writeFile("./common/test-data/intern-data.json", json, "utf8");
          console.log("the file has been updated");
        }
      }
    );
  }

  public setActiveInternData(
    username: string,
    password: string,
    status: string
  ) {
    fs.readFile(
      "./common/test-data/intern-data.json",
      "utf8",
      function (err, content) {
        if (err) {
          console.log("-------------" + err);
          obj.interns.activeInterns.push([
            {
              username: username,
              password: password,
              status: status,
            },
          ]);
          var json = JSON.stringify(obj);
          fs.writeFile(
            "./common/test-data/intern-data.json",
            json,
            function (err, content) {
              if (err) {
                console.log(err);
              } else {
                console.log("the file has been created");
              }
            }
          );
        } else {
          console.log("content-------------" + content);
          obj = JSON.parse(content);
          obj.interns.activeInterns.push({
            username: username,
            password: password,
            status: status,
          });
          var json = JSON.stringify(obj);
          fs.writeFile(
            "./common/test-data/interns.json",
            json,
            function (err, content) {
              if (err) {
                console.log(err);
              } else {
                console.log("the file has been updated");
              }
            }
          );
        }
      }
    );
  }

  public getRandomAttachment(count: number) {
    var n = Math.floor(Math.random() * count);
    if (n === 2 || n === 8) n--;
    return n;
  }

  public getBatchName() {
    return "Caliber Batch " + this.generateCurrentDateTime();
  }

  public getRandomBatchName() {
    var uniqueValue = this.getTimeStamp().toString();
    var randomProfileName = uniqueValue;
    return randomProfileName;
  }


  public randomDate(start, end) {
    var date = new Date(start + Math.random() * (end - start));
    return date.toString();
  }

  public generateCurrentDateTime() {
    var m_names = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var value = new Date();
    return (
      value.getDate() +
      "-" +
      m_names[value.getMonth()] +
      "-" +
      value.getFullYear() +
      " " +
      value.getHours() +
      " Hrs" +
      value.getMinutes() +
      " Min"
    );
  }

  public getCategoriesName() {
    var stringValue1 = this.getRandomString(3);
    var uniqueValue = this.getTimeStamp().toString();
    var randomCategoriesName = "Category" + uniqueValue + stringValue1;
    console.log("Random cat name", randomCategoriesName);
    return randomCategoriesName;
  }
  public getPortfolioRejected() {
    var stringValue1 = this.getRandomString(3);
    var randomPortfolioName = "portfolioRejected" + " " + stringValue1;
    console.log("Random cat name", randomPortfolioName);
    return randomPortfolioName;
  }
  public getSubmittedForPortfolioReview() {
    var stringValue1 = this.getRandomString(3);
    var randomPortfolioName =
      "submittedForPortfolioReview" + " " + stringValue1;
    console.log("Random cat name", randomPortfolioName);
    return randomPortfolioName;
  }
  public getPortfolioSubmittedForQC() {
    var stringValue1 = this.getRandomString(3);
    var randomPortfolioName = "portfolioSubmittedForQC" + " " + stringValue1;
    console.log("Random cat name", randomPortfolioName);
    return randomPortfolioName;
  }
  public getPortfolioSubmittedHOT() {
    var stringValue1 = this.getRandomString(3);
    var randomPortfolioName = "portfolioSubmittedHOT" + " " + stringValue1;
    console.log("Random cat name", randomPortfolioName);
    return randomPortfolioName;
  }
  public getPortfolioApproved() {
    var stringValue1 = this.getRandomString(3);
    var randomPortfolioName = "portfolioApproved" + " " + stringValue1;
    console.log("Random cat name", randomPortfolioName);
    return randomPortfolioName;
  }
  public getPortfolioName() {
    var stringValue1 = this.getRandomString(3);
    var randomPortfolioName = "portfolio" + " " + stringValue1;
    console.log("Random cat name", randomPortfolioName);
    return randomPortfolioName;
  }
  public getRandomOrgName() {
    var uniqueValue = "AutoTestOrganization_";
    var numericValue = this.getRandomNumberFromRange(101, 9999);
    var randomorgnisationname = uniqueValue + numericValue;
    return randomorgnisationname;
  }

  public getRandomAliasName() {
    var stringValue = this.getRandomString(7);
    var uniqueValue = "Alias";
    var randomoAliasname = uniqueValue + stringValue;
    return randomoAliasname;
  }
  public getRandomDomainName() {
    var stringValue = this.getRandomString(7);
    var uniqueValue = ".com";
    var randomodomainname = stringValue + uniqueValue;
    return randomodomainname;
  }
  public getRandomSectionName() {
    var stringValue = this.getRandomString(7);
    var uniqueValue = "Section--";
    var randomodomainname = uniqueValue + stringValue;
    return randomodomainname;
  }
  public getRandomModuleName() {
    var stringValue = this.getRandomString(7);
    var uniqueValue = "Module--";
    var randomodomainname = uniqueValue + stringValue;
    return randomodomainname;
  }
  public getRandomCurriculumName() {
    var stringValue = this.getRandomString(7);
    var uniqueValue = "curriculum--";
    var randomodomainname = uniqueValue + stringValue;
    return randomodomainname;
  }
  getRandomQuizName() {
    var stringValue = this.getRandomString(7);
    var uniqueValue = "quiz--";
    var randomodomainname = uniqueValue + stringValue;
    return randomodomainname;
  }
  public getRandomLectureName() {
    var stringValue = this.getRandomString(7);
    var uniqueValue = "Lecture--";
    var randomodomainname = uniqueValue + stringValue;
    return randomodomainname;
  }
  public getRandomReferenceName() {
    var stringValue = this.getRandomString(7);
    var uniqueValue = "Reference--";
    var randomodomainname = uniqueValue + stringValue;
    return randomodomainname;
  }

  public getRandomAssignmentName() {
    var stringValue = this.getRandomString(7);
    var uniqueValue = "Assignment--";
    var randomodomainname = uniqueValue + stringValue;
    return randomodomainname;
  }
  public getRandomVideoName() {
    var stringValue = this.getRandomString(7);
    var uniqueValue = "Video--";
    var randomodomainname = uniqueValue + stringValue;
    return randomodomainname;
  }
  public getRandomProjectName() {
    var stringValue = this.getRandomString(7);
    var uniqueValue = "Project--";
    var randomodomainname = uniqueValue + stringValue;
    return randomodomainname;
  }
  public getRandomGradingName() {
    var stringValue = this.getRandomString(7);
    var uniqueValue = "Grading--";
    var randomodomainname = uniqueValue + stringValue;
    return randomodomainname;
  }
  public getRandomNO() {
    var stringValue = this.getRandomNumber(7);

    return stringValue;
  }
  public getRandomEditNO() {
    var stringValue = this.getRandomNumber(999);
    return stringValue;
  }

}
