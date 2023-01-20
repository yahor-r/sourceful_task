const BaseElement = require('./base-element'); 

class Paragraph extends BaseElement {
    constructor(locator, name) {
        super(locator, name);
    }

}

module.exports = Paragraph;
