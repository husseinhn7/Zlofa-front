import React , {useState} from "react";
import TextInput from "../components/input";
import css from "../pages-styles/login.module.css";
import Button from "../components/button";

import { TestProvider } from "../context/testcontext";




const Login =  () => {
    
    const [data ,setdata] = useState({"username" : "" , "password" : ""})

    const v = () => {
        console.log(data);

    }
   
    return (
        <div className={css.all}>
        <TestProvider>
            <div className={css.main}>

                <TextInput 
                text = " اسم المستخدم " 
                send ={d =>{setdata(data =>{ return { ...data , ...d } })}}
                name = "username"

                /> 

                <TextInput text = " كلمة المرور"
                send ={d =>{setdata(data =>{ return { ...data , ...d } })}}
                name = "password"
                /> 

                <Button 
                text=" تسجيل الدخول" fun={v} /> 

            </div>
            </TestProvider>
        </div>
    )

}


export default Login ;