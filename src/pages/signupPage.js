import React , {useState} from "react";
import TextInput from "../components/input";
import css from "../pages-styles/login.module.css";
import Button from "../components/button";
import Login from '../api/login-api';
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import SignUp from '../api/signup-api'



const SignupPage =  () => {
    const test = useContext(AuthContext)
    
    const [data ,setdata] = useState({
            'name'     : null ,
            'age'      : null ,
            'username' : null ,
            'password' : null ,
            'gender'   : null ,
            'education': null ,
            'courses'  : null ,
            'courses_description' : null ,
            'level'    : null ,
            'intake'   : null ,
    })




    const submit = () => {
        SignUp(data)
       


    }
   
    return (
        <div className={css.all}>
            <div className={css.main}>

                <TextInput 
                text = "  الاسم  " 
                send ={d =>{setdata(data =>{ return { ...data , ...d } })}}
                name = "name"

                /> 

                <TextInput text = "البريد الالكتروني او رقم الهاتف "
                send ={d =>{setdata(data =>{ return { ...data , ...d } })}}
                name = "username"
                /> 

                <TextInput 
                text =  " كلمة المرور "     
                send ={d =>{setdata(data =>{ return { ...data , ...d } })}}
                name = "password"

                /> 

                <TextInput text = " السن"
                send ={d =>{setdata(data =>{ return { ...data , ...d } })}}
                name = "age"
                /> 

                <TextInput text = " النوع "
                send ={d =>{setdata(data =>{ return { ...data , ...d } })}}
                name = "gender"
                /> 

                
                <TextInput text = "التعليم "
                send ={d =>{setdata(data =>{ return { ...data , ...d } })}}
                name = "education"
                /> 

                 
                <TextInput text = "هل سجلت في اي دورات شرعيه من قبل "
                send ={d =>{setdata(data =>{ return { ...data , ...d } })}}
                name = "courses"
                /> 

                 
                <TextInput text = "اذكر تلك الدورات"
                send ={d =>{setdata(data =>{ return { ...data , ...d } })}}
                name = "courses_description"
                /> 

                 
                <TextInput text ="ألمستوي"
                send ={d =>{setdata(data =>{ return { ...data , ...d } })}}
                name = "level"
                /> 

                 
                <TextInput text = "الدفعة"
                send ={d =>{setdata(data =>{ return { ...data , ...d } })}}
                name = "intake"
                /> 





                <Button 
                text="انشاء الحساب" fun={submit} /> 

            </div>
        </div>
    )

}


export default SignupPage ;