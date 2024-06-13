module.exports = class Carrinho {
  #ingredientes;
  #sabor;
  #valor;
  #quantidade;
  #img;
  #totalqtd;
 

  //é o primeiro método a ser executado quando um objeto é instanciado da classe
  constructor() {
    this.#ingredientes = "";
    this.#sabor = "";
    this.#img = "";
    this.#valor = 0;
    this.#quantidade = 0;
    this.#totalqtd = 0.00;
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
  set quantidade(q) {
    this.#quantidade = q;
  }
  get quantidade() {
    return this.#quantidade;
  }
  set totalqtd(t) {
    this.#totalqtd = t;
  }
  get totalqtd() {
    return this.#totalqtd;
  }

  //função que retorna o dobro da idade
  
};
