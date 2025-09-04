const ColecaoUsuarios = require('./ColecaoUsuarios');
const ColecaoProdutos = require('./ColecaoProdutos');

const usuarios = new ColecaoUsuarios();
usuarios.adicionarUsuario({ nome: 'Alice', idade: 30 });
usuarios.adicionarUsuario({ nome: 'Bob', idade: 25 });
usuarios.adicionarUsuario({ nome: 'Charlie', idade: 35 });

const produtos = new ColecaoProdutos();
produtos.adicionarProduto({ nome: 'Laptop', preco: 1500 });
produtos.adicionarProduto({ nome: 'Smartphone', preco: 800 });
produtos.adicionarProduto({ nome: 'Tablet', preco: 600 });

const iterador = usuarios.criarIterator();
const iteradorProdutos = produtos.criarIterador();

console.log('Iterando sobre os usuários:');

while (iterador.hasNext()) {
    const usuario = iterador.next();
    console.log(usuario);
}

console.log('Iterando para trás:');

while (iterador.hasPrevious()) {
    const usuario = iterador.previous();
    console.log(usuario);
}

console.log('Iterando sobre os produtos:');

while (iteradorProdutos.hasNext()) {
    const produto = iteradorProdutos.next();
    console.log(produto);
}

console.log('Iterando para trás:');

while (iteradorProdutos.hasPrevious()) {
    const produto = iteradorProdutos.previous();
    console.log(produto);
}
