const { By } = require('selenium-webdriver');

const locators = {
    acceptCookiesButton: By.xpath('//button[@id="cookie-law-btn"]'),
}

module.exports = { locators };
