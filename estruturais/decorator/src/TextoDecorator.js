const Text = require("./Texto");

class TextoDecorator extends Text {
    constructor(text) {
        super(text);
        this.text = text;
    }

    render() {
        return this.text.render();
    }
}

module.exports = TextoDecorator;
