const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cucumber-report", // Directory of .json files
  reportPath: "./cucumber-html-report", // Output HTML report folder
  metadata: {
    browser: {
      name: "chrome",
      version: "114",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
});
