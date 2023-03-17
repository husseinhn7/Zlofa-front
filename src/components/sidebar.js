import React from 'react'
import css from '../components-styles/sidebar.module.css'
import SideElement from './sideElement'
import { useState , useEffect , useRef } from 'react'

const SideBar = () => {
 
  const ele = useRef()
  
  return (
    

// "onClick={(old)=>{setSide(old? false : true)}}"
     


      <aside className={css.v} >
     
        


        <SideElement text="link 1"  arr={[{text:1} , {text:2}]} />
        <SideElement text="link 2"  arr={[{text:1} , {text:2}]}/>
        <SideElement text="link 3"  arr={[{text:1} , {text:2}]} />
        <SideElement text="link 1"  arr={[{text:1} , {text:2}]} />
        <SideElement text="link 1"  arr={[{text:1} ]} />


      </aside>

    
  )
}

export default SideBar
