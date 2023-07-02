import { join } from "path";
import config from "../wdio.shared.local.appium.conf";

// ============
// Specs
// ============
config.specs = ["./test/specs/ios_specs/ios_app.alerts.spec.ts"],
config.specs = ["./test/specs/ios_specs/ios_app.policy.spec.ts"],
config.specs = ["./test/specs/ios_specs/ios_app.swipe.spec.ts"]

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: "iOS",
        maxInstances: 1,
        
        // For W3C the appium capabilities need to have an extension prefix
        // This is `appium:` for all Appium Capabilities which can be found here
        // http://appium.io/docs/en/writing-running-appium/caps/
        "appium:deviceName": "iPhone Х", 
        "appium:udid": "$UDID",
        "appium:platformVersion": "$PLATFORM_VERSION", 
        "appium:bundleId": "$BUNDLE_ID",
        "appium:xcodeOrgId": "$XCODE_ORG_ID",
        // "appium:orientation": "PORTRAIT",
        "appium:automationName": "XCUITest",
        "appium:autoAcceptAlerts": true,
        "appium:fullReset": false,
        // "appium:useNewWDA": true,
        "appium:wdaStartupRetries": 2,
        "appium:includeSafariInWebviews": true,
        "appium:fullContextList": true,
    
        // The path to the app (for re-install)
        // "appium:app": join(
        //     // process.cwd(),
        //     "./apps/$YOUR_IOS_APP.ipa.zip"
        // ),
        "appium:newCommandTimeout": 300,
    },
];

//Attach screenshot on failure:
config.afterTest = async function (
    test,
    context,
    { error, result, duration, passed, retries }
) {
    if (error) {
        const screenshot = await driver.takeScreenshot();
    }
};


exports.config = config;
