import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
    
  } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import LogOut from './LogOut'
import Routered from './Routered'





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
            return   <Redirect to ="/" /> 
             
            
         }
        
        
         return(
             <div>
                <Redirect to ="/router" />
            
          
            </div>
         )

        

        
    }
}
