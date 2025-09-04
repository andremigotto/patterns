const Iterator = require('./Iterator');

class ColecaoProdutos {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    criarIterador() {
        return new Iterator(this.produtos);
    }
}

module.exports = ColecaoProdutos;
        