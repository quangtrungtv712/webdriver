exports.config = {
  // Define Test Scripts
  specs: [
    "./SRC/getText.js",
   // "SDETPRO/WebdriverIO and Selenium/TC_002_LOGIN.js",
  ],
  // Define Capabilities of the Test Environment
  capabilities: [
    {
      browserName: "chrome"
    }
  ],

  runner: 'local',
  // Declare Server Information
  hostname: 'localhost',
  port: 9515,
  path: '/',  // Use forward slash for Windows or MAC 1

  // Define Testing Framework
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  reporters: [
    ['junit', {
        outputDir: './',
    }]
],
}
