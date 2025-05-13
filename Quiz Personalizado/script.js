//cada pergunta tem: uma pergunta, as opções e, alternativa certa (começa no 0)
const perguntas = [
    {
        pergunta: "Ao escutar à notícia de que um filme recém-lançado arrecadou, no primeiro mês de lançamento, R$ 1,35 bilhão em bilheteria, um estudante escreveu corretamente o número que representa essa quantia, com todos os seus algarismos. O número escrito pelo estudante foi:",
        opcoes: ["1 350 000 000,00", "135 000 000,00", "135 000 000,00", "135 000,00"],
        correta: 0
    },
    {
        pergunta: "A caixa-d’água de um edifício terá a forma de um paralelepípedo retângulo reto com volume igual a 28 080 litros. Em uma maquete que representa o edifício, a caixa-d’água tem dimensões 2 cm x 3,51 cm x 4 cm. Dado: 1 dm³ = 1 L. A escala usada pelo arquiteto foi:", 
        opcoes: ["1 : 1 000", "1 : 100 000", "1 : 100", "1 : 10"],
        correta: 2
    },
    {
        pergunta: "As medidas internas de um reservatório no formato de um paralelepípedo são de 2,5m de comprimento, 1,8m de largura e 1,2m de profundidade (altura). Se em determinado momento do dia esse reservatório está apenas com 70% de sua capacidade, a quantidade de litros que faltam para encher esse reservatório é igual a:",
        opcoes: ["1630", "1620", "1640", "1650"],
        correta: 1
    },
    {
        pergunta: "Uma mãe recorreu à bula para verificar a dosagem de um remédio que precisava dar a seu filho. Na bula, recomendava-se a seguinte dosagem: 5 gotas para cada 2 kg de massa corporal a cada 8 horas. Se a mãe ministrou corretamente 30 gotas do remédio a seu filho a cada 8 horas, então a massa corporal dele é de:",
        opcoes: ["15 kg.", "16 kg.", "24 kg.", "12 kg."],
        correta: 3
    },
    {
        pergunta: "m hotel de 3 andares está sendo construído. Cada andar terá 100 quartos. Os quartos serão numerados de 100 a 399 e cada um terá seu número afixado à porta. Cada número será composto por peças individuais, cada uma simbolizando um único algarismo. Qual a quantidade mínima de peças, simbolizando o algarismo 2, necessárias para identificar o número de todos os quartos?",
        opcoes: ["157.", "160.", "120.", "146."],
        correta: 1
    },
    {
        pergunta: "Qual é a raiz quadrada de 144?",
        opcoes: ["12", "14", "16", "10"],
        correta: 0
    },
    {
        pergunta: "Qual o valor de 30% de 500?",
        opcoes: ["100", "150", "200", "50"],
        correta: 1
    },
    {
        pergunta: "Se x + 5 = 12, o valor de x é:",
        opcoes: ["6", "5", "7", "8"],
        correta: 2
    },
    {
        pergunta: "Um carro percorre 240 km com 20 litros de combustível. Qual é o consumo médio em km por litro?",
        opcoes: ["10", "11", "12", "13"],
        correta: 3
    },
    {
        pergunta: "A soma dos ângulos internos de um triângulo é:",
        opcoes: ["180°", "360°", "90°", "270°"],
        correta: 0
    }
    
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
