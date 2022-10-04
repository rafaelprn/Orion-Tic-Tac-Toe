const cellElements = document.querySelectorAll(".cell");
const player1 = "X";
const player2 = "O";
//rounds: X = true / O = false
let checkRound = true;

//cada jogador tem um vetor com as posicoes preenchidas
//checo o vetor do player com o vetor winPositions para comparar os arrays
document.addEventListener("click", (event) => {
  if (event.target.matches(".cell")) { //se o jogador clicou no tabuleiro
    play(event.target.id); //chama a funcao play com o id da celula clicada
  }
});

function play(id) {
  const cell = document.getElementById(id); //pega o id do item clicado
  if(cell.textContent === ""){
    round = checkRound ? player1 : player2; //verifica qual player de acordo com o estado de checkRound
    cell.textContent = round; //preenche a celula com "X" ou "O"
    checkRound = !checkRound; //inverte o estado o checkRound pra passar o player
  }
}

function restart() {
  const table = document.getElementsByClassName("cell");
  for (let i = 0; i < table.length; i++) {
    table[i].textContent = ""; //limpa tudo
  }
  checkRound = true //reiniciar com o X
}

//posições vencedoras
const winPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [2, 5, 8],
  [1, 4, 7],
  [6, 7, 8],
];
