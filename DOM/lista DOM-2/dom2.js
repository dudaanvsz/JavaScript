//ex 1
let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
    if(botao.style.backgroundColor == "red"){
         botao.style.backgroundColor = "black"
    }
    else{
        botao.style.backgroundColor = "red"
    }
})

//ex 2
const botaolike = document.getElementById("botaolike");
const contarlike = document.getElementById("likes");
let likes = 0;
botaolike.addEventListener("click", function() {
    likes++; 
    contarlike.textContent = likes; 
});

//ex 3
const mudar = document.getElementById("mudar");
const textos = [
    document.getElementById("texto1"),
    document.getElementById("texto2"),
    document.getElementById("texto3"),
    document.getElementById("texto4"),
    document.getElementById("texto5")
];
mudar.addEventListener("click", function() {
    textos.forEach(function(texto) {
        texto.textContent = "Eu gosto de JavaScript"; 
    });
});

//ex4
const enviar = document.getElementById("enviar");
const mensagem = document.getElementById("mensagem");

enviar.addEventListener("click", function() {
    mensagem.style.display = "nada"; 
    enviar.textContent = "Mensagem enviada"; 
});

//ex 5
const ajustarTexto = document.getElementById("ajustarTexto");
const textoContainer = document.getElementById("textoContainer");


ajustarTexto.addEventListener("click", function() {
    textoContainer.style.display = "flex"; 
});

//ex 6
const squareDiv = document.getElementById('square');
const circuloBotao = document.getElementById("circuloBotao");
const quadradoBotao = document.getElementById("quadradoBotao");

circuloBotao.addEventListener("click", function() {
    squareDiv.style.borderRadius = '50%'; 
});

quadradoBotao.addEventListener("click", function() {
    squareDiv.style.borderRadius = '0'; 
});