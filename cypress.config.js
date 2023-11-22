const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    //"specPattern":  "**/*.feature",
    "projectId": "9b4ah6",
    "baseUrl":"https://opensource-demo.orangehrmlive.com",
    //"defaultCommandTimeout":20000,
    "pageLoadTimeout": 120000,
    // "viewportWidth":375,
    // "viewportHeight": 667,

    "retries":{openMode: 2, runMode:1},
    //"watchForFileChanges":false,
    env:{

        "username": "Admin",
        "password": "admin123",
        "loginurl":"/web/index.php/auth/login"
    },
    //"video":false,
  
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
      return require('./cypress/plugins/index.js')(on, config)
      // allureWriter(on, config);
      // return config;
    },
  },
});
