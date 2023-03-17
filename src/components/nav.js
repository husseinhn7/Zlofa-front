import React from 'react'
import css from '../components-styles/nav.module.css'
import Log from '../images/Zolfa-logo.png'
import LoginPage          from '../pages/loginPage'
import { useContext ,useRef } from 'react'
import ThemeContext from '../context/themeContext'
import Toggle from './toggle'
import { useState ,useEffect } from 'react'
import Img from '../images/dark-zolfa.png'
import Close from './close'
import SideBar from './sidebar'




const Nav = () => {
  const Theme = useContext(ThemeContext)
  const [log , setlog ] = useState(false)
  const [image , setimage ] = useState(Theme.lightTheme ? Log : Img )
  const Nav = useRef()

  useEffect(()=>{ 
    console.log('====================================');
    console.log(Theme.lightTheme);
    console.log(image);
    console.log('====================================');
    setimage( Theme.lightTheme ? Log : Img  
    )
    
  } , [Theme.lightTheme])
  const fun = () =>{
    Nav.current.style.width="0px"
  }
  return (
    <div className={css.nav}>
        <div className={css.logo}>

        <img className={css.img } src={Log} alt=''/>
          
        </div>
        <ul className={css.ul}>
          <li className={css.li}>
          1
          </li>
          <li className={css.li}>
           2 
          </li>
          <li className={css.li}>
            3
          </li>
        </ul>

        <div className={css.btns} >
          <button className={css.btn} onClick={() =>{setlog(true)} }>
          تسجيل الدخول
          </button>
          
        </div>
        <div className={log ? css.dis :css.hid} >
          <LoginPage end ={() =>{setlog(false)} }/>
          
        </div>
        <div className={css.navCon} ref={Nav}>
          <Close style={css.close} end = {fun}/>
          <SideBar />
          
        </div>
          <button className={css.side} onClick={()=>{Nav.current.style.width="270px"}}><i className="fa-solid fa-bars"></i></button>
        
      
    </div>
  )
}

export default Nav
