const Transporte = require("./Transporte.Js");

class Navio extends Transporte {
    entregar() {
        console.log("Entregando por navio");
    }
}