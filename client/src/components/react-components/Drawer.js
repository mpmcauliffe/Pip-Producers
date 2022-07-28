import React from 'react'


const Drawer = props => {
    
    return (
        <div 
            style={{ position: 'fixed', 
                zIndex: 10,
                height: '89vh', 
                width: '19rem', 
                top: '11vh', 
                right: 0,
                padding: '3rem',
                background: '#393939',
                boxShadow: '-7px 10px 5px 0px rgba(0,0,0,0.4)', }} >

            {props.children}
        </div>
    )
}


export { Drawer }
