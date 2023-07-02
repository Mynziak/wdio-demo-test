import reporter from '@wdio/allure-reporter';
import HerokuMainPage from '../../pages/heroku_pages/HerokuMain.page';
import LoginPage from '../../pages/heroku_pages/Login.page';
import SecurePage from '../../pages/heroku_pages/Secure.page';
import { openUrl } from '../../utils/Utils';

describe('Form Authentication Tests', () => {
    reporter.addFeature('Login')

    const userName = "tomsmith";
    const password = "SuperSecretPassword!";

    beforeEach(async () => {
        await openUrl("/");  
        await HerokuMainPage.checkIsOpened();
    });

    it('Should be able to login with username & password', async () => {
        reporter.addStory('Success Login')

        await HerokuMainPage.clickOnFormAuth();
        await LoginPage.checkIsOpened();
        await LoginPage.login(userName, password)
        await SecurePage.checkIsOpened();
    });

    it('Check that user redirects to Login page after logout ', async () => {
        reporter.addStory('Logout scenario')

        await HerokuMainPage.clickOnFormAuth();
        await LoginPage.checkIsOpened();
        await LoginPage.login(userName, password)
        await SecurePage.checkIsOpened();

        await SecurePage.logout();

        await await LoginPage.checkIsOpened();
    });
});
