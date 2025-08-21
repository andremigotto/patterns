const TextoDecorator = require("./TextoDecorator");

class NegritoDecorator extends TextoDecorator {
    render() {
        return `<strong>${super.render()}</strong>`;
    }
}

module.exports = NegritoDecorator;
