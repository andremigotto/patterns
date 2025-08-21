const TextoDecorator = require("./TextoDecorator");

class ItalicoDecorator extends TextoDecorator {
    render() {
        return `<em>${super.render()}</em>`;
    }
}

module.exports = ItalicoDecorator;
