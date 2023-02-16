import React from "react";
import css from "../components-styles/button.module.css"

const Button = (props) =>{
    return (
        <button className={css.btn} onClick={props.fun}>{props.text}</button>
    )
}



export default Button ;