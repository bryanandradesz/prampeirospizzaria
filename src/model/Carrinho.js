module.exports = class Carrinho {
  #ingredientes;
  #sabor;
  #valor;
  #img;

  //é o primeiro método a ser executado quando um objeto é instanciado da classe
  constructor() {
    this.#ingredientes = "";
    this.#sabor = "";
    this.#valor = 0;
  }

  set ingredientes(i) {
    this.#ingredientes = i;
  }
  get ingredientes() {
    return this.#ingredientes;
  }

  set sabor(s) {
    this.#sabor = s;
  }
  get sabor() {
    return this.#sabor;
  }
  set valor(v) {
    this.#valor = v;
  }
  get valor() {
    return this.#valor;
  }
  set img(i) {
    this.#img = i;
  }
  get img() {
    return this.#img;
  }
  //função que retorna o dobro da idade
  total(v) {
    var total = 0
    console.log( total += this.#valor)
  }
};
