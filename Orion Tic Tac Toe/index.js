const cellElements = document.querySelectorAll("[data-cell]")

//cada jogador tem um vetor com as posicoes preenchidas
//checo o vetor do player com o vetor winPositions para comparar os arrays

//posições vencedoras 
let winPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
    [6, 7, 8]
]