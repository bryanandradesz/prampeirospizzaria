module.exports = class Pessoa {
    #nome
    #idade
    #peso

    //é o primeiro método a ser executado quando um objeto é instanciado da classe
    constructor() {
        this.#nome = ""
        this.#idade = 0
        this.#peso = 0.0
    }

    set nome(n) {
        this.#nome = n
    }
    get nome() {
        return this.#nome
    }

    set idade(n) {
        this.#idade = n
    }
    get idade() {
        return this.#idade
    }
    set peso(p) {
        this.#peso = p
    }
    get peso() {
        return this.#peso
    }
//função que retorna o dobro da idade
    dobroIdade()
    {
        return (2* this.#idade)
    }
}