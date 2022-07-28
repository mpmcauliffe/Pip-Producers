import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'


const BackToTop = () => {

    return (
        <Link             
            to='top'
            spy={true}
            smooth={true}
            offset={-100}
            duration= {1000}
            activeClass='active'>
            <p
                style={{ textAlign: 'center', margin: '6rem 0', 
                        color: '#930000', cursor: 'pointer', }}>   
                
                back to top &uarr; 
            </p>
        </Link> 
    )
}


export { BackToTop }
