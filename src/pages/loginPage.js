import React , {useState} from "react";
import TextInput from "../components/input";
import css from "../pages-styles/login.module.css";
import Button from "../components/button";
import Login from '../api/login-api';
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import Nav from "../components/nav";
import Close from "../components/close";
import im from '../images/light-zolfa.png'



const LoginPage =  (props) => {
    const test = useContext(AuthContext)
    
    const [data ,setdata] = useState({"username" : "" , "password" : ""})




    const submit = () => {
        // Login(data)
        var b = localStorage.getItem("token")
        test.setUser({User: JSON.parse(b) })
        console.log('====================================');
        console.log(data);
        console.log('====================================');


    }
   
    return (
        <div className={css.all}>
            <div className={css.main}>
            <Close end = {props.end}/>
          
            <img className={css.img} src={im} alt="" />

                <TextInput 
                text = " اسم المستخدم " 
                send ={d =>{setdata(data =>{ return { ...data , ...d } })}}
                name = "username"

                /> 

                <TextInput text = " كلمة المرور"
                send ={d =>{setdata(data =>{ return { ...data , ...d } })}}
                name = "password"
                
                /> 

                <a className={css.a} href="/">هل نسيت كلمة المرور؟</a>
                <Button 
                text=" تسجيل الدخول" fun={submit} /> 
                <Button 
                text="انشاء حساب جديد" 
                fun={submit} 
                s = {css.btn2}

                /> 

            </div>
        </div>
    )

}


export default LoginPage ;