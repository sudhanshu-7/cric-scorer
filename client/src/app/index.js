import React, { useState } from "react"
import {Navbar, Start } from "../components"
import Previous from "../components/previous";
import ScoreBoard from "../components/scoreboard";
import "./styles.css"
function App() {
 
  const[start , setStart] = useState(false)
  const[det, setDet] = useState({
    teamA:"me",
    teamB:"snif",
    overs:"2"
  })
  const refreshPage = ()=>{
    window.location.reload();
  }
  return (
    <div>
      
    <Navbar />

    {start?<ScoreBoard teamA = {det.teamA} teamB ={det.teamB} overs={det.overs}/>:<Start start={start} setStart={setStart} setDet={setDet}/>} 
    {start?<div className="refresh" onClick={refreshPage}>&#10007;</div>:null}
    <Previous />
    </div>
  );
}

export default App;
