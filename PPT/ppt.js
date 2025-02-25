// Jogo Pedra, Papel e Tesoura
//Variáveis para armazenar os pontos do jogador e pc
let placarJogador = 0
let placarPC = 0

//Variáveis para armazenar as rodadas
let rodadas = Number(prompt("Quantas vezes você quer jogar?"))

//Laço de repetição que fará as rodadas
for (let i = 0; i < rodadas; i++) {

    const EscolhaJogador = prompt("Escolha pedra, papel ou tesoura: ")
    // solicita que o usuário informe qual ele quer

    const EscolhaPC = ["pedra", "papel", "tesoura"]
    [Math.floor(Math.random() * 3)]

    //Gera uma escolha aleatoria para o computador
    // Criamos um array com as opções e usamos o radom para escolher uma de forma aleatoria

    alert(`Você escolheu ${EscolhaJogador}`)
    alert(`O computador escolheu ${EscolhaPC}`)

    // mostrando qual foi a nossa escolha e qual foi a escolha do computador

    //Compara se a nossa escolha foi igual a do computador

    if (EscolhaJogador == EscolhaPC) {
        alert("Empate")
    } else if (EscolhaJogador == "pedra" && EscolhaPC == "tesoura") {
        alert("Você venceu")
        placarJogador++
    } else if (EscolhaJogador == "tesoura" && EscolhaPC == "papel") {
        alert("Você venceu")
        placarJogador++
    } else if (EscolhaJogador == "papel" && EscolhaPC == "pedra") {
        alert("Você venceu")
        placarJogador++
    } else {
        alert("Você perdeu")
        placarPC++
    }
    //Exibe o placar no conosle
    console.log("Placar Jogador: ", placarJogador) 
    console.log("Placar computador: ", placarPC) 
}
 //Placar final
 alert(`Fim de jogo! Placar final: Jogador ${placarJogador} x ${placarPC} Computador`)