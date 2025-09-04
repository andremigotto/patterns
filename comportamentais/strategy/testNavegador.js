const Navegador = require('./models/Navegador');
const RotaCarro = require('./models/RotaCarro');

const navegador = new Navegador();

navegador.setEstrategia(new RotaCarro());
navegador.calcularRota('Casa', 'Trabalho');