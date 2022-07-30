import React from 'react'
import { Button, } from '../styled-components'


export const PipButton = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '3vh' }}>
            <Button pip>
                Pips Produced
                <h4>0&nbsp;&nbsp;.&nbsp;&nbsp;0&nbsp;&nbsp;0&nbsp;&nbsp;0&nbsp;&nbsp;0</h4>
            </Button>
        </div>
    )
}
