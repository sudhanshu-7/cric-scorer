import React, { useState } from "react"
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.css'
import CForm from "./CForm"
const Start = (props)=>{
    const [show ,setShow] = useState(false)
    const handleClick = ()=>{
        setShow(!show)
    }
    return (
        <div className ="Start">
            <button className="btn btn-lg btn-outline-dark" onClick = {handleClick}>Wanna Play ?</button>
            { show ? <CForm start={props.start} setStart={props.setStart} setDet={props.setDet}/>: null}
        </div>
    )
}

export default Start