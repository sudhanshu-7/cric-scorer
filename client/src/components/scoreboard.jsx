import React, { useState } from "react"
import Counter from "./counter"
import Over from "./Over"
import './styles.css'
import Toss from "./toss"
const ScoreBoard = (props)=>{
    const [toss,setToss] = useState(true)
    const [bat, setBat] = useState(true)
    const [inning,setInning] = useState(0)
    const [match,setMatch] = useState(true)
    const [win,setWin]= useState("")
    const [score,setScore] = useState({
        teamA:{
            name:props.teamA,
            score:0,
            wicket:0,
            ov:0,
            ball:0
        },
        teamB:{
            name:props.teamB,
            score:0,
            wicket:0,
            ov:0,
            ball:0
        }
    })
    const handleToss = (e)=> {
        setToss(!toss)
        if(e.target.name === "b") setBat(false)
    }
    const updateScore = (event)=>{
        if(match){let clone = Object.assign({},score)
        if(bat){
            if(event.target.value === "-1"){
                clone.teamA.wicket++
                clone.teamA.ball++;
                if(clone.teamA.ball === 6){
                    clone.teamA.ball = 0
                    clone.teamA.ov ++
                }
                if(clone.teamA.ov === parseInt(props.overs)) {
                    setInning(inning+1);
                    setBat(!bat)
                }
                if(clone.teamA.wicket === 10){
                    setInning(inning+1)
                    setBat(!bat)
                }
            }
            else{
            clone.teamA.score += parseInt(event.target.value)
            clone.teamA.ball++;
            if(clone.teamA.ball === 6){
                clone.teamA.ball = 0
                clone.teamA.ov ++
            }
            if(clone.teamA.ov === parseInt(props.overs)) {
                setInning(inning+1);
                setBat(!bat)
            }
        }
        }
        else{
            
            if(event.target.value === "-1"){
                    clone.teamB.wicket ++
                    clone.teamB.ball++
                    if(clone.teamB.ball === 6){
                        clone.teamB.ball = 0
                        clone.teamB.ov ++
                    }
                    if(clone.teamB.ov === parseInt(props.overs)) {
                        setInning(inning+1);
                        setBat(!bat)
                    }
                    if(clone.teamB.wicket === 10){
                        setInning(inning+1)
                        setBat(!bat)
                    }
                }
            
            else{
                clone.teamB.score += parseInt(event.target.value)
                clone.teamB.ball++;
                if(clone.teamB.ball === 6){
                clone.teamB.ball = 0
                clone.teamB.ov ++
                }
                if(clone.teamB.ov === parseInt(props.overs)) {
                setInning(inning+1);
                setBat(!bat)
            }
        }
            
        }
        setScore(clone)}
    }

    return (
        <div className="scorer"> 
        {toss?<Toss teamA={props.teamA} teamB={props.teamB} handleToss ={handleToss} toss={toss} />:<Counter score={score} inning={inning} bat={bat}/>}
        {inning >0 ?<Over inning ={inning} score={score} bat={bat} over={props.overs} win={win} setWin={setWin} match={match} setMatch={setMatch}/>:null}
        <div className="keypad ">
            <button className="controls" onClick={updateScore} value="0">0</button>
            <button className="controls" onClick={updateScore} value="1">1</button>
            <button className="controls" onClick={updateScore} value="2">2</button>
            <button className="controls" onClick={updateScore} value="3">3</button>
            <button className="controls" onClick={updateScore} value="4">4</button>
            <button className="controls" onClick={updateScore} value="5">5</button>
            <button className="controls" onClick={updateScore} value="6">6</button>
            <br/>
            <br/>
            <button className="controls" onClick={updateScore} value="-1">W</button>
        </div>
        </div>
    )

}

export default ScoreBoard