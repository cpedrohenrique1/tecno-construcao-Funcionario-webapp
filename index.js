const funcionarios = [];

const cadastrarButton = ()=> {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cargo = document.getElementById("cargo").value;
    const salario = document.getElementById("salario").value;
    funcionarios.push(new Funcionario(nome, idade, cargo, salario));
    atualizarTabela();
};

const atualizarTabela = () => {
    const tableFuncionarios = document.getElementById("tableFuncionariosBody");
    tableFuncionarios.innerHTML = "";
    for (let i = 0; i < funcionarios.length; i++) {
        const funcionario = funcionarios[i];
        const linha = tableFuncionarios.insertRow(0);
        const celulaNome = linha.insertCell(0);
        const celulaIdade = linha.insertCell(1);
        const celulaCargo = linha.insertCell(2);
        const celulaSalario = linha.insertCell(3);

        celulaNome.textContent = funcionario.nome;
        celulaIdade.textContent = funcionario.idade;
        celulaCargo.textContent = funcionario.cargo;
        celulaSalario.textContent = funcionario.salario;
    }
};