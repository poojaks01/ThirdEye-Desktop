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
import Routered from './views/Routered'
import Dashboard from './views/Dashboard'
import Remote from './views/Remote'
import Conference from './views/Conference'
import Team from './views/Team'
import Task from './views/Task'
import Files from './views/Files'
import Subscription from './views/Subscription'
import Header from './Components/Header'
import NavigationMenu from './Components/NavigationMenu'


function App() {
  return (
    <div style={{position:'relative',  overflowX:'hidden', overflowY:'hidden'}}>
      <div>
     
            <Router>  
              <Switch>
                     
                         <Route exact path="/">
                             <Login />
                         </Route>
                        
                         <Route path="/admin">
                             <Admin />
                         </Route>
                        
                         <Route  path="/router">
                          <Routered />
                         </Route>
                         <Route path="/logout">
                          <LogOut />
                         </Route>
           
                        <Route exact path="/router">
                          <Dashboard />
                          </Route>
                          <Route exact path="/remote">
                           <Remote />
                           </Route>
                           <Route exact path="/conference">
                            <Conference />
                            </Route>
                             <Route exact path="/team">
                             <Team />
                              </Route>
                             <Route exact path="/task">
                             <Task />
                              </Route>
                              <Route exact path="/files">
                               <Files />
                               </Route>
                                <Route exact path="/subscription">
                                 <Subscription />
  </Route>
            
                        

                        
                      
                </Switch>     
            </Router>
      </div>
      
    </div>
  );
}

export default App;
