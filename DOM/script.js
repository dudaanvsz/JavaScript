let titulo = document.getElementById("titulo")
//document = HTML
//getElementByID = pegue o elemento pelo id 
//logo, quando fizemos isso guardamos o que estava no HTML em uma variável no js 
console.log(titulo.innerText)

//---------------------------------------------

let texto = document.getElementById("texto")
texto.innerText = "Texto Alterado"
//altera o texto de uma tag
texto.style.color = "blue"
//Usando o style podemos mexer no css

//---------------------------------------------

let botao = document.getElementById("botao")
//quando clica acontece alguma coisa 
botao.addEventListener("click", function() {
    alert("botão clicado")
})
//alerta de mensagem

//---------------------------------------------

let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick", function() {
duplo.style.backgroundColor = "red"
})
//Só aontece quando clica duas vezes

//---------------------------------------------

let passe = document.getElementById("passe")
passe.addEventListener("mouseover", function() {
    passe.innerText = "o mouse está aqui"
    passe.style.backgroundColor = "yellow"
}) //o mouseover é quando o mouse está sobre o elemento

passe.addEventListener("mouseout", function() {
    passe.innerText = "passe o mouse aqui"
    passe.style.backgroundColor = "blue"
    passe.style.fontSize = "16px"
}) //o mouseout é quando o mouse está fora do elemento

