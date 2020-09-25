import React from 'react'
import '../App.css'
import {Stocks} from './Stocks'

function Dashboard(){
  
   
    return(
        
               <div className="subpage" style={{width:'50%',  display:'float', float:'right' }}>
                   <Stocks />
            
                </div>
        
        
        
    )
}
export default Dashboard