import Elem from "../../Elem";
import reporter from '@wdio/allure-reporter';

class SecurePage {
    private get logoutnBtn() { return new Elem('i.icon-2x.icon-signout'); }

    async checkIsOpened(): Promise<void> {
        await this.logoutnBtn.checkElementPresence(15, "Secure  Page is not opened!")
    }

    async logout() {
        reporter.addStep('Logout')

        await this.logoutnBtn.click()
    }
}

export default new SecurePage();
