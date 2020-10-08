import  React, { Component } from 'react'
import Navigation from '../Components/Navigation'
import {Link, Redirect} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import '../views/Admin'



export default class Header extends Component {
   

    render() {
       
        return (
            <header className="wrapper">
               <span id="hadder_thirdeye">
               
               ThirdEye
                      
                  </span>
        
              
                 <div className="side-bar" >
                        <Link to="/logout" className="li">  
                            <FontAwesomeIcon id="faIcon"
                               icon={faBell}
                            />&nbsp;
                                          
                            Log Out
                        </Link>
        </div>
            
               
                    <Navigation />
            </header>
          
        
        )
    }
}
