import React from 'react'
import { Bar, SmallIcon, } from '../styled-components'


const style = {
    large: {
        flexDirection: 'column', 
        padding: '3rem', 
    },
    small: {
        flexDirection: 'column',
        padding: '.5rem'
    },
    iconsLarge: {
        margin: '0 auto',
    },
    iconsSmall: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-evenly'
    },
}

const Footer = () => {
 

    return (
        <Bar footer style={window.innerWidth > 768 ? style.large : style.small}>

            <div style={{ color: '#ababab' }}>
                <h5>Contact</h5>
                <h6>Pip Producers</h6>
                <h6>email</h6>
            </div>
            <div style={window.innerWidth > 768 ? style.iconsLarge : style.iconsSmall}>
                {[1,2,3,4].map(num => {
                    return (
                        <SmallIcon 
                            key={num}
                            src={require(`../../assets/images/svg/${num}.svg`)}
                            alt='social-icon'
                        />
                    )
                })}
                <SmallIcon 
                    src={require('../../assets/images/svg/tradeview.png')}
                    alt='social-icon'   
                />
            </div>
            <div style={{ textAlign: 'center', color: '#696969', }}>
                <h6>Michael Paul McAuliffe 2019 &copy;</h6>
            </div>
        </Bar>
    )
}


export { Footer }