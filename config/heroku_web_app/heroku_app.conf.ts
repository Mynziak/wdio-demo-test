import config from "../wdio.shared.local.chrome.conf";

const allure = require('allure-commandline')

config.baseUrl = "https://the-internet.herokuapp.com/";

config.connectionRetryTimeout = 160000;

config.specs = ['./test/specs/web_heroku_specs/web.heroku.spec.ts']; 

config.beforeTest = function (test, context) {
    browser.maximizeWindow(); //Maximize browser
};

//Hook for generating Allure Report automatically
config.onComplete = function () {
    const reportError = new Error('Could not generate Allure report');
    const generation = allure(['generate', 'allure-results', '--clean']);

    return new Promise<void>((resolve, reject) => {
        const generationTimeout = setTimeout(() => reject(reportError), 5000);

        generation.on('exit', function (exitCode: number) {
            clearTimeout(generationTimeout);

            if (exitCode !== 0) {
                return reject(reportError);
            }

            console.log('Allure report successfully generated');
            resolve();
        });
    });
};

exports.config = config;