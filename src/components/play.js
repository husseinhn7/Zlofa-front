import { useState } from "react"
import React  from 'react'

const QuestionInput = (props) => {
    const [data , setData] = useState([{question : props.question , option : ''}])
    const send = ()=>{
        const diff = {question :props.question , options : data}
        props.myfun(diff)
    }
    
  const add  =( )=>{
    setData(prev=>{
      return [
        ...prev , 
        {question : props.question , option : ''}
      ]
    })
  }

  const remove = (index)=>{
    const list = [...data]
    list.splice(index,1)
    setData(list)
  }

  const change = (e ,index ) =>{
    const {name ,value } = e.target
    const list = [...data]
    list[index][name]=value
    setData(list)
    console.log(list)
    send()
    

  }
    
  return (
    <div>

        {
            data.map((element , index )=>{
                return <div key ={index} >
                    <input 
                    type='text'
                    name='option'
                    placeholder="السؤال"
                    value={element.option} 
                    onChange={e=>{change(e,index)}}
                    
                    >
                    
                    
                    </input>

                    <button 
                  onClick={() =>remove(  index)} >
                    <i className="fa-regular fa-trash-can"></i>
                  </button>

                  

                
                
                </div>
            })
        }
        <button key="km" onClick={(e) =>{console.log(data)}} >print </button>
        <button key="k" onClick={(e) =>{add ()}} >+</button>

        

      
    </div>
  )
}

export default QuestionInput
