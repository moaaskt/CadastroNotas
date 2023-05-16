function cadastrarEstudante() {
    var nome = document.getElementById("nomeInput").value;
    var nota1 = parseFloat(document.getElementById("nota1Input").value);
    var nota2 = parseFloat(document.getElementById("nota2Input").value);
    var nota3 = parseFloat(document.getElementById("nota3Input").value);

    if (nome === "" || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    if (nota1 > 10 || nota2 > 10 || nota3 > 10) {
        alert("A nota máxima permitida é 10.");
        return;
    }

    var media = (nota1 + nota2 + nota3) / 3;
    var situacao = media >= 7 ? "Aprovado" : "Reprovado";
    var cor = media >= 7 ? "#0EAE17" : "#F23C12";

    var aluno = {
        nome: nome,
        nota1: nota1,
        nota2: nota2,
        nota3: nota3,
        media: media.toFixed(2),
        situacao: situacao,
        cor: cor
    };

    adicionarAlunoTabela(aluno);
    adicionarAlunoLista(aluno);
    limparCampos();
}

function adicionarAlunoTabela(aluno) {
    var tabela = document.getElementById("listaAlunos");

    var row = tabela.insertRow();
    var nomeCell = row.insertCell();
    var nota1Cell = row.insertCell();
    var nota2Cell = row.insertCell();
    var nota3Cell = row.insertCell();
    var mediaCell = row.insertCell();
    var situacaoCell = row.insertCell();

    nomeCell.innerHTML = aluno.nome;
    nota1Cell.innerHTML = aluno.nota1;
    nota2Cell.innerHTML = aluno.nota2;
    nota3Cell.innerHTML = aluno.nota3;
    mediaCell.innerHTML = aluno.media;

    situacaoCell.innerHTML = aluno.situacao;
    situacaoCell.style.color = aluno.cor;
    if (aluno.situacao === "Aprovado") {
        situacaoCell.classList.add("aprovado");
    } else {
        situacaoCell.classList.add("reprovado");
    }

    limparCampos()
}

// function adicionarAlunoLista(aluno) {
//     var lista = document.getElementById("listaAlunos");
//     var itemLista = document.createElement("li");
//     itemLista.innerHTML = aluno.nome + " - Nota: " + aluno.media + " - <span style='color: " + aluno.cor + "'>" + aluno.situacao + "</span>";
//     lista.appendChild(itemLista);
// }

function limparCampos() {
    document.getElementById("nomeInput").value = "";
    document.getElementById("nota1Input").value = "";
    document.getElementById("nota2Input").value = "";
    document.getElementById("nota3Input").value = "";
}

function limparAlunos() {
    var tabela = document.getElementById("listaAlunos");
    tabela.innerHTML = "";

    var lista = document.getElementById("alunosLista");
    lista.innerHTML = "";

    

}