const cellElements = document.querySelectorAll(".cell");
const player1 = "X";
const player2 = "O";
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
  [6, 7, 8]
]
let winNum= winPositions.length

//cada jogador tem um vetor com as posicoes preenchidas
//checo o vetor do player com o vetor winPositions para comparar os arrays
document.addEventListener("click", (event) => {
  if (event.target.matches(".cell")) { //se o jogador clicou no tabuleiro
    play(event.target.id); //chama a funcao play com o id da celula clicada
  }
});

function play(id) {
  const cell = document.getElementById(id); //pega o id do item clicado
  if(cell.textContent === ""){ //so vai preencher a celula se ela estiver vazia
    round = checkRound ? player1 : player2; //verifica qual player de acordo com o estado de checkRound
    cell.textContent = round; //preenche a celula com "X" ou "O"
    if(checkRound){ //se for true, se for vez do X
      p1Positions.push(cell.id)
    }
    else{
      p2Positions.push(cell.id)
    }
    //console.log(`X array:${p1Positions} O array:${p2Positions}`)
    checkWinner(checkRound)
    checkRound = !checkRound; //inverte o estado o checkRound pra passar o player
  }
}
function checkWinner(checkRound){
  if(checkRound){//se foi turno do X
    for(let i = 0; i <= winNum; i++){
      let winner = p1Positions.includes(winPositions[i])
      if(winner){
        console.log('Voce venceu!')
        return
      }
    }
  }
  else{//se foi turno do O
    for(let i = 0; i <= winNum; i++){
      let winner = p2Positions.includes(winPositions[i])
      if(winner){
        console.log('Voce venceu!')
        return
      }
    }
  }
}

function restart() {
  const table = document.getElementsByClassName("cell");
  for (let i = 0; i < table.length; i++) {
    table[i].textContent = ""; //limpa tudo
  }
  checkRound = true //reiniciar com o X
}
