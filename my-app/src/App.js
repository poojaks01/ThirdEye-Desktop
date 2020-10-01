import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Components/Header'
import NavigationMenu from './Components/NavigationMenu'
import Dashboard from './views/Dashboard'
import Remote from './views/Remote'
import Conference from './views/Conference'
import Team from './views/Team'
import Task from './views/Task'
import Files from './views/Files'
import LogOut from './views/logout'
import Subscription from './views/Subscription'


function App() {
  return (
    <div style={{position:'relative',  overflowX:'hidden', overflowY:'hidden'}}>
    
          
         <Router>
       
            <Header />
            <NavigationMenu  />
           
               <div style={{padding:"20px"}}>
                  <Switch>
                     <Route exact path="/">
                       <Dashboard />
                     </Route>
                     <Route path="/remote">
                       <Remote />
                     </Route>
                     <Route path="/conference">
                        <Conference />
                     </Route>
                     <Route path="/team">
                        <Team />
                     </Route>
                     <Route path="/task">
                        <Task />
                     </Route>
                     <Route path="/files">
                        <Files />
                     </Route>
                     <Route path="/subscription">
                        <Subscription />
                     </Route>
                     <Route path="/logout">
                        <LogOut />
                     </Route>


                     
                   </Switch>
               </div>

            
      

           
           
         </Router>


      
    </div>
  );
}

export default App;
