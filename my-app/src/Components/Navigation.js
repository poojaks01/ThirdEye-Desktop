import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated  } from 'react-spring'
import NavigationSideMenu from './NavigationSideMenu'

function Navigation(){
        const [showMenu, setShowMenu] = useState(false)

        const maskTransitions = useTransition(showMenu, null, {
         from: { position:"absolute", opacity: 0 },
         enter: { opacity: 1},
         leave: { opacity: 0},
        })

       const menuTransitions = useTransition(showMenu, null, {
            
           from: { opacity: 0, transform: 'translateX(100%)'},
           enter: { opacity: 1, transform: 'translateX(0%)'},
           leave: { opacity: 1, transform: 'translateX(100%)'},
           })
          
      

    
    return (
        
        <nav className="togglebutton">
            <span  Toggle_class>
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
                    className="tansition_Mask"
                    
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
                    className="Transition_Menu"
                    
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