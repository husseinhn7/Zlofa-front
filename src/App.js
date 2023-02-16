import './App.css';
import Login from './pages/login'
import Home from './pages/home';
import PrivateRoute from './utils/PrivateRoute'
import { useContext } from 'react';
import {BrowserRouter as Router , Routes , Route , Link , Navigate} from 'react-router-dom'
import  { AuthProvider } from './context/AuthContext';
import AuthContext from './context/AuthContext'


function App() {
  let {name} = useContext(AuthContext)
  return (
    <div className="App">
    
      <Router>
      
        <p>{name}</p>
        <p>{"{name}"}</p>
        <Link to = "/" >to main</Link>
        <Routes>

         <Route path = "/"  element={ <Login /> }  />
         <Route element={<PrivateRoute/>}>
         <Route path = "/home"  element={ <Home/> }  />
         </Route>
         
        

        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
