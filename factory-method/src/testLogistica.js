const LogisticaTerreste = require("./logistica/LogisticaTerreste")
const logisticaMaritima = require("./logistica/LogisticaMaritima")

const tipoDeLogistica = "terrestre"
let transporte

if (tipoDeLogistica === "terrestre") {
    transporte = new LogisticaTerreste()
} else if (tipoDeLogistica === "maritima") {
    transporte = new logisticaMaritima()
}

transporte.entregarCarga()