const funcionarios = [];
let editandoIndex = null;

document.addEventListener("DOMContentLoaded", function () {
    const botaoCadastrar = document.getElementById("buttonCadastrar");

    botaoCadastrar.addEventListener("click", () => {
        const nome = document.getElementById("nome").value;
        const idade = parseInt(document.getElementById("idade").value);
        const cargo = document.getElementById("cargo").value;
        const salario = parseFloat(document.getElementById("salario").value);

        if (editandoIndex === null) {
            funcionarios.push(new Funcionario(nome, idade, cargo, salario));
        } else {
            funcionarios[editandoIndex].nome = nome;
            funcionarios[editandoIndex].idade = idade;
            funcionarios[editandoIndex].cargo = cargo;
            funcionarios[editandoIndex].salario = salario;
            editandoIndex = null;
            botaoCadastrar.textContent = "Cadastrar";
        }
        atualizarTabela(funcionarios);
    });

    document.getElementById("todosFuncionarios").addEventListener("click", () => {
        atualizarTabela(funcionarios);
    });

    const atualizarTabela = (funcionarios) => {
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
                <button type="button" class="editarButton" data-index="${i}">Editar</button>
                <button type="button" class="excluirButton" data-index="${i}">Excluir</button>
            `;
        }
        mediaSalarial();
        listarCargosUnicos();
        criarListaNomesMaiusulo();
    };

    document.getElementById("tableFuncionariosBody").addEventListener("click", (event) => {
        const index = parseInt(event.target.dataset.index);
        if (event.target.classList.contains("editarButton")) {
            editarFuncionario(index);
        } else if (event.target.classList.contains("excluirButton")) {
            excluirFuncionario(index);
        }
    });

    const editarFuncionario = (index) => {
        if (index < 0 || index >= funcionarios.length) {
            throw "Índice inválido";
        }
        let funcionario = funcionarios[index];
        document.getElementById("nome").value = funcionario.nome;
        document.getElementById("idade").value = funcionario.idade;
        document.getElementById("cargo").value = funcionario.cargo;
        document.getElementById("salario").value = funcionario.salario;

        editandoIndex = index;
        botaoCadastrar.textContent = "Atualizar Funcionário";
    };

    const excluirFuncionario = (index) => {
        if (index < 0 || index >= funcionarios.length) {
            throw "Índice inválido";
        }
        funcionarios.splice(index, 1);
        atualizarTabela(funcionarios);
    };

    document.getElementById("buscaFuncionarioButton").addEventListener("click", () => {
        buscarFuncionario(document.getElementById("buscaFuncionario").value);
    });

    const buscarFuncionario = (nome) => {
        atualizarTabela(funcionarios.filter(funcionario => funcionario.nome === nome));
    };

    document.getElementById("maioresSalarios").addEventListener("click", ()=> {
        listarFuncionariosComMaiorSalario(5000);
    });
    const listarFuncionariosComMaiorSalario = (valor) => {
        atualizarTabela(funcionarios.filter(funcionario => funcionario.salario > valor));
    };

    const mediaSalarial = () => {
        const mediaSalario = funcionarios.reduce((acc, funcionario) => acc + funcionario.salario, 0) / funcionarios.length;
        document.getElementById("mediaSalarial").textContent = `Média dos salários: R$${mediaSalario}`;
    }

    const listarCargosUnicos = () => {
        const cargosUnicos = new Set(funcionarios.map(funcionario => funcionario.cargo));

        document.getElementById("listaCargosUnicos").textContent = `Lista de cargos: ${Array.from(cargosUnicos).join(", ")}`;
    }

    const criarListaNomesMaiusulo = () => {
        const nomesMaiusculos = funcionarios.map(funcionario => funcionario.nome.toUpperCase());
        document.getElementById("listaNomesMaiusculos").textContent = `Lista de nomes maiusculos: ${Array.from(nomesMaiusculos).join(", ")}`;
    }
});
