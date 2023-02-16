import React , {useContext} from "react";
import css from "../components-styles/TextInpt.module.css";
import TestContext from "../context/testcontext";


const TextInput = (prop) => {
    let {test} = useContext(TestContext)
    return (
        <div>
        <h1>{test}</h1>
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