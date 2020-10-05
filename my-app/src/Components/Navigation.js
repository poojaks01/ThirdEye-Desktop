import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated  } from 'react-spring'
import { Transition } from 'react-transition-group'



import NavigationSideMenu from './NavigationSideMenu'

function Navigation(){
        const [showMenu, setShowMenu] = useState(false)

        const maskTransitions = useTransition(showMenu, null, {
         from: { position:"absolute", opacity: 0 },
         enter: { opacity: 1},
         leave: { opacity: 0},
        })

       const menuTransitions = useTransition(showMenu, null, {
            
           from: { opacity: 0, transform: 'translateX(-100%)'},
           enter: { opacity: 1, transform: 'translateX(0%)'},
           leave: { opacity: 1, transform: 'translateX(0%)'},
           })
          
      

    
    return (
        
        <nav className="togglebutton">
            <span  style={{fontSize:"35px"}}>
              <FontAwesomeIcon 
                icon={showMenu ? faTimes : faBars}
                onClick={() => setShowMenu(true) }
              />
             
            </span>
            {
                maskTransitions.map(({ item, key, props }) =>
                   item && 
                   <animated.div
                    key={key} 
                    style={props}
                    style={{ position:"fixed", top:"0", right:"0", width:"50%", height:"100%",backgroundColor:'black'}}
                    onClick={() => setShowMenu(false)}
                    >
                    
                   
                    </animated.div>
                )

            }





            {
                menuTransitions.map(({ item, key, props }) =>
                   item && 
                   <animated.div
                    key={key} 
                    style={props}
                    style={{position:"fixed", background:"#ff4040", top:"88px", right:"0", width:"50%", height:"100%", zIndex:"50", boxShadow:"2px 2px lightgrey", padding:"5px"}}
                    >
                       
                       <NavigationSideMenu style={{width:"50%"}}
                         closeMenu={() => setShowMenu(false)} 
                       
                        />
                    </animated.div>
                )

            }

        </nav>
         
    )
}
export default Navigation