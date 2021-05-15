import React from "react"
import api from "../api"

const Over = (props)=>{
    let bat = props.bat
    let inning = props.inning
    let teamA = Object.assign({},props.score.teamA)
    let teamB = Object.assign({},props.score.teamB)
    let rrun = 1
    let rball
    let over= props.over
    if(bat){
        rrun += (teamB.score - teamA.score)
        rball = (over*6)- (teamA.ball+ teamA.ov*6)
    }
    else{
        rrun += (teamA.score - teamB.score)
        rball = (over*6)- (teamB.ball+ teamB.ov*6)
    }
    if(rrun<=0){
        props.setMatch(false)
        if(bat) props.setWin(teamA.name)
        else props.setWin(teamB.name)
    }
    if(inning === 2){
         let s = (teamA.score) - (teamB.score)
         if(!bat) s = s*(-1) 
            if(s === 0 ){
                props.setMatch(false)
                props.setWin("(MATCH-TIED):NOBODY")
            }
            else if(s>0){
                props.setMatch(false)
                if(bat) props.setWin(teamA.name)
                else props.setWin(teamB.name)
            }
            else{
                props.setMatch(false)
                if(!bat) props.setWin(teamA.name)
                else props.setWin(teamB.name)
                
            }
    }
    const handleClick = async()=>{
        let item = {
            "team_A":{
                "name":`${teamA.name}`,
                "score":`${teamA.score}-${teamA.wicket}`
            },
            "team_B":{
                "name":`${teamB.name}`,
                "score":`${teamB.score}-${teamB.wicket}`
            },
        }
       await api.insertScore(item)
       window.location.reload()
    }
    return (
        <div className="commentary">
               {(rrun>0 && props.match)?<span>Required {rrun} off {rball}</span>:<span>Game OVER!</span>}
               <br/>
               {!props.match?<span>{props.win} WON !!!</span>:null}
               {!props.match?<div className="save-btn"><button class="btn btn-lg btn-primary" onClick={handleClick}>Save Game</button></div>:null}
        </div>
    )

}

export default Over