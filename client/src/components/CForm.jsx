import React,{useState} from "react"
import "./styles.css"

const CForm = (props)=>{
    const [val , setVal] = useState({
        teamA:"",
        teamB:"",
        overs:""
    })
    const handleForm =  (event) =>{
        
        console.log(val);
        props.setStart(!props.start)
        props.setDet(val)
        event.preventDefault();
        
    }
    const handleChange = (e)=>{
        setVal(prev=>({
            
                ...prev,
                [e.target.name]: e.target.value

        }))
        
    }
    return (
        <form onSubmit={handleForm}>
            <h3 className="start">Team A</h3>
            <input type="text" value={val.teamA} onChange={handleChange} name="teamA" placeholder="EG:India" required/> <br/>
            <h3 className="start">Team B</h3><input value={val.teamB} onChange={handleChange} type="text" name="teamB" placeholder="EG:England" required/> <br/>
            <h3 className="start">Overs Per Side</h3><input value={val.overs} onChange={handleChange} type="text"  name="overs" placeholder="EG: 50" required/> <br/>
            <button className= "btn btn-dark" type="submit" >Start Match</button>
        </form>


    )
}

export default CForm