let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

const entradaTarefa = document.getElementById("entradaTarefa");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const listarTarefas = document.getElementById("listarTarefas");

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function exibirTarefas() {
  listarTarefas.innerText = "";

  tarefas.forEach((tarefa, indice) => {
    const itemLista = document.createElement("li");

    const caixaMarcacao = document.createElement("input");
    caixaMarcacao.type = "checkbox";
    caixaMarcacao.checked = tarefa.feita;
    caixaMarcacao.onchange = () => {
      tarefas[indice].feita = !tarefas[indice].feita;
      salvarTarefas();
      exibirTarefas();
    };

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = tarefa.texto;
    if (tarefa.feita) {
      textoTarefa.classList.add("concluida");
    }

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.onclick = () => {
      tarefas.splice(indice, 1);
      salvarTarefas();
      exibirTarefas();
    };

    itemLista.appendChild(caixaMarcacao);
    itemLista.appendChild(textoTarefa);
    itemLista.appendChild(botaoExcluir);
    listarTarefas.appendChild(itemLista);
  });
}

botaoAdicionar.addEventListener("click", () => {
  const texto = entradaTarefa.value.trim();
  if (texto !== "") {
    tarefas.push({ texto: texto, feita: false });
    entradaTarefa.value = "";
    salvarTarefas();
    exibirTarefas();
  }
});

exibirTarefas();