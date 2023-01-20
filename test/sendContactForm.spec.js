const { describe, it } = require('mocha');
const expectChai = require('chai').expect;
const contactPage = require('../pages/contact-page');
const Browser = require('../framework/browser/browser');
const testData = require('../testData/testData.json');
const urls = require('../constants/urls.json');

describe('Checking contact form', () => {
    beforeEach(async () => {
        await Browser.start();
        await Browser.maximizeWindow();
    });

    afterEach(async () => {
        await Browser.quit();
    });

    it('Check form sending', async () => {
        Browser.goToUrl(urls.contactPage);
        await contactPage.acceptCookies();
        expectChai(await contactPage.isPageOpened(), 'The page is not opened').to.be.true;
        await contactPage.sendContactForm(
                testData.contactForm.nameAndSurname,
                testData.contactForm.emailAddress,
                testData.contactForm.messageSubject,
                testData.contactForm.message
            );
        expectChai(await contactPage.getValidationMessageText(), 'Form has not been sent').to.eq(
            testData.contactForm.validationMessage.success.pl
        );
    });
});
