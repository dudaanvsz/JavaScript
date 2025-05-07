// Chamando os elementos HTML
const letras = document.querySelector(".container-letras")
const linhaBackspaceEnter = document.querySelector("#linhaBackspaceEnter")
const linhaTeclado1 = document.querySelector("#linhaTeclado1")
const linhaTeclado2 = document.querySelector("#linhaTeclado2")
const linhaTeclado3 = document.querySelector("#linhaTeclado3")

// Definindo as letras de cada linha do teclado
const teclasLinha1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
const teclasLinha2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç"]
const teclasLinha3 = ["Z", "X", "C", "V", "B", "N", "M"]

// Define o número de tentativas (linhas) e o tamanho das palavras (colunas)
const linhas = 6
const colunas = 5

// Variáveis de controle de posição
let linhaAtual = 0
let colunaAtual = 0

// Palavras possíveis
const palavrasSecretas = ["CARRO", "LÁPIS", "LIVRO", "PRATO", "COPOS", "FRUTA", "CASAR", "FESTA", "ROUPA", "AREIA", "MOUSE", "SALAS", "CARTA", "FOLHA", "TRIGO", "PIANO", "CAMPO", "VENTO", "PEDRA", "TIGRE"]

let palavraSecreta = palavrasSecretas[Math.floor(Math.random() * palavrasSecretas.length)]

// Cria um mapa com as letras da palavra secreta
let mapaPalavra = {}
for (let i = 0; i < palavraSecreta.length; i++) {
    mapaPalavra[palavraSecreta[i]] = i
}

// Matriz que armazena os palpites
const palpites = []

// Cria as linhas e colunas do jogo
for (let l = 0; l < linhas; l++) {
    palpites[l] = new Array(colunas)
    const linhaLetras = document.createElement("div")
    linhaLetras.setAttribute("id", "linha" + l)
    linhaLetras.setAttribute("class", "linha-letras")

    for (let c = 0; c < colunas; c++) {
        const colunaLetra = document.createElement("div")
        colunaLetra.setAttribute("id", "linha" + l + "coluna" + c)
        colunaLetra.setAttribute("class", l === 0 ? "coluna-letra digitando" : "coluna-letra")
        linhaLetras.append(colunaLetra)
        palpites[l][c] = ""
    }

    letras.append(linhaLetras)
}

// Verifica se a palavra digitada está correta
function verificarPalpite() {
    const palpite = palpites[linhaAtual].join("")
    if (palpite.length !== colunas) return

    const colunasAtuais = document.querySelectorAll(".digitando")
    for (let i = 0; i < colunas; i++) {
        const letra = palpite[i]

        if (mapaPalavra[letra] === undefined) {
            colunasAtuais[i].classList.add("errada")
        } else if (mapaPalavra[letra] === i) {
            colunasAtuais[i].classList.add("certa")
        } else {
            colunasAtuais[i].classList.add("deslocada")
        }
    }

    if (palpite === palavraSecreta) {
        window.alert("Acertou! Parabéns")
    } else if (linhaAtual === linhas - 1) {
        window.alert("Errou! A palavra era: " + palavraSecreta)
    } else {
        moverParaProximaLinha()
    }
}

// Avança para a próxima linha
function moverParaProximaLinha() {
    const colunasDigitando = document.querySelectorAll(".digitando")
    colunasDigitando.forEach(col => col.classList.remove("digitando"))

    linhaAtual += 1
    colunaAtual = 0

    const novaLinha = document.querySelector("#linha" + linhaAtual)
    const novaColunas = novaLinha.querySelectorAll(".coluna-letra")
    novaColunas.forEach(col => col.classList.add("digitando"))
}

// Insere uma letra ao clicar no botão do teclado virtual
function clicarTecla(tecla) {
    if (colunaAtual === colunas) return

    const letraAtual = document.querySelector("#linha" + linhaAtual + "coluna" + colunaAtual)
    letraAtual.textContent = tecla
    palpites[linhaAtual][colunaAtual] = tecla
    colunaAtual += 1
}

// Cria botões do teclado virtual
function criarLinhaTeclado(teclas, container) {
    teclas.forEach(tecla => {
        const botao = document.createElement("button")
        botao.textContent = tecla
        botao.setAttribute("id", tecla)
        botao.addEventListener("click", () => clicarTecla(tecla))
        container.append(botao)
    })
}

// Cria o teclado virtual
criarLinhaTeclado(teclasLinha1, linhaTeclado1)
criarLinhaTeclado(teclasLinha2, linhaTeclado2)
criarLinhaTeclado(teclasLinha3, linhaTeclado3)

// Botão para apagar letra "<"
const botaoApagar = document.createElement("button")
botaoApagar.textContent = "<"
botaoApagar.addEventListener("click", apagarLetra)
linhaBackspaceEnter.append(botaoApagar)

// Botão Enter
const botaoEnter = document.createElement("button")
botaoEnter.textContent = "Enter"
botaoEnter.addEventListener("click", verificarPalpite)
linhaBackspaceEnter.append(botaoEnter)

// Função para apagar a última letra
function apagarLetra() {
    if (colunaAtual === 0) return
    colunaAtual -= 1
    palpites[linhaAtual][colunaAtual] = ""
    const letra = document.querySelector("#linha" + linhaAtual + "coluna" + colunaAtual)
    letra.textContent = ""
}

// Permite digitar com teclado físico
document.onkeydown = function (evt) {
    const tecla = evt.key.toUpperCase()
    if (evt.key === "Enter") {
        verificarPalpite()
    } else if (evt.key === "Backspace") {
        apagarLetra()
    } else if (/^[A-ZÇ]$/.test(tecla)) {
        clicarTecla(tecla)
    }
}