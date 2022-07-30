import PropTypes from 'prop-types'


export const Progress = ({ percentage, }) => {
    return (
        <div className='progress' style={{ height: '2.4rem', fontSize: '1.9rem' }}>
            <div className='progress-bar progress-bar-striped bg-success' 
                role='progressbar' 
                style={{ width: `${percentage}%`, }}
            >
                {percentage}%
            </div>
        </div>
    )
}

Progress.propTypes = {
    percentage: PropTypes.number.isRequired,
}
