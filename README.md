# Demo: Automated Tests for iOS Native and Web-based apps

**Description:** 
- Project contains samples of the Functional, End-to-End and Integration UI tests with Typescript + [WebdriverIO](https://webdriver.io/)
- Tested website [Herokuapp](https://the-internet.herokuapp.com/) provides a variety of web application examples for testing. 

**Disclaimer:**  
   ⚠️ All code in this repository is provided for demonstration purposes only. iOS native tests are configured to run on real devices, and tested iOS app files (.app or .ipa) needs to be maintained separately, preferably in the CI pipeline, according to the release process. Therefore, test environment configurations may need to be modified to match your specific setup.

## 
- Node version 14 or higher
- Installed [Appium] (./docs/APPIUM.md) on running machine (for testing mobile apps)
- Installed Chrome browser (for testing web based apps)
- Supported on Mac OS

## Installation and Test Execution

1. Clone repo
2. Run: `npm install` in the project dir
3. [Optional] Connect test device to the running machine via USB (for native mobile tests)
4. [Optional] Install Appium on a local machine [check here](./docs/APPIUM.md)
5. [Optional] Add configurations for your test devices (environment)  `*.config.ts`
6. Modify running scripts in `package.json`
7. Run Appium Server (For running native iOS tests on local machine): `appium`
8. Run tests: `npm run` + script from `package.json`, for instance for the testing iOS native app on iPhone 11  `npm run ios.measurement_app.iphone11`, 
9. Open Test report: 
 - Generate report (Optional, can be generated via hook in config): `npm run report:generate` 
 - Open the allure report: `npm run report:open`

Checkout the full documentation about [development tests](./docs/CONTRIBUTING.md)
