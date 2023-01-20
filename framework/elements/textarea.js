const Input = require('./input'); 

class Textarea extends Input {
    constructor(locator, name) {
        super(locator, name);
    }

}

module.exports = Textarea;
