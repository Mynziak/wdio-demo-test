import { RectReturn } from '@wdio/protocols/build/types';

/**
  * Swipe gestures on a mobile device's screen
  */
let SCREEN_SIZE: RectReturn;
interface XY {
  x: number;
  y: number;
}

const SWIPE_DIRECTION = {
  down: {
    start: { x: 50, y: 2 },
    end: { x: 50, y: 85 },
  },
  up: {
    start: { x: 50, y: 100 },
    end: { x: 50, y: 50 },
  },
  // Other swipe directions...
};

class Gestures {
  /**
   * Swipe down based on a percentage
   */
  static async swipeDown(percentage = 1) {
    await this.swipeOnPercentage(
      this.calculateXY(SWIPE_DIRECTION.down.start, percentage),
      this.calculateXY(SWIPE_DIRECTION.down.end, percentage),
    );
  }

  /**
   * Swipe up based on a percentage
   */
  static async swipeUp(percentage = 1) {
    await this.swipeOnPercentage(
      this.calculateXY(SWIPE_DIRECTION.up.start, percentage),
      this.calculateXY(SWIPE_DIRECTION.up.end, percentage),
    );
  }

  /**
   * Swipe from coordinates (from) to the new coordinates (to). The given coordinates are in pixels.
   */
  static async swipe(from: XY, to: XY) {
    await driver.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: from.x, y: from.y },
          { type: 'pointerDown', button: 0 },
          { type: 'pause', duration: 30 },
          { type: 'pointerMove', duration: 100, x: to.x, y: to.y },
          { type: 'pointerUp', button: 0 },
        ],
      },
    ]);
    await driver.pause(1000);
  }

  /**
   * Swipe from coordinates (from) to the new coordinates (to). The given coordinates are percentages of the screen.
   */
  static async swipeOnPercentage(from: XY, to: XY) {
    SCREEN_SIZE = SCREEN_SIZE || (await driver.getWindowRect());
    const pressOptions = this.getDeviceScreenCoordinates(SCREEN_SIZE, from);
    const moveToScreenCoordinates = this.getDeviceScreenCoordinates(SCREEN_SIZE, to);

    await this.swipe(pressOptions, moveToScreenCoordinates);
  }

  /**
   * Get the screen coordinates based on a device's screen size
   */
  private static getDeviceScreenCoordinates(screenSize: RectReturn, coordinates: XY): XY {
    return {
      x: Math.round((screenSize.width * coordinates.x) / 100),
      y: Math.round((screenSize.height * coordinates.y) / 100),
    };
  }

  /**
   * Calculate the x y coordinates based on a percentage
   */
  private static calculateXY({ x, y }: XY, percentage: number): XY {
    return {
      x: x * percentage,
      y: y * percentage,
    };
  }
}

export default Gestures;
