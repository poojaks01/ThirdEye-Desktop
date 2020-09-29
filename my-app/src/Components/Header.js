import React from 'react'
import Navigation from '../Components/Navigation'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/free-solid-svg-icons'

//import Navigation from './Navigation'
function Header(){
    return (
        <header className="app-header">
           <span className="head">
           
                ThirdEye
                       
           </span>
           <div className="side-bar">
                <Link to="/logout" className="li" style={{color:"blue", fontWeight:"500", textDecoration:'none', marginRight:'10px'}}>  
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
export default Header