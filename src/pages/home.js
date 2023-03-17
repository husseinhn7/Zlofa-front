import React from 'react'
import { useState , useContext } from 'react'
import Nav from '../components/nav'
import SideElement from '../components/sideElement'
import SideBar from '../components/sidebar'
import CreateQus from '../components/createQus'
import CreateOp from '../components/createOp'
import QuestionInput from '../components/play'
import QuestionContext from '../context/questionDataContext'

const Home = () => {
  // const [Question , functions ] = useContext(QuestionContext)


  return (
    <div>

     

      <button onClick={()=>{console.log('Question')}}>print</button>
            
    </div>
  )
}

export default Home
