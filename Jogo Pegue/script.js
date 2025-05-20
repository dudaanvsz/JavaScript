const alvo = document.getElementById('alvo');
const campoJogo = document.getElementById('campo-jogo');
const pontuacaoEl = document.getElementById('pontuacao');
const botaoComecar = document.getElementById('comecar');
const seletorDificuldade = document.getElementById('dificuldade');
const tempoEl = document.getElementById('tempo');

const painelFim = document.getElementById('painel-fim');
const pontosFinais = document.getElementById('pontos-finais');
const botaoReiniciar = document.getElementById('reiniciar');

let pontuacao = 0;
let intervaloMovimento;
let tempoMovimento = 1000;
let tempoRestante = 10;
let intervaloTempo;

function escolherDificuldade(valor) {
  if (valor === 'facil') tempoMovimento = 1000;
  else if (valor === 'medio') tempoMovimento = 600;
  else if (valor === 'dificil') tempoMovimento = 300;
}

function moverAlvo() {
  const maxX = campoJogo.clientWidth - alvo.offsetWidth;
  const maxY = campoJogo.clientHeight - alvo.offsetHeight;

  const novoX = Math.floor(Math.random() * maxX);
  const novoY = Math.floor(Math.random() * maxY);

  alvo.style.left = `${novoX}px`;
  alvo.style.top = `${novoY}px`;
}

function iniciarCronometro() {
  tempoRestante = 10;
  tempoEl.textContent = tempoRestante;

  intervaloTempo = setInterval(() => {
    tempoRestante--;
    tempoEl.textContent = tempoRestante;

    if (tempoRestante <= 0) {
      finalizarJogo();
    }
  }, 1000);
}

function finalizarJogo() {
  clearInterval(intervaloMovimento);
  clearInterval(intervaloTempo);
  alvo.style.display = 'none';

  pontosFinais.textContent = pontuacao;

  campoJogo.classList.add('campo-desfocado');
  painelFim.classList.add('mostrar');
}

function iniciarJogo() {
  pontuacao = 0;
  pontuacaoEl.textContent = pontuacao;
  tempoRestante = 10;
  tempoEl.textContent = tempoRestante;

  painelFim.classList.remove('mostrar');
  campoJogo.classList.remove('campo-desfocado');
  alvo.style.display = 'block';

  escolherDificuldade(seletorDificuldade.value);

  clearInterval(intervaloMovimento);
  clearInterval(intervaloTempo);

  moverAlvo();
  intervaloMovimento = setInterval(moverAlvo, tempoMovimento);
  iniciarCronometro();
}

alvo.addEventListener('click', () => {
  pontuacao++;
  pontuacaoEl.textContent = pontuacao;
});

botaoComecar.addEventListener('click', iniciarJogo);
botaoReiniciar.addEventListener('click', iniciarJogo);
