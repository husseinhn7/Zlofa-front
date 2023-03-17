import api from "./base";

const Login = (data) => {
    let Token = null
    api.post('http://127.0.0.1:8000/api/token/' , data)
    .then(res=>{
        if ( res.status === 200 ) {
            
            localStorage.setItem("token" , JSON.stringify(res.data))
        }
        
    })
    return Token
}





export default Login ; 