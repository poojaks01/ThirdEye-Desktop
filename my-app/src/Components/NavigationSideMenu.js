import React from 'react'
import '../App.css'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt} from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faUsersCog} from '@fortawesome/free-solid-svg-icons'
import { faTasks} from '@fortawesome/free-solid-svg-icons'
import { faFileAlt} from '@fortawesome/free-solid-svg-icons'
import { faSubscript} from '@fortawesome/free-solid-svg-icons'

function NavigationSideMenu(props){
    return(
            <div className='mainSidediv' style={{marginTop:'80px'}}>

                       <div className="SideSubdiv" >
                            <ul >
                              <li className="thirdeyeli" style={{listStyle:"none", position:'fixed', top:'71px', right:'0', backgroundColor:'white', paddingBottom:'10px',paddingLeft:'190px', paddingRight:'89px',paddingTop:'5px', marginBottom:'50px', marginTop:'25px', textAlign:'center'} }>ThirdEye</li>
                           </ul>
                       </div>
                       <div className="dashboard" style={{ fontSize:"15px", backgroundColor:'rgba(0,0,0,0.2)', marginTop:'130px', marginBottom:'-10px', marginLeft:'10px', marginRight:'50px', borderRadius:'50px'}}>
                            <ul style={{marginLeft:'20px', marginRight:'-20px'}}>
                              <li style={{listStyle:"none" } }>
                                    <Link to="/" className="li" style={{color:"white", fontWeight:"500",position:'relative', left:"-40px", fontSize:"15px", padding:"15px" , display:"block", textDecoration:'none',  paddingBottom:'20px'}}
                                           onClick={props.closeMenu}
                                    >
                                        <FontAwesomeIcon className="icon"
                                            icon={faTachometerAlt}
                                           />&nbsp;
                                      
                                       DASHBOARD
                                     </Link>
                                </li>
                           </ul>
                       </div>
                       <ul className="menu" style={{marginLeft:'30px', marginTop:'20px'}}>
                           <li style={{ listStyle:"none"}}>
                             <Link to="/remote" className="li" style={{color:"white", fontWeight:"500",position:'relative', left:"-40px", fontSize:"15px", padding:"10px" , display:"block", textDecoration:'none', paddingBottom:'20px'}}
                               onClick={props.closeMenu}
                                    >
                                 <FontAwesomeIcon className="icon"
                                            icon={faVideo}
                                           />&nbsp;
                                      REMOTE ASSISTANCE
                             </Link>
                           </li>

                          <li  style={{ listStyle:"none"}}>
                             <Link to="/conference" className="li" style={{color:"white", fontWeight:"500",position:'relative', left:"-40px", fontSize:"15px", padding:"10px" , display:"block", textDecoration:'none', paddingBottom:'20px'}}
                               onClick={props.closeMenu}
                                  >
                                 <FontAwesomeIcon className="icon"
                                            icon={faPhoneAlt}
                                           />  &nbsp;
                                   CONFERENCE
                             </Link>
                          </li>
                          <li style={{ listStyle:"none"}}>
                             <Link to="/team" className="li" style={{color:"white", fontWeight:"500",position:'relative', left:"-40px", fontSize:"15px", padding:"10px" , display:"block", textDecoration:'none',  paddingBottom:'20px'}}
                               onClick={props.closeMenu}
                                 >
                                  <FontAwesomeIcon className="icon"
                                            icon={faUsersCog}
                                           />&nbsp;
                                    TEAM
                             </Link>
                          </li>
                          <li  style={{ listStyle:"none"}}>
                             <Link to="/task" className="li" style={{color:"white", fontWeight:"500",position:'relative', left:"-40px", fontSize:"15px", padding:"10px" , display:"block", textDecoration:'none',  paddingBottom:'20px'}}
                               onClick={props.closeMenu}
                                   >
                                        <FontAwesomeIcon className="icon"
                                            icon={faTasks}
                                           />&nbsp;
                                TASK
                             </Link>
                          </li>


                          <li style={{ listStyle:"none"}}>
                             <Link to="/files" className="li" style={{color:"white", fontWeight:"500",position:'relative', left:"-40px", fontSize:"15px", padding:"10px" , display:"block", textDecoration:'none',  paddingBottom:'20px'}}
                               onClick={props.closeMenu}
                                >
                                     <FontAwesomeIcon className="icon"
                                            icon={faFileAlt}
                                           />&nbsp;
                                 FILES
                             </Link>
                          </li>

                          <li  style={{ listStyle:"none"}}>
                             <Link to="/files" className="li" style={{color:"white", fontWeight:"500",position:'relative', left:"-40px", fontSize:"15px", padding:"10px" , display:"block", textDecoration:'none',  paddingBottom:'20px'}}
                               onClick={props.closeMenu}
                                   >
                                     <FontAwesomeIcon className="icon"
                                            icon={faSubscript}
                                           />&nbsp;
                                           SUBSCRIPTION
                             </Link>
                          </li>



                        </ul> 



                       
            </div>
    )
}
export default NavigationSideMenu