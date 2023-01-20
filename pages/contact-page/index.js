const { Button, Input, Paragraph, Textarea } = require('../../framework/elements');
const BasePage = require('../base-page');
const { locators } = require('./locators');

class ContactPage extends BasePage {
    constructor() {
        super(locators.contactForm.form, 'Contact page');

    }
    get _nameAndSurnameInput() {
        return new Input(locators.contactForm.nameAndSurnameInput, 'Name and surname input');
    }

    get _emailAddressInput() {
        return new Input(locators.contactForm.emailAddressInput, 'Email address input');
    }

    get _messageSubjectInput() {
        return new Input(locators.contactForm.messageSubjectInput, 'Message subject input');
    }

    get _messageTextarea() {
        return new Textarea(locators.contactForm.messageTextarea, 'Message textarea');
    }

    get _sendButton() {
        return new Button(locators.contactForm.sendButton, 'Send button');
    }

    get _validationMessage() {
        return new Paragraph(locators.contactForm.validationMessage, 'Form validation message');
    }

    async typeNameAndSurname(text) {
        return this._nameAndSurnameInput.typeText(text);
    }

    async typeEmailAddress(text) {
        return this._emailAddressInput.typeText(text);
    }

    async typeMessageSubject(text) {
        return this._messageSubjectInput.typeText(text);
    }

    async typeMessage(text) {
        return this._messageTextarea.typeText(text);
    }

    async clickSendButton() {
        return this._sendButton.click();
    }

    async sendContactForm(name, email, messageSubject, message) {
        await this.typeNameAndSurname(name);
        await this.typeEmailAddress(email);
        await this.typeMessageSubject(messageSubject);
        await this.typeMessage(message);
        await this.clickSendButton();
    }

    async getValidationMessageText() {
        return this._validationMessage.getText();
    }

}

module.exports = new ContactPage();
