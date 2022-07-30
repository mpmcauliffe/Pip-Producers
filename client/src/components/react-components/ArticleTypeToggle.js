import { Fragment, useEffect, useContext, useState, } from 'react'
import ArticleContext from '../../context/articleContext/articleContext'
import { ButtonSet, } from '../styled-components'


export const ArticleTypeToggle = ({ user }) => {
    const articleContext = useContext(ArticleContext)
    const { filterByType, } = articleContext

    const [display, setDisplay] = useState(true)

    useEffect(() => {
        filterByType(true)
        
    // eslint-disable-next-line    
    }, [])

    const toggleDisplay = e => {
        e.preventDefault()

        let status 
        if (e.target.value === 'true') {
            status = true
        } else {
            status = false
        }
        
        filterByType(status)
        setDisplay(!display)
    }

    if (user.role === 'user') {
        return <h2>Articles</h2>
    } else {
        return (
            <Fragment>
                <ButtonSet
                    draft
                    name='isPublished'
                    value={false}
                    active={!display}
                    onClick={toggleDisplay}                                   

                >   Drafts
                </ButtonSet>

                <ButtonSet
                    name='isPublished'
                    value={true}
                    active={display}
                    onClick={toggleDisplay}

                >   Published
                </ButtonSet>
            </Fragment>
        )
    }
    
}
