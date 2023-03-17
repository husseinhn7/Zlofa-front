import './App.css';
import LoginPage          from './pages/loginPage'
import Home           from './pages/home';
import SignupPage from './pages/signupPage';
import PrivateRoute   from './utils/PrivateRoute'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Nav from './components/nav';
import Play from './components/play';
import { QuestionProvider } from './context/questionDataContext';
import { OptionsProvider } from './context/optionsDataContext';
import CreateExamPage from './pages/createExamPage';

function App() {
  return (
    <div className="App">
    <OptionsProvider>
      <QuestionProvider>

        <Router>        
          <Routes>
          <Route path = "/nav"  element={<Nav />  } />
          <Route path = "/s"  element={<SignupPage />  }  />
          <Route path = "/"  element={ <CreateExamPage /> }  />
          <Route path = "/home"  element={ <Home/> }  />
          </Routes>
        </Router>

      </QuestionProvider>
    </OptionsProvider>
    </div>
  );
}

export default App;
