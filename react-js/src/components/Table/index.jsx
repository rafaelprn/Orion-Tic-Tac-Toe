import './style.css'
import { Cell } from '../Cell'
import { useState } from 'react'

export const Table = ({text}) => {
    const [whichPlayer, setwhichPlayer] = useState(true)
    const setRound = () => {
        setwhichPlayer(!whichPlayer) //muda o player
        console.log(whichPlayer)
    }
  return (
    <div className="container">
        <p>Tic Tac Toe</p>
        <div>
        <Cell setRound={setRound} whichPlayer={whichPlayer}></Cell>
        <Cell setRound={setRound} whichPlayer={whichPlayer}></Cell>
        <Cell setRound={setRound} whichPlayer={whichPlayer}></Cell>
        </div>
        <div>
        <Cell setRound={setRound} whichPlayer={whichPlayer}></Cell>
        <Cell setRound={setRound} whichPlayer={whichPlayer}></Cell>
        <Cell setRound={setRound} whichPlayer={whichPlayer}></Cell>
        </div>
        <div>
        <Cell setRound={setRound} whichPlayer={whichPlayer}></Cell>
        <Cell setRound={setRound} whichPlayer={whichPlayer}></Cell>
        <Cell setRound={setRound} whichPlayer={whichPlayer}></Cell>
        </div>
        <button id='btnR'>Restart</button>
    </div>
  )
}
