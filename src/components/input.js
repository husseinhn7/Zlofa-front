import React  from "react";
import css from "../components-styles/TextInput.module.css";


const TextInput = (prop) => {
    return (
        <div>
        
        <input 
        type        = 'text'
        placeholder = {prop.text} 
        className   = { prop.s + ' ' + css.input  } 
        onChange    = {(e) => prop.send( {[e.target.name]:e.target.value})}
        value       = {prop.value}
        name        = {prop.name}
        >
        </input>
        </div>

    )

}


export default TextInput ;