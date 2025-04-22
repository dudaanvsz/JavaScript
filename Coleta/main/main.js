//main.js

//funções matemáticas
let num = 4.7

//arrendondar números 
console.log(Math.round(num)) //inteiro mais próximo
console.log(Math.floor(num)) //arredonda para baixo
console.log(Math.ceil(num)) //arredonda para cima

//número aleatório
console.log(Math.random()) //número aleatório entre 0 e 1
console.log(Math.random()*10)//número aleatório entre 0 e 10

//funções de String
let texto = "Eu amo javaScript"
//manipular string
console.log(texto.toUpperCase()) //deixa tudo maiusculo
console.log(texto.toLowerCase()) //deixa tudo minusculo
console.log(texto.trim()) //remove espaços antes e depois 

//localizar textos
console.log(texto.charAt(5)) //mostra a letra que está nessa posição
console.log(texto.includes("javaScript")) //verifica se tem a palavra

//trocar textos
console.log(texto.replace("amo", "adoro"))

//funções númericas
let numero = "42.85"
console.log(parseInt(numero)) //converte String para número inteiro
console.log(parseFloat(numero)) // converte String para número decimal
console.log(Number(numero).toFixed(1)) //Define quantas cassa decimais
//vai mostrar
//verifica se é número ou não
console.log(isNaN("abc")) //verdadeiro, não é um número 
console.log(isNaN(123)) //falso, é um número

