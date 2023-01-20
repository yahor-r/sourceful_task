const { until } = require('selenium-webdriver');
const Browser = require('../browser/browser');
const Logger = require('../utils/logger.util');

class BaseElement {
    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
    }

    async _findElement() {
        Logger.info(`Find the "${this.name}"`);
        await Browser.wait(until.elementLocated(this.locator));
        return Browser.driver.findElement(this.locator);
    }

    async getText() {
        Logger.info(`Get text from the "${this.name}"`);
        return (await this._findElement()).getText();
    }

    async click() {
        Logger.info(`Click on the "${this.name}"`);
        return (await this._findElement()).click();
    }

    async isDisplayed() {
        Logger.info(`Check that the "${this.name}" is displayed`);
        return (await this._findElement()).isDisplayed(); 
    }
}

module.exports = BaseElement;
