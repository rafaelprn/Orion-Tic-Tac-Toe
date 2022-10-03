import { useState } from "react"

export const Cell = ({whichPlayer, setRound}) => {
    const [marked, setMarked] = useState('')
    const changeMark = () => {
        setMarked(whichPlayer ? "X" : "O") //X true - O false
        setRound()
    }
    return (
        <button onClick={changeMark} disabled={marked.length > 0}>
            {marked}
        </button>
    )
}
