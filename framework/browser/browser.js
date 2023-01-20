require('chromedriver');
const { Builder } = require('selenium-webdriver');
const config = require('../../config/config.json');

class Browser {
    constructor() {
        this.driver;
    }

    static async start() {
        this.driver = await new Builder().forBrowser('chrome').build();
    }

    static async goToUrl(url) {
        return this.driver.get(url);
    }

    static async quit() {
        return this.driver.quit();
    }

    static async maximizeWindow() {
        return this.driver.manage().window().maximize();
    }

    static async wait(condition, timeout = config.timeouts.baseTimeout) {
        return this.driver.wait(condition, timeout);
    }
}

module.exports = Browser;
