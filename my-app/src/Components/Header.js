import  React, { Component } from 'react'
import Navigation from '../Components/Navigation'
import {Link, Redirect} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/free-solid-svg-icons'
import '../App'



export default class Header extends Component {

    render() {
      
       
        return (
            <header className="wrapper">
               <span style={{position:'absolute', left:'0', fontSize:'4vw'}} className="head">
               
               ThirdEye
                      
          </span>
        
              
                    <div className="side-bar" >
                        <Link to="/logout"  className="li" style={{color:"blue", fontWeight:"500", textDecoration:'none', marginRight:'50px'}}>  
                            <FontAwesomeIcon style={{fontSize:'20px'}}
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
