class Navegador {
  setEstrategia(estrategia) {
    this.estrategia = estrategia;
  }
  
  calcularRota(origem, destino) {
    if (!this.estrategia) {
      throw new Error('Nenhuma estratégia de rota definida');
    }
    this.estrategia.calcular(origem, destino);
  }
}

module.exports = Navegador;