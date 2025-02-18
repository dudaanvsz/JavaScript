//ex 1
let filmes = ["Dexter", "Shrek", "Barbie"]
console.log(filmes[0])

//ex 2
let frutas = ["Morango", "Abacaxi", "Maçã", "Banana", "Melão"]
console.log(frutas[2])

//ex 3
let cores = ["Azul", "Preto", "Rosa"]
for(let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}
console.log("adicionando ao fim da lista")
cores.push("Branco")
console.log(cores)

//ex 4
let numeros = [1, 2, 3, 4]
console.log("remove o último da lista")
numeros.pop()
console.log(numeros)

//ex 5
let cidades = ["Suzano", "Póa"]
console.log("adiciona no inicio da lista")
cidades.unshift("Mogi")
console.log(cidades)

//ex 6
let animais = ["Cachorro", "Gato", "Coelho"]
console.log("remove o primeiro da lista")
animais.shift()
console.log(animais)

//ex 7
let carros = ["Mercedes", "Velar", "Creta", "Nivus"]
console.log(carros.length)

//ex 8
let vazio = []

console.log("adicione três números")
vazio.push(1)
console.log(vazio)

vazio.push(2)
console.log(vazio)

vazio.push(3)
console.log(vazio)

console.log("adicione um número no início")
vazio.unshift("4")
console.log(vazio)

console.log("remova o último número")
vazio.pop()
console.log(vazio)

console.log("remova o primeiro número")
vazio.shift()
console.log(vazio)

for(let i = 0; i < vazio.length; i++) {
    console.log(vazio[i])
}
console.log(vazio.length)





