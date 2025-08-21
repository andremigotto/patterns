const Texto = require("./src/Texto");
const NegritoDecorator = require("./src/NegritoDecorator");
const ItalicoDecorator = require("./src/ItalicoDecorator");
const SublinhadoDecorator = require("./src/SublinhadoDecorator");

let texto = new Texto("Olá, mundo!");

console.log(texto.render());

texto = new NegritoDecorator(texto);
console.log(texto.render());

texto = new ItalicoDecorator(texto);
console.log(texto.render());

texto = new SublinhadoDecorator(texto);
console.log(texto.render());
