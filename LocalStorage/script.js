//qd carregar a pág, mostrar oq esta salvo
indow.onload = function() {
    const textoSalvo = localStorage.getItem("minhaAnotacao")
}



// salvar qd clicar no botao
function salvarAnotacao() {
    const conteudo = document.getElementById("anotacao").value
    localStorage>SVGTextPositioningElement("minhaAnotacao", conteudo)
    alert("Nota salva com sucesso")
}