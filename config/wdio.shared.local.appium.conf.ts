import { config } from "./wdio.shared.conf";

// ======
// Appium
// ======
//Since we do not have Appium installed as part of this package we are going to use the globally installed version of Appium. 
//https://www.npmjs.com/package/@wdio/appium-service
//Check all available arguments :https://github.com/appium/appium/blob/master/packages/appium/sample-code/appium.config.sample.json
config.services = (config.services ? config.services : []).concat([
    [
        'appium',
        {
            // This will use the globally installed version of Appium
            command: 'appium',
            args: {
                // This is needed to tell Appium that we can execute local ADB commands
                // and to automatically download the latest version of ChromeDriver
                relaxedSecurity: false,
                // address: "0.0.0.0", //Desktop Appium server url: http://0.0.0.0:4723/wd/hub
                address: 'localhost', //try if "0.0.0.0" doen't work  
                // address: "127.0.0.1", //Use for running on CI 

                showXcodeLog: true,
                showIosLog: true,
                debugLogSpacing: true,
                includeSafariInWebviews: true,
                fullContextList: true, 

                // Write the Appium logs to a file in the root of the directory
                logPath: './',
            },
        },
    ],
]);

// =====================
// Server Configurations
// =====================
//
config.port = 4723

export default config;
