//ex 1
let texto = document.getElementById("texto")
let botao = document.getElementById("botao")
botao.addEventListener("click", function() {
texto.style.color = "blue"
})

//ex 2
let botao2 = document.getElementById("botao2")
botao2.addEventListener("click", function() {
    botao2.style.backgroundColor = "pink"
    })

//ex 3
let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick", function() {
duplo.style.fontSize = "20px"
})

// 4
let passe = document.getElementById("passe")
passe.addEventListener("mouseover", function() {
    passe.style.backgroundColor = "blue"
})
passe.addEventListener("mouseout", function() {
    passe.style.backgroundColor = " lightgrey"
}) 
 
//ex 5
function aumentarImagem() {
    let img = document.getElementById("imagem");
    img.style.width = "200px";
    img.style.height = "200px";
}
//ex 6
function arredondarImagem() {
    document.getElementById("imagemRedonda").style.borderRadius = "50%";
}
//ex 7
function alterarParagrafo1() {
    let p = document.getElementById("paragrafo1");
    p.style.backgroundColor = "yellow";
    p.style.color = "blue";
}

function alterarParagrafo2() {
    let p = document.getElementById("paragrafo2");
    p.style.backgroundColor = "green";
    p.style.color = "white";
    p.style.fontSize = "20px";
}

function alterarParagrafo3() {
    let p = document.getElementById("paragrafo3");
    p.style.backgroundColor = "purple";
    p.style.color = "white";
    p.style.fontSize = "20px";
    p.style.borderRadius = "10px";
}