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

function NavigationMenu(props){
    return(
            <div className='maindiv'>

                       <div className="subdiv" style= {{fontSize:"36px", backgroundColor:"white", marginRight:'50px', marginTop:"-38px", marginLeft:'1px', marginRight:"3px"}} >
                            <ul>
                              <li style={{listStyle:"none"}} >ThirdEye</li>
                           </ul>
                       </div>
                      <div className="navbar">
                      <div style={{ fontSize:"15px", marginTop:'80px', marginBottom:'-10px', marginLeft:'10px', marginRight:'50px', borderRadius:'50px'}}>
                          <ul  style={{marginLeft:'20px', marginRight:'-20px'}}>
                              <li style={{listStyle:"none" } }>
                                    <NavLink to="/" className="li" exact activeClassName="active" style={{color:"white", fontWeight:"500",position:'relative', left:"-40px", fontSize:"15px", padding:"15px" , display:"block", textDecoration:'none',  paddingBottom:'20px'}}
                                            onClick={props.closeMenu}
                                    >
                                        <FontAwesomeIcon style={{fontSize:'20px'}}
                                            icon={faTachometerAlt}
                                           />&nbsp;
                                      
                                       DASHBOARD
                                     </NavLink>
                                </li>
                              </ul>
                           
                       </div>

                       
                     
                       <ul className="menu"  style={{marginLeft:'30px', marginTop:'20px'}}>

            
                           <li style={{ listStyle:"none"}}>
                             <NavLink to="/remote" className="li" activeClassName="active" style={{color:"white", fontWeight:"500",position:'relative', left:"-40px", fontSize:"14px", padding:"10px" , display:"block", textDecoration:'none', paddingBottom:'20px',paddingLeft:'15px', paddingRight:'12px', marginTop:"-10px"}}
                               onClick={props.closeMenu}
                                    >
                                 <FontAwesomeIcon style={{fontSize:'20px'}}
                                            icon={faVideo}
                                           />&nbsp;
                                      REMOTE ASSISTANCE
                             </NavLink>
                           </li>

                          <li  style={{ listStyle:"none"}}>
                             <NavLink to="/conference" className="li" activeClassName="active" style={{color:"white", fontWeight:"500",position:'relative', left:"-40px", fontSize:"15px" , display:"block", textDecoration:'none', paddingBottom:'18px', paddingLeft:'15px', marginRight:'25px', paddingTop:'13px'}}
                               onClick={props.closeMenu}
                                  >
                                 <FontAwesomeIcon style={{fontSize:'20px'}}
                                            icon={faPhoneAlt}
                                           />  &nbsp;
                                   CONFERENCE
                             </NavLink>
                          </li>
                          <li style={{ listStyle:"none"}}>
                             <NavLink to="/team" className="li" activeClassName="active" style={{color:"white", fontWeight:"500",position:'relative', left:"-40px", fontSize:"15px" , display:"block", textDecoration:'none',  paddingBottom:'20px', paddingLeft:'15px', marginRight:'70px', paddingTop:'15px'}}
                               onClick={props.closeMenu}
                                 >
                                  <FontAwesomeIcon style={{fontSize:'20px'}}
                                            icon={faUsersCog}
                                           />&nbsp;
                                    TEAM
                             </NavLink>
                          </li>
                          <li  style={{ listStyle:"none"}}>
                             <NavLink to="/task" className="li" activeClassName="active" style={{color:"white", fontWeight:"500",position:'relative', left:"-40px", fontSize:"15px" , display:"block", textDecoration:'none', paddingBottom:'20px', paddingLeft:'15px', marginRight:'80px', paddingTop:'15px'}}
                               onClick={props.closeMenu}
                                   >
                                        <FontAwesomeIcon style={{fontSize:'20px'}}
                                            icon={faTasks}
                                           />&nbsp;
                                TASK
                             </NavLink>
                          </li>


                          <li style={{ listStyle:"none"}}>
                             <NavLink to="/files" className="li"  activeClassName="active" style={{color:"white", fontWeight:"500",position:'relative', left:"-40px", fontSize:"15px", display:"block", textDecoration:'none',  paddingBottom:'20px',  paddingLeft:'15px', marginRight:'90px', paddingTop:'15px'}}
                               onClick={props.closeMenu}
                                >
                                     <FontAwesomeIcon style={{fontSize:'20px'}}
                                            icon={faFileAlt}
                                           />&nbsp;
                                 FILES
                             </NavLink>
                          </li>

                          <li style={{ listStyle:"none"}}>
                             <NavLink to="/subscription" className="li" activeClassName="active" style={{color:"white", fontWeight:"500",position:'relative', left:"-40px", fontSize:"15px" , display:"block", textDecoration:'none',  paddingBottom:'15px', paddingLeft:'15px', marginRight:'25px', paddingTop:'10px'}}
                               onClick={props.closeMenu}
                                   >
                                     <FontAwesomeIcon style={{fontSize:'20px'}}
                                            icon={faSubscript}
                                           />&nbsp;
                                           SUBSCRIPTION
                             </NavLink>
                          </li>



                        </ul> 
                       


                      </div>

                       
            </div>
    )
}
export default NavigationMenu