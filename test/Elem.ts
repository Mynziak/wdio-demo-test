/**
 * Represents an element on the page and provides various utility methods to interact with it.
 */

export default class Elem {
  private selector: string;
  private timeout: number;

  constructor(selector: string, timeout = 10) {
    this.selector = selector;
    this.timeout = timeout;
  }

  private async getWdioElement(): Promise<WebdriverIO.Element> {
    return await browser.$(this.selector);
  }

  private async checkIsDisplayed(timeout = this.timeout): Promise<WebdriverIO.Element> {
    try {
      const element = await this.getWdioElement();
      await element.waitForDisplayed({
        timeout: this.timeout * 1000,
      });
      return element;
    } catch (error) {
      console.log(`Selector '${this.selector}' is not displayed after '${timeout}' sec!`);
      console.error(error);
      throw error;
    }
  }

  async checkIstDisappeared(timeout = this.timeout): Promise<void> {
    try {
      await this.checkIsDisplayed(timeout);
      throw new Error(`Element '${this.selector}' is still displayed after '${timeout}' sec!`);
    } catch (error) {
      console.log(`Element '${this.selector}' has disappeared`);
    }
  }

  async type(text: string, timeout = this.timeout): Promise<void> {
    const element = await this.checkIsDisplayed(timeout);
    await element.clearValue();
    await element.setValue(text);
  }

  async isPresent(timeout = this.timeout): Promise<boolean> {
    try {
      const element = await this.getWdioElement();
      await element.waitForExist({ timeout: timeout * 1000 });
      console.log(`Element '${this.selector}' is present`);
      return true;
    } catch (error) {
      console.log(`Element '${this.selector}' is not present, return False`);
      console.warn(error);
      return false;
    }
  }

  async checkElementPresence(timeout = this.timeout, customErrorMessage?: string): Promise<WebdriverIO.Element> {
    const isElementPresent = await this.isPresent(timeout);

    if (!isElementPresent) {
      const errorMessage = customErrorMessage
        ? `Element with selector "${this.selector}" is not present after '${timeout}' sec! ${customErrorMessage}`
        : `Element with selector "${this.selector}" is not present after '${timeout}' sec!`;

      throw new Error(errorMessage);
    }

    return this.getWdioElement();
  }

  async click(timeout = this.timeout): Promise<void> {
    const element = await this.getWdioElement();
    element.waitForClickable({ timeout })
    await element.click();
  }

  async getText(timeout = this.timeout): Promise<String> {
    const element = await this.checkIsDisplayed(timeout);
    return await element.getText()
  }

  async getValue(timeout = this.timeout): Promise<string> {
    const element = await this.checkElementPresence(timeout);
    return await element.getValue();
  }

  async getAttributeValue(attribute: string, timeout = this.timeout): Promise<string> {
    const element = await this.checkElementPresence(timeout);
    return await element.getAttribute(attribute);
  }
}
