function converter() {
    const temp = document.getElementById('temperatura').value;
    const tipo = document.getElementById('conversao').value;
    const resultado = document.getElementById('resultado');
    const icone = document.getElementById('icone');

    if (temp === '') {
        resultado.innerHTML = '⚠️ Por favor, insira um valor.';
        icone.innerHTML = '';
        return;
    }

    const valor = parseFloat(temp);

    if (isNaN(valor)) {
        resultado.innerHTML = '⚠️ Valor inválido. Digite um número.';
        icone.innerHTML = '';
        return;
    }

    let convertido;
    let unidade;

    if (tipo === 'CtoF') {
        convertido = (valor * 9/5) + 32;
        unidade = '°F';
    } else {
        convertido = (valor - 32) * 5/9;
        unidade = '°C';
    }

    resultado.innerHTML = `Resultado: <strong>${convertido.toFixed(2)} ${unidade}</strong>`;

    // Escolher ícone de clima com base na temperatura em Celsius
    let tempCelsius = tipo === 'CtoF' ? valor : convertido;

    if (tempCelsius < 18) {
        icone.innerHTML = '❄️'; // Frio
    } else if (tempCelsius >= 18 && tempCelsius <= 24) {
        icone.innerHTML = '⛅'; // Agradável/Nublado
    } else if (tempCelsius > 24 && tempCelsius < 30) {
        icone.innerHTML = '☀️'; // Sol/Calorzinho
    } else {
        icone.innerHTML = '🔥'; // Calor forte
    }
}
