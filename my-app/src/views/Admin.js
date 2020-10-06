import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    
  } from "react-router-dom";
  import Header from '../Components/Header'
import NavigationMenu from '../Components/NavigationMenu'
import Dashboard from './Dashboard'
import Remote from './Remote'
import Conference from './Conference'
import Team from './Team'
import Task from './Task'
import Files from './Files'
import Subscription from './Subscription'
import LogOut from './LogOut'




export default class Admin extends Component {

    constructor(props){
        super()
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }

    render() {
        if(this.state.loggedIn === false){
            return <Redirect to="/" />
         }
        return (
            <div style={{position:'relative',  overflowX:'hidden', overflowY:'hidden'}}>
                <Router>
            
            <Header />
             <NavigationMenu  />
         
             <div style={{padding:"20px"}}>
                 <Switch>
              
                   <Route path="/dashboard">
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
                
                 </Switch>
             </div>
               
            </Router>
            <Link to="/logout">Logout</Link>
            </div>
        )
    }
}
