import React from 'react'
import css from '../components-styles/createQus.module.css'
import {  useContext } from 'react'
import QuestionContext from '../context/questionDataContext'
import OptionsContext from '../context/optionsDataContext'

const CreateQus = () => {
  const {Question , functions } = useContext(QuestionContext)
  const {options , tools } = useContext(OptionsContext)
 
          return (<div >

            {Question.map((element , index )=>{
              return <div key={index} con ={index + 1} className={css.mainDiv} >
                  <div className={css.inputWrapper}>
                    <input 
                      className={css.input + " " + css.nm}
                      name='question'
                      placeholder="السؤال"
                      type="text" 
                      value={element.question} 
                      onChange={(e)=>{functions.changeQuestion(element.id , e.target.value)}}
                      >
                    </input>
                  </div>
                    <button className={css.btn + ' ' + css.q} onClick={()=>{functions.deleteQuestion(element.id , Question.length) ; tools.deleteOption(element.id , 'q')}} >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                {<div className={css.op}>{
                  options.map((op , i )=>{
                    if (op.questionId === element.id) {
                        return <div key={i} className={css.v} >
                          <input 
                          className={css.input + ' ' + css.ol}
                          name='question'
                          placeholder={i}
                          type="text" 
                          value={op.option} 
                          onChange={e=>{tools.changeOption(op.id , element.id,e.target.value)}}
                          >
                          </input>
                          
                          <button className={css.btn} onClick={()=>{tools.deleteOption(op.id , 'o')}} >
                          <i className="fa-regular fa-trash-can"></i>
                          </button>
                          
                          
                        </div>
                  }
                })
                
                }              
                
                
              </div>

            }
            <button className={css.btn} onClick={()=>{tools.addOption(element.id)}}>+</button>
            <label>k</label>
                <hr className={css.hr}></hr>
                <label>{element.id}</label>
            </div>
              
            })
            }
      
    </div>)
}

export default CreateQus;