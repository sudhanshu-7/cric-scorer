import React from "react"
import './styles.css'

const Toss = (props)=>{
    return (
        <div><button className="score-board team" name="a" onClick={props.handleToss}>{props.teamA}</button>
        <h3 className="score-board  ">SELECT BATTER</h3>
        <button className="score-board team" name="b" onClick={props.handleToss}>{props.teamB}</button></div>
    )
}
export default Toss