import React from 'react'
import CreateQus from '../components/createQus'
import { useState , useContext } from 'react'
import QuestionContext from '../context/questionDataContext'

const CreateExamPage = () => {
    const [apiData , setApiData] = useState([{question : '' , mark : '' , }])
    const [question  , setQuestion] = useState([{question : '' , mark : '' , id :1}])
    const {Question , functions } = useContext(QuestionContext)


  


  return ( <div>

    <CreateQus/>
    
    <button onClick={()=>{functions.addQuestion()}}>  add</button>
    
    </div>
  )
}

export default CreateExamPage
