// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const env = "qa2";
const DEBUG = true;

export const environment = {
  DEBUG: DEBUG,
  environmentName: env.toUpperCase(),
  baseURL: "https://" + env + ".revature.com",
  coreURL: "https://" + env + ".revature.com/core",
  coreNavigation: "https://" + env + ".revature.com/core/admin/pages/home",
  signupAPI:
    "https://" + env + "-ms.revature.com/security/revtek/public/signup",
  tokenAPI: "https://" + env + ".revature.com/core/resources/user/userDetails",
  normalAPI: "https://" + env + "-ms.revature.com/security/revtek/signup",
  caliberUrl: "https://caliber2-staging.revaturelabs.com/sign-in",
  vpUserEmail: "calibervp@mailinator.com",
  vpUserName: "Vpuser Caliber",
  vpuser: "Automation_Vp",
  trainerUserEmail: "calibertrainer@mailinator.com",
  trainerUserName: "TrainerCaliber Automation",
  trainer: "Automation_trainer",
  qcUserEmail: "caliberqc@mailinator.com",
  qcUserName: "QC Caliber Automation",
  caliberQc: "Automation_QC",
  password: "Pass123$",
  usTimeZone: "(GMT -5:00) US/Eastern",
  indiaTimeZone: "(GMT +5:30) Asia/Kolkata"
};
