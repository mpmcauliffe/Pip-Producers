import React from 'react'
import './loading.css'


const Loading = () =>  

    <div 
        className="lds-circle"
        style={{ width: '20vw', 
            minHeight: '130vh', 
            margin: '40vh auto', 
            paddingBottom: '15vh' }} >
                    
        <div></div>
        <div></div>
        <div></div>
    </div>
    
   
    
    
export default Loading
