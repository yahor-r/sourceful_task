const { By } = require('selenium-webdriver');

const locators = {
    contactForm: {
        form: By.xpath('//form[contains(@action, "/contact")]'),
        nameAndSurnameInput: By.xpath('//input[@name="your-name"]'),
        emailAddressInput: By.xpath('//input[@name="your-email"]'),
        messageSubjectInput: By.xpath('//input[@name="your-subject"]'),
        messageTextarea: By.xpath('//textarea[@name="your-message"]'),
        sendButton: By.xpath('//input[@type="submit"]'),
        validationMessage: By.xpath('//div[contains(@class, "wpcf7-response-output")]'),
    }
}

module.exports = { locators };
