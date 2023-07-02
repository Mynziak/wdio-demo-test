import PrivacyPolicyScreen from '../../screenobjects/PrivacyPolicyScreen';
import WelcomeScreen from '../../screenobjects/WelcomeScreen';

describe('Verify privacy policy link on start (Welcome) Screen', () => {

    beforeEach(async () => {
        await WelcomeScreen.checkIsOpened();
    });

    it('Should be able to open and close Privacy Policy web page', async () => {
        await WelcomeScreen.tapOnPrivacyPolicy();

        await PrivacyPolicyScreen.checkIsOpened();

        await PrivacyPolicyScreen.closePolicy()

       await WelcomeScreen.checkIsOpened();
    });
});

