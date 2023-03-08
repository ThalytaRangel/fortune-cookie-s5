//variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const openCookie = document.querySelector('#cookie')
const tryAgain = document.querySelector('#tryAgain')
let luckyMessage = screen2.querySelector('#lucky-text')

const arrayMessages = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão",
  "Comece onde você está.  Use o que você tem. Faça o que puder.",
  "Não coloque limites em seus sonhos. Coloque fé.",
  "Se você iluminar apenas as suas imperfeições, todas as suas qualidades ficarão na sombra.",
  "Que hoje você acredite na sua força, nos seus objetivos, na sua determinação, na sua coragem e em você!",
  "O projeto mais importante da sua vida é você!",
  "Você só vence amanhã se não desistir hoje.", 
  "Comece apenas acreditando que tudo dará certo.",
  "Quando for a hora certa, você vai entender porque demorou tanto.",
  " Sim, você consegue. Não deixe que os pensamentos negativos te digam o contrário.",
  "Nunca desista daquilo que te faz sorrir com sinceridade.",
  "Novo dia, nova semana. Nova meta, nova missão.",
  "Evolua tanto que os outros precisarão conhecer você de novo.",
  "Um caminho longo é feito de pequenos passos todos os dias.",
  "Apaixone-se pelo processo de se tornar a sua melhor versão.",
  "A tempestade não era o que eu queria, mas era o que eu precisava para florescer.",
  "A melhor época para plantar uma árvore era há 20 anos. O segundo melhor momento é agora.",
  "Se você está lendo isso, eu espero que você encontre a força que você precisa para superar o que está te causando tanto conflito interno.",
  "Uma passo a frente e você não estará mais no mesmo lugar."
]

//event

openCookie.addEventListener('click', handleClick)
tryAgain.addEventListener('click', handleTryAgainClick)

//functions

function handleClick() {
  toggleScreen()
  showMessages()
  
}

function handleTryAgainClick() {
  toggleScreen()
}
  

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function showMessages() {
  let randomMessage =  Math.round(Math.random() * 20)

  luckyMessage.innerText = arrayMessages[randomMessage]
}