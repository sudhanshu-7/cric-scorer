import React from "react"


const Counter = (props) =>{
    let teamA = props.score.teamA
    let teamB = props.score.teamB
    return (
        <div >
            <div className="score-board team">
                <p>{teamA.name}{props.bat?"*":""}</p>
                {(props.inning === 0 && !props.bat)?<h3>Yet To Bat</h3>:<h3>{teamA.score}/{teamA.wicket} ({teamA.ov}.{teamA.ball})</h3> }

            </div>
            <div className="score-board"><h3 className="versus">VERSUS</h3></div>
            <div className="score-board team">
                <p>{teamB.name}{!props.bat?"*":""}</p>
                {(props.inning === 0 && props.bat)?<h3>Yet To Bat</h3>:<h3>{teamB.score}/{teamB.wicket} ({teamB.ov}.{teamB.ball})</h3>}
               
            </div>
        </div>
    )

}

export default Counter