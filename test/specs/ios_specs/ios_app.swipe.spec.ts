import CameraViewScreen from '../../screenobjects/CameraViewScreen';
import ResultScreen from '../../screenobjects/ResultScreen';
import WelcomeScreen from '../../screenobjects/WelcomeScreen';
import { blockDisplay } from '../../utils/Utils';

describe('Interrupt camera analysys process and try to continue', () => {

  beforeEach(async () => {
    await driver.launchApp()

    await WelcomeScreen.checkIsOpened();
  });

  it('Verify that camera view displayed after block/unblock screen', async () => {
    await WelcomeScreen.tapOnStartMeasurement();

    await CameraViewScreen.checkIsOpened() //Start of the measurement process

    //Block and unblock display
    blockDisplay()

    await ResultScreen.checkIsOpened() 
  });
});


