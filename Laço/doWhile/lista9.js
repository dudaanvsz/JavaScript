//ex 1
for(let contador = 0; contador <= 30; contador ++){
    console.log(contador)
    } 
    
//ex 2
for(let c = 30; c>= 0; c--) {
    console.log(c)
}

//ex 3
let num = prompt("Digite um número:")
for (let num = 0; num < 5; num++) {
    let numero1 = prompt("Digite um número: ")
    if (numero1 >= 50) {
        console.log("Acima da Média")
    } else {
        console.log("Abaixo da Média")
    }
}

//ex 4
let numero = prompt("Digite um número: ")
for(let mult = 1; mult <= 10; mult++) {
 let resultado = mult * numero 
 console.log(numero, "x", mult, "=", resultado)
}

//ex 5
let patinhos = prompt("Digite o número inicial de patinhos: ")
for (let num1 = patinhos; num1 > 0; num1--) {
    console.log(num1 + " patinho(s) foram passear");
    console.log("Além das montanhas");
    console.log("Para brincar");
    console.log("A mamãe gritou: Quá, quá, quá, quá");
    console.log("Mas só " + (num1 - 1) + " patinho(s) voltaram de lá.");
}
console.log("A mamãe patinha foi procurar");
console.log("Além das montanhas");
console.log("Na beira do mar");
console.log("A mamãe gritou: Quá, quá, quá, quá");
console.log("E os patinhos voltaram de lá.");

//ex 6
let i = prompt("Digite sua idade: ")
for (let i = 0; i < 10; i++) {
    let idade = prompt("Digite uma idade: ")
    if (idade >= 18) {
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}

//ex 7
let votos = [];

for (let i = 0; i < 5; i++) {
let votos = prompt("Digite o voto (1-4 para candidatos, 5 para nulo, 6 para branco):")
}
for (let i = 0; i < 5; i++) {
  if (votos[i] == 1) {
    console.log("Voto " + (i + 1) + ": Candidato 1");
  } else if (votos[i] == 2) {
    console.log("Voto " + (i + 1) + ": Candidato 2");
  } else if (votos[i] == 3) {
    console.log("Voto " + (i + 1) + ": Candidato 3");
  } else if (votos[i] == 4) {
    console.log("Voto " + (i + 1) + ": Candidato 4");
  } else if (votos[i] == 5) {
    console.log("Voto " + (i + 1) + ": Nulo");
  } else if (votos[i] == 6) {
    console.log("Voto " + (i + 1) + ": Branco");
  } else {
    console.log("Voto " + (i + 1) + ": Inválido");
  }
}
