import React, { useRef } from 'react'
import css from '../components-styles/sideElement.module.css'
import { Link } from 'react-router-dom'
import SubElement from './subElement'
import { useState  } from 'react'

const SideElement = (props) => {
  const [list , setList] = useState(false)
  const hide = useRef('')

  const handle = ( ) =>{
    
    if ( !list ){
      hide.current.style.height= `${props.arr.length*40}px`
      setList(true)
    }
    else {
      hide.current.style.height= "0px"
      setList(false)

    }
  }

  return (
    <div className={css.box}>
        <label className={css.li} onClick={handle}>{props.text}</label>
        <div className={css.list} ref = {hide }>
       { props.arr.map((n  ) =>{return <SubElement title={n.text}/>})}
        </div>

    </div>
  )
}

export default SideElement
 