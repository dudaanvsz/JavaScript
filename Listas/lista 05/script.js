// 1

let idade1 = prompt("Qual sua idade?")
if (idade1 < 18) {
    console.log("Você não pode dirigir")
} else if (idade1 > 18) {
    console.log("Você pode dirigir")
}

// 2

let anosTrabalho = prompt("Quantos anos você trabalhou na empresa?")
let projetos = prompt("Quantos projetos você realizou?")
if (anosTrabalho >= 5 || projetos > 10) {
    console.log("Você está elegível para promoção")
} else {
    console.log("Você não está elegível para promoção")
}

// 3

let idade2 = prompt("Quantos anos você tem?")
if(idade2 >= 18 && idade2 <=30){
    console.log("Você pode entrar no evento")
} else{
    console.log("Você não pode entrar no evento")
}

// 4

let idade3 = prompt("Qual sua idade?")
if (idade3 > 21){
    console.log("Você foi aceito para a vaga")
} else{
    console.log("Você não foi aceito para vaga")
}

// 5

let nome = prompt("Qual o username?")
let senha = prompt("Digite a senha")
if (nome == "admin" && senha == 1234){
    console.log("Login bem-sucedido")
} else{
    console.log("Nome de usuário ou senha incorretos")
}

// 6

let num = prompt("Digite um número")

if (num >= 10 && num <= 20) {
    console.log("O número está dentro do intervalo entre 10 e 20")
} else if (num >= 30 && num <= 50) {
    console.log("O número está dentro do intervalo entre 30 e 50")
} else {
    console.log("Ele não está dentro do intervalo de 10 e 20 nem 30 e 50")
}

// 7

let numero = prompt("Digite um numero")
if (numero < 10 || numero > 100){
    console.log("O número é aceito")
} else if(numero == 50){
    console.log("O número é aceito")
} else{
    console.log("O número não é aceito")
}