//ex1
let contador = 1 
while(contador != 21) {
    console.log(" do while:", contador)
    contador++
}

//ex2
 let usuario= prompt("Deseja continuar?")
    do {
        if (usuario != "s") {
 }
        else { 
            usuario = prompt("Deseja continuar?")
        }
    } while (usuario != "n")

//ex3
let usuario1= prompt("Escolha um número")
let numero1 = 0
do {
    console.log(numero1)
    numero1+=1
}
while(numero1 <= usuario1)
    
//ex4
let contador1 = 1 
while(contador1 <= 31) {
    console.log(contador1)
    contador1+=2
}

//ex 5
let repeticao = 0
do { let numerica = prompt("Digite cinco números")
    if(numerica > 0) {
        console.log("Número positivo")
    }
    else if (numerica < 0) { 
        console.log("Número negativo")
    }
    else {
    console.log("O número é zero")
    }
    repeticao++
}
while (repeticao < 5)

//ex 6
let continuar = 's'
do {
    let numero3 = prompt("Digite o primeiro número:")
    let numero4 = prompt("Digite o segundo número:")
    let soma = Number(numero3) + Number(numero4)
    console.log("A soma é:", soma)
    continuar = prompt("Você deseja fazer outra conta? (s para continuar)")
} while (continuar === 's')