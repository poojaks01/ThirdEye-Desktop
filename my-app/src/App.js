import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
} from "react-router-dom";
import './App.css';
import Login from './views/Login'
import Admin from './views/Admin'
import LogOut from './views/LogOut'


function App() {
  return (
    <div style={{position:'relative',  overflowX:'hidden', overflowY:'hidden'}}>
            <Router>  
              <Switch>
                     
                         <Route exact path="/">
                             <Login />
                         </Route>
                        
                         <Route path="/admin">
                             <Admin />
                         </Route>
                         <Route  path="/logout">
                          <LogOut />
                         </Route>
                        
                      
                </Switch>     
            </Router>

      
    </div>
  );
}

export default App;
