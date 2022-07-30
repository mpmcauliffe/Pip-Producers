import { Bar, ScoreCard, ScoreLabel, ScoreNumber, } from '../styled-components'


const style = {
    large: {
        justifyContent: 'space-evenly',
    },
    small: {
        justifyContent: 'space-evenly',
        padding: '1rem .5rem'
    }
}

export const Scorebar = () => {

    const indexes = ['Majors', 'Dollar Index', 'Crosses', 'Commodities']


    return (
        <Bar 
            color='#fafafa' 
            border='.1rem solid #ababab' 
            style={window.innerWidth > 768 ? style.large : style.small} >

            {indexes.map(label => 
                <ScoreCard 
                    key={label} >

                    <ScoreLabel>{label}</ScoreLabel>
                    <ScoreNumber>0.0</ScoreNumber>
                </ScoreCard>    
            )}
        </Bar>

    )
}
