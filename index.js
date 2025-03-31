const funcionarios = [];

const cadastrarButton = function () {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cargo = document.getElementById("cargo").value;
    const salario = document.getElementById("salario").value;
    funcionarios.push(new Funcionario(nome, idade, cargo, salario));
    atualizarTabela();
};

const atualizarTabela = function () {
    const tableFuncionarios = document.getElementById("tableFuncionariosBody");
    tableFuncionarios.innerHTML = "";
    for (let i = 0; i < funcionarios.length; i++) {
        const funcionario = funcionarios[i];
        const linha = tableFuncionarios.insertRow(0);
        const celulaNome = linha.insertCell(0);
        const celulaIdade = linha.insertCell(1);
        const celulaCargo = linha.insertCell(2);
        const celulaSalario = linha.insertCell(3);
        const celulaAcao = linha.insertCell(4);

        celulaNome.textContent = funcionario.nome;
        celulaIdade.textContent = funcionario.idade;
        celulaCargo.textContent = funcionario.cargo;
        celulaSalario.textContent = funcionario.salario;
        celulaAcao.innerHTML = `
        <button type="button" class="editarButton" onclick="editarFuncionario(${i})">Editar</button>
        <button type="button" class="excluirButton" onclick="excluirFuncionario(${i})">Excluir</button>
        `
    }
};

const AtualizarFuncionarioButton = function (index) {
    if (index < 0 || index >= funcionarios.length) {
        throw "indice invalido";
    }
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cargo = document.getElementById("cargo").value;
    const salario = document.getElementById("salario").value;

    funcionarios[index].nome = nome;
    funcionarios[index].idade = idade;
    funcionarios[index].cargo = cargo;
    funcionarios[index].salario = salario;
    const botao = document.getElementById("buttonEditar");
    botao.setAttribute("onclick", "cadastrarButton()");
    botao.textContent = "Cadastrar";
    botao.setAttribute("id", "buttonCadastrar");
    atualizarTabela();
}

const editarFuncionario = function (index) {
    if (index < 0 || index >= funcionarios.length) {
        throw "indice invalido";
    }
    let funcionario = funcionarios[index];
    document.getElementById("nome").value = funcionario.nome;
    document.getElementById("idade").value = funcionario.idade;
    document.getElementById("cargo").value = funcionario.cargo;
    document.getElementById("salario").value = funcionario.salario;
    const botao = document.getElementById("buttonCadastrar");
    botao.setAttribute("onclick", `AtualizarFuncionarioButton(${index})`);
    botao.textContent = "Atualizar funcionario";
    botao.setAttribute("id", "buttonEditar");
}

const excluirFuncionario = function (index) {
    if (index < 0 || index >= funcionarios.length) {
        throw "indice invalido";
    }
    funcionarios.splice(index, 1);
    atualizarTabela();
}