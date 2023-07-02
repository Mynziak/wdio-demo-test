import NativeAlert from '../../screenobjects/components/NativeAlert';
import WelcomeScreen from '../../screenobjects/WelcomeScreen';

describe('Demo test of the handling alerts in iOS native ap', () => {
    beforeEach(async () => {
        await WelcomeScreen.checkIsOpened()
    });

    it('Camera permission Alert has to be displayed', async () => {
        const expected_alert_text ='Test_Application'

        await WelcomeScreen.tapOnStartMeasurement();

         // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toContain(expected_alert_text);
    });
});
