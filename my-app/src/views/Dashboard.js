import React, { Component } from 'react'
import '../App.css'

import {Stocks} from './Stocks'

import {
     
     Redirect
     
   } from "react-router-dom";


export default class Dashboard extends Component {
    constructor(){
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
                                           <Stocks />
            
                                        </div>
                
                                    </div>
                  
                               
        )
    }
}
