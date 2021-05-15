import React from "react"


const History = (props)=>{
    const teamA = props.data.team_A
    const teamB = props.data.team_B
    console.log(teamA);
    return (
        <div className="history">
            {teamA.name} VS {teamB.name}
            <br/>
            {teamA.score} {teamB.score} 
        </div>
    )
}

export default History