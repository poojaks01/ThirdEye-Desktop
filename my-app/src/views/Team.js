import React, { Component } from 'react'
import '../App.css'
import { Redirect } from 'react-router-dom'


export default class Team extends Component {
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
        return (
            <div className="container">
           
                <div className="subpages">
                   <h1 className="h1">this is Team page</h1>
                </div>
            </div>
        )
    }
}
