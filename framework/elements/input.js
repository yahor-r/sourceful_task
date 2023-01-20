const Logger = require('../utils/logger.util');
const BaseElement = require('./base-element');

class Input extends BaseElement {
    constructor(locator, name) {
        super(locator, name);
    }

    async typeText(text) {
        Logger.info(`Type "${text}" text in the "${this.name}"`);
        return (await this._findElement()).sendKeys(text);
    }

}

module.exports = Input;
