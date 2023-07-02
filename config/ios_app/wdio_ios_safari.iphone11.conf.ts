import { join } from "path";
import config from "../wdio.shared.local.appium.conf";

// ============
// Specs
// ============
config.specs = ["./test/specs/$PATH_TO_SPEC"];


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
        "appium:deviceName": "iPhone 11",
        "appium:udid": "$UDID",
        "appium:platformVersion": "$PLATFORM_VERSION",
        "appium:browserName": "safari",
        "appium:orientation": "PORTRAIT",
        "appium:automationName": "XCUITest",
        "appium:autoAcceptAlerts": true,
        "appium:fullReset": false,
        "appium:wdaStartupRetries": 4,
        "appium:newCommandTimeout": 300,
    },
];

config.mochaOpts= {
    ui: "bdd",
    /**
     * NOTE: This has been increased for more stable Appium Native app
     * tests because they can take a bit longer.
     */
    timeout: 9 * 60 * 1000, // - Timeout for test session duration
  };

exports.config = config;