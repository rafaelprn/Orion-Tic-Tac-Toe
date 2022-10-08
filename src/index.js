const cellElements = document.getElementsByClassName("cell");
const player1 = "X";
const player2 = "O";
let text = document.getElementsByClassName("game-status");
//rounds: X = true / O = false
let checkRound = true;
let p1Positions = []; //array de posicoes do X
let p2Positions = []; //array de posicoes do O
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

document.addEventListener("click", (event) => {
  if (event.target.matches(".cell")) { //se o jogador clicou no tabuleiro
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
      p1Positions.push(parseInt(cell.id)); //coloca a posicao clicada no vetor
    } else { //se for a vez do O
      p2Positions.push(parseInt(cell.id)); 
    }
    isWinner(); //verifica se na ultima jogada houve algum vencedor

    const isDraw = checkDraw(); //verifica se houve algum empate
    if(isDraw){ //se empatou
      text[0].textContent = "Deu Velha!"
      lockGrid(); //fim do jogo
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
  if (winner && checkRound) {  //se alguem venceu e o X que jogou por ultimo
    text[0].textContent = "X venceu!";
    lockGrid();
  } else if (winner && !checkRound) { //se alguem venceu e o O que jogou por ultimo
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
  return [...cellElements].every((cell) => { //todos as celulas
    return cell.classList.contains("X") || cell.classList.contains("O") //se em todas as celulas tem ou X ou O marcados
  })
}

function restart() { //botao restart
  const table = document.getElementsByClassName("cell");
  for (let i = 0; i < table.length; i++) {
    table[i].textContent = ""; //limpa tudo
    table[i].classList.remove("X");
    table[i].classList.remove("O");
  }
  checkRound = true; //reiniciar com o X como player 1
  text[0].textContent = "Vez de: X";
  unlockgrid();
}
