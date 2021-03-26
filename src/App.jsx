import { auth, signInWithGoogle, singInWithGithub } from '.';
import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Login from './components/login/login.jsx';
import Home from './components/home/home.jsx';
import Blank from './components/blank';

function App(props){

  return (
    <Router>
      <Switch>
        <Route path= '/login' exact>
          <Login 
            user= {props.user}
          />
        </Route> 
        <Route path= '/' exact>
          <Blank 
            user= {props.user}
          />
        </Route>
        <Route path= '/home' exact>
          <Home
            user ={props.user}
          />
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
