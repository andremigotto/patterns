const TextoDecorator = require("./TextoDecorator");

class SublinhadoDecorator extends TextoDecorator {
    render() {
        return `<u>${super.render()}</u>`;
    }
}

module.exports = SublinhadoDecorator;
