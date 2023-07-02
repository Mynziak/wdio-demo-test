import Elem from "../../Elem";
import reporter from '@wdio/allure-reporter';

class HerokuMainPage {
    private get formAuthLink() { return new Elem('a[href="/login"]'); }

    async checkIsOpened(): Promise<void> {
        await this.formAuthLink.checkElementPresence(15, "Heroku Web Page is not loaded!")
    }

    async clickOnFormAuth() {
        reporter.addStep("Click on Form Authenication")

        await this.formAuthLink.click()
    }
}

export default new HerokuMainPage();
