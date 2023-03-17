import React from 'react'
import css from "../components-styles/close.module.css"

const Close = (props) => {
  return (
    
    <button className={css.close + " " + props.style} onClick={props.end} > <i className="fa-solid fa-x"></i> </button>
  
  )
}

export default Close;
