class Funcionario {
    constructor(nome, idade, cargo, salario) {
        this._nome = nome;
        this._idade = idade;
        this._cargo = cargo;
        this._salario = salario;
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

    get idade() {
        return this._idade;
    }

    set idade(value) {
        this._idade = value;
    }

    get cargo() {
        return this._cargo;
    }

    set cargo(value) {
        this._cargo = value;
    }

    get salario() {
        return this._salario;
    }

    set salario(value) {
        this._salario = value;
    }

    toString() {
        return `Funcionario [nome=${this.nome()}, idade=${this.idade()}, cargo=${this.cargo()}, salario=${this.salario()}]`;
    }
}