const Iterator = require('./Iterator');

class ColecaoUsuarios {
    constructor() {
        this.usuarios = [];
    }

    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
    }
    
    obterTodosUsuarios() {
        for (const usuario of this.usuarios) {
            console.log(usuario);
        }
    }

    criarIterator() {
        return new Iterator(this.usuarios);
    }
}

module.exports = ColecaoUsuarios;
