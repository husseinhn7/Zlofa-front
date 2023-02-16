import {Outlet} from 'react-router-dom'
import Login from '../pages/login'


const PrivetRoute = () =>{
    const auth = false
   return (
    auth ? <Outlet/> : <Login/>
   )
   
}


export default PrivetRoute;