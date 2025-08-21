const Transporte = require("./Transporte.Js");

class Caminhao extends Transporte {
    entregar() {
        console.log("Entregando por caminhão");
    }
}

module.exports = Caminhao;
