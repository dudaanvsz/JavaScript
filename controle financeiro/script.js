//pegando os elementos html
const corpoTabela = document.querySelector("tbody")
const campoDescricao = document.querySelector("#descricao")
const campoValor = document.querySelector("#valor")
const campoTipo = document.querySelector("#tipo")
const botaoAdicionar = document.querySelector("#botao-adicionar")

const spanEntradas = document.querySelector(".valor-entradas")
const spanSaidas = document.querySelector(".valor-saidas")
const spanTotal = document.querySelector(".valor-total")

let listarItens //para listar os itens adcionados

//função de adicionar novo gasto
botaoAdicionar.addEventListener("click", () => {
    //verificando se algum campo está vazio
    if(campoDescricao.value == "" || campoValor.value == "" || campoTipo.value == "") {
        return alert("Preencha todos os campos")
    }
    //criando um objeto com valores
    listarItens.push({
        descricao: campoDescricao.value,
        valor: Math.abs(campoValor.value).toFixed(2),
        tipo: campoTipo.value
    })
    salvarItensBD()
    carregarItens()
    //deixa os campos em branco novamente
    campoDescricao.value = ""
    campoValor.value = ""
})
//função pararemover o item
function removerItens(indice) {
    listarItens.splice(indice, 1)
    salvarItensBD()
    carregarItens()
}
//função para inserir um item
function inserirItem(item, indice) {
    let linha = document.createElement("tr") //criando uma linha na tabela

    let iconeTipo = ""
    if(item.tipo == "Entrada"){
        iconeTipo == "Entrada"
    } else {
        iconeTipo = "Saída"
    }
    //criando a linha com elementos na tabela
    linha.innerHTML = `
    <td>${item.descricao}</td>
    <td>${item.valor}</td>
    <td class="coluna-tipo"><p>${iconeTipo}</p></td>
    <td class="coluna-acao">
    <button onclick="removerItens(${indice})">Remover</button>
    </td>`

    corpoTabela.appendChild(linha) //adicionando a linha criada na tabela
}
//carregar a tabela com os itens criados 
function carregarItens() {
    listarItens = obterItensBD()
    corpoTabela.innerHTML = ""
    listarItens.forEach((item, indice) => {
        inserirItem(item, indice)
    })
    calcularTotal()
}
//calcular o total da entrada, saída e quanto restou
function calcularTotal() {
    let totalEntradas = 0
    let totalSaidas = 0

    listarItens.forEach((item) => {
        const valor = Number(item.valor)
        if(item.tipo == "Entrada") {
            totalEntradas += valor
        } else if (item.tipo == "Saída") {
            totalSaidas += valor
        }
    })
    const saldoTotal = (totalEntradas - totalSaidas).toFixed(2)
    const totalEntradaFixado = totalEntradas. toFixed(2)
    const totalSaidaFixado = totalSaidas.toFixed(2)

     spanEntradas.innerHTML = totalEntradaFixado
     spanSaidas.innerHTML = totalSaidaFixado
     spanTotal.innerHTML = saldoTotal
}
const obterItensBD = () => JSON.parse(localStorage.getItem
("bd_itens")) ?? []
const salvarItensBD = () => localStorage. setItem("bd_itens", JSON.
stringify(listarItens))

carregarItens ()
