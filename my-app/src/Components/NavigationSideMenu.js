import React from 'react'
import '../App.css'
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt} from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faUsersCog} from '@fortawesome/free-solid-svg-icons'
import { faTasks} from '@fortawesome/free-solid-svg-icons'
import { faFileAlt} from '@fortawesome/free-solid-svg-icons'
import { faSubscript} from '@fortawesome/free-solid-svg-icons'
import { faBell} from '@fortawesome/free-solid-svg-icons'

function NavigationSideMenu(props){
    return(
            <div className='mainSidediv' >
                   <div  className="logout"  >
                        <ul id="Logout">
                          <li style={{listStyle:"none" } }>
                          <NavLink to="/logout" id="li" activeClassName="active" 
                               onClick={props.closeMenu}
                              >  
                                 <FontAwesomeIcon className="icon"
                                      icon={faBell}
                                     />&nbsp;
                                      
                                   Log Out
                          </NavLink>
                          </li>
                        </ul>
                    </div>

                       
                       <div className="dashboard" >
                            <ul id="Dashboard_ul">
                              <li style={{listStyle:"none" } }>
                                    <NavLink to="/router" className="li"  exact activeClassName="active"
                                           onClick={props.closeMenu}
                                    >
                                        <FontAwesomeIcon className="icon"
                                            icon={faTachometerAlt}
                                           />&nbsp;
                                      
                                       DASHBOARD
                                     </NavLink>
                                </li>
                           </ul>
                       </div>
                       <ul className="menu" >
                           <li id="remote" >
                             <NavLink to="/remote"  className="li" activeClassName="active" 
                               onClick={props.closeMenu}
                                    >
                                 <FontAwesomeIcon className="icon"
                                            icon={faVideo}
                                           />&nbsp;
                                      REMOTE ASSISTANCE
                             </NavLink>
                           </li>

                          <li id="conference" >
                             <NavLink to="/conference" className="li" activeClassName="active" 
                               onClick={props.closeMenu}
                                  >
                                 <FontAwesomeIcon className="icon"
                                            icon={faPhoneAlt}
                                           />  &nbsp;
                                   CONFERENCE
                             </NavLink>
                          </li>
                          <li id="team" style={{ listStyle:"none"}}>
                             <NavLink to="/team" className="li" activeClassName="active" 
                               onClick={props.closeMenu}
                                 >
                                  <FontAwesomeIcon className="icon"
                                            icon={faUsersCog}
                                           />&nbsp;
                                    TEAM
                             </NavLink>
                          </li>
                          <li id="task"  style={{ listStyle:"none"}}>
                             <NavLink to="/task" className="li" activeClassName="active" style={{color:"white", fontWeight:"500",position:'relative', left:"-40px", fontSize:"15px", padding:"10px" , display:"block", textDecoration:'none',  paddingBottom:'20px'}}
                               onClick={props.closeMenu}
                                   >
                                        <FontAwesomeIcon className="icon"
                                            icon={faTasks}
                                           />&nbsp;
                                TASK
                             </NavLink>
                          </li>


                          <li id="files" style={{ listStyle:"none"}}>
                             <NavLink to="/files" className="li" activeClassName="active"
                               onClick={props.closeMenu}
                                >
                                     <FontAwesomeIcon className="icon"
                                            icon={faFileAlt}
                                           />&nbsp;
                                 FILES
                             </NavLink>
                          </li>

                          <li  id="subscription" >
                             <NavLink to="/subscription" className="li" activeClassName="active" 
                               onClick={props.closeMenu}
                                   >
                                     <FontAwesomeIcon className="icon"
                                            icon={faSubscript}
                                           />&nbsp;
                                           SUBSCRIPTION
                             </NavLink>
                          </li>



                        </ul> 



                       
            </div>
    )
}
export default NavigationSideMenu