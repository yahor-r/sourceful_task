const BaseElement = require('../../framework/elements/base-element');
const Logger = require('../../framework/utils/logger.util');
const { Button } = require('../../framework/elements');
const { locators } = require('./locators');


class BasePage {
    constructor(uniqueLocator, name) {
        this.uniqueLocator = uniqueLocator;
        this.name = name;
        this.uniqueElement = new BaseElement(this.uniqueLocator, this.name); 
    }

    get _acceptCookiesButton() {
        return new Button(locators.acceptCookiesButton, 'Send button');
    }

    async isPageOpened() {
        const isOpened = await this.uniqueElement.isDisplayed();
        Logger.info(`Form "${this.name}" is opened - "${isOpened}"`);
        return isOpened;
    }

    async acceptCookies() {
        return this._acceptCookiesButton.click();
    }
}

module.exports = BasePage;
