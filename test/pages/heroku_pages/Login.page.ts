import Elem from "../../Elem";
import reporter from '@wdio/allure-reporter';

class LoginPage {
    private get loginBtn() { return new Elem('i.fa.fa-2x.fa-sign-in'); }
    private get usename_input() { return new Elem('#username'); }
    private get password_input() { return new Elem('#password'); }

    async checkIsOpened(): Promise<void> {
        await this.loginBtn.checkElementPresence(15, "Heroku Login Page is not opened!")
    }

    async login(userName: string, password : string) {
        reporter.addStep('Login with: ' +userName+', '+ password);

        await this.usename_input.type(userName);
        await this.password_input.type(password)
        await this.loginBtn.click()
    }
}

export default new LoginPage();
