//cada pergunta tem: uma pergunta, as opções e, alternativa certa (começa no 0)
const perguntas = [
    {
        pergunta: "Qual o nome da nossa escola?",
        opcoes: ["Luis Eulalio de Bueno Vidigal Filho", "Luis Eulalio", "Luis de Bueno", "Luis Eulalio de Vidigal"],
        correta: 0
    },
    {
        pergunta: "Qual o nome do nosso curso?", 
        opcoes: ["Analise e Desenvolvimento de Sistemas", "Sistema da Informção", "Desenvolvimento de Sistemas", "Ciência da Computação"],
        correta: 2
    },
    {
        pergunta: "Em que ano foi fundada a nossa escola?",
        opcoes: ["1999", "1942", "1985", "1970"],
        correta: 1
    },
]
//variáveis para controlar o quiz
let perguntaAtual = 0 //qual pergunta está sendo mostrada
let pontuacao = 0 //quantidade de acertos
let erros = 0 //quantidade de erros
let opcaoSelecionada = null //qual opção o usuário selecionou

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document. getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById ("erros")
const acertos = document.getElementById ("acertos")

// função que atualiza o placar
function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}  
// função que mostra a pergunta atual
function mostrarPergunta() {
//Pega a pergunta atual
const perguntaAtualObj = perguntas[perguntaAtual]
// Mostra o texto da pergunta
pergunta.textContent = perguntaAtualObj.pergunta
opcoes.textContent = "" //limpa as opcoes anteriores

// Cria um botão para cada opção de resposta
perguntaAtualObj.opcoes.forEach((opcao, indice) => {
    const botao = document.createElement ("button")
    botao.textContent = opcao
    botao.classList.add("opcao")
    botao.addEventListener("click", () => selecionarOpcao(indice))
    opcoes.appendChild(botao)
 })
opcaoSelecionada = null
botaoProxima.disabled = true //desabilita o botão de proxima
}
// Para quando o usuário escolher uma opção
function selecionarOpcao(indice) {
opcaoSelecionada = indice
//atualiza o visual da opção selecionada
const opcoes = document.querySelectorAll(".opcao")
opcoes.forEach((opcao, i) => {
opcao.classList.toggle("selecionada", i == indice)
})
 botaoProxima.disabled = false //habilita o botao de proxima
}
function mostrarPontuacao() {
    quiz.classList.add("esconder")
    pontuacaoFinal. classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}
// Função para ir para a próxima pergunta
botaoProxima.addEventListener("click", () => {
// Verifica se a resposta está correta
if(opcaoSelecionada == perguntas[perguntaAtual].correta) {
pontuacao++
} else {
erros++
}
atualizarPlacar()

perguntaAtual++
if(perguntaAtual < perguntas.length) {
    mostrarPergunta()
    } else {
    mostrarPontuacao()
}
 })
//botao para reiniciar o quiz
    botaoReiniciar.addEventListener("click", () => {
        // Reseta todas as variáveis
        perguntaAtual = 0
        pontuacao = 0
        erros = 0
   //o quiz aparece e a pontuação final some     
        quiz.classList.remove("esconder")
        pontuacaoFinal. classList.add("esconder")
         atualizarPlacar()
         mostrarPergunta()
})

mostrarPergunta()
