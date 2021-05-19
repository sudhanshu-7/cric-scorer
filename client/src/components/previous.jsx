import React, { useState } from "react"
import History from "./History.jsx"
import api from "../api"
import "./styles.css"
const Previous = ()=>{
    const [show,setShow]  = useState(false)
    const [matches,setMatch] = useState([])
const handleClick = async ()=>{
    if(show){
        setShow(false);
        return;
    }
    await api.getAll().then(m=>{
        setMatch(m.data.data)
        console.log(matches);
        if(matches.length) setShow(true)
    }).catch(
        console.log("Cannot Fetch Matches")
    )
}
return (
    <div className="matches">
        <div onClick={handleClick} className="matches-prev">Previous Results {!show?`...`:null}</div>
        {show?matches.map(match =>{
            return <History data= {match}/>
        }):null}
    </div>
)

}

export default Previous