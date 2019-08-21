// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts



exports.config = {
  allScriptsTimeout: 11000,
  specs: ['./src/features/**/*.feature'],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:3001/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./src/stepDefinitions/**/*.stepDef.ts']
  },
  onPrepare() {
    browser.manage().window().maximize();
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  }
};