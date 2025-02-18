let amigos = ["Carlos", "Joana", "Marcos", "Barbara", "Luana"]

console.log(amigos[3])

for(let i = 0; i < amigos.length; i++) {
    console.log(amigos[i])
}
console.log("adicionando ao fim da lista")
amigos.push("Fernanda")
console.log(amigos)

console.log("remove o primeiro da lista")
amigos.shift()
console.log(amigos)

console.log("remove o último da lista")
amigos.pop()
console.log(amigos)

console.log("adiciona no inicio da lista")
amigos.unshift("Tati")
console.log(amigos)