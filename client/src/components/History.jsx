import React from "react"
import './styles.css'

const History = (props)=>{
    const teamA = props.data.team_A
    const teamB = props.data.team_B
    console.log(teamA);
    return (
        <div className="history">
            {teamA.name} : {teamA.score}
            <br/>
            {teamB.name} : {teamB.score} 
        </div>
    )
}

export default History