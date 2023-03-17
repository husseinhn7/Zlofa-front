import React from 'react'
import css from '../components-styles/toggle.module.css'
import { useState } from 'react'
import { useContext } from 'react'
import { ThemeProvider } from '../context/themeContext'
import ThemeContext from '../context/themeContext'

const Toggle = () => {
    // const lightTheme = useState()
    const Theme = useContext(ThemeContext)

    const change = (e)=>{
        console.log(Theme.lightTheme)
        Theme.setTheme({lightTheme : e.target.checked})
        console.log(Theme)

    }
  return (
    <div className={css.con} >

        <input className={css.input} type="checkbox" name="che" id="che" onChange={change} />
        <label htmlFor="che" className={css.b}></label>
        <i className="fa-regular fa-sun"></i>
        <i className="fa-solid fa-moon"></i>
       
    </div>
  )
}

export default Toggle
