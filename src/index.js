const cellElements = document.getElementsByClassName("cell");
const player1 = "X";
const player2 = "O";
let text = document.getElementsByClassName("game-status");
//rounds: X = true / O = false
let checkRound = true;
let p1Positions = [];
let p2Positions = [];
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

//cada jogador tem um vetor com as posicoes preenchidas
//checo o vetor do player com o vetor winPositions para comparar os arrays
document.addEventListener("click", (event) => {
  if (event.target.matches(".cell")) {
    //se o jogador clicou no tabuleiro
    play(event.target.id); //chama a funcao play com o id da celula clicada
  }
}); 

function play(id) {
  const cell = document.getElementById(id); //pega o id do item clicado
  if (cell.textContent === "") {
    //so vai preencher a celula se ela estiver vazia
    round = checkRound ? player1 : player2; //verifica qual player de acordo com o estado de checkRound
    cell.textContent = round; //preenche a celula com "X" ou "O"
    cell.classList.add(round);
    if (!checkRound) {
      text[0].textContent = "Vez de: X";
    }
    if (checkRound) {
      text[0].textContent = "Vez de: O";
    }
    if (checkRound) {
      //se for true, se for vez do X
      p1Positions.push(parseInt(cell.id));
    } else {
      p2Positions.push(parseInt(cell.id));
    }
    isWinner();

    const isDraw = checkDraw();
    if(isDraw){
      text[0].textContent = "Deu Velha!"
      lockGrid();
    }
    checkRound = !checkRound; //inverte o estado o checkRound pra passar o player
  }
}

function isWinner() { //verifica o vencedor
  const winner = winPositions.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(checkRound ? "X" : "O");
    });
  });
  if (winner && checkRound) {
    text[0].textContent = "X venceu!";
    lockGrid();
  } else if (winner && !checkRound) {
    lockGrid();
    text[0].textContent = "O venceu!";
  }
  return winner;
}

function lockGrid() {
  document.getElementById("table").style.pointerEvents = "none";
}

function unlockgrid() {
  document.getElementById("table").style.pointerEvents = "auto";
}

const checkDraw = () => {
  return [...cellElements].every((cell) => {
    return cell.classList.contains("X") || cell.classList.contains("O")
  })
}

function restart() {
  const table = document.getElementsByClassName("cell");
  for (let i = 0; i < table.length; i++) {
    table[i].textContent = ""; //limpa tudo
    table[i].classList.remove("X");
    table[i].classList.remove("O");
  }
  checkRound = true; //reiniciar com o X
  text[0].textContent = "Vez de: X";
  unlockgrid();
}
