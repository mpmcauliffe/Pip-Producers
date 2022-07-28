import React, { Fragment, useEffect, useContext, } from 'react'
import ArticleContext from '../../context/articleContext/articleContext'
import { CoverImage, FormContainer, MainContainer, } from '../styled-components'
import { BlogLink, BackToTop, } from '../react-components'
import Loading from '../loading/Loading'
import moment from 'moment'


const Article = props => {
    const articleContext = useContext(ArticleContext)
    const { single, getSingle, getNextArticles, next, } = articleContext

    useEffect(() => {
        getSingle(props.match.params.id)
        getNextArticles()

        window.scrollTo(0,0)
    // eslint-disable-next-line
    }, [])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [single])


    if (single === null) {
        return <Loading />
    } else {
        return (

            <Fragment>
                <FormContainer>
                    {!single.isPublished && <h3><em>DRAFT</em></h3>}
                    
                    <CoverImage 
                        src={single.picture} 
                        alt='img' 
                        style={{ margin: '2 auto', maxHeight: '80vh' }} />

                    <h2>{single.title}</h2>
                    <br />

                    <h4><em>by </em>{single.author}</h4>
                    <h4><em>date </em>{moment(single.date).format('MMMM Do YYYY')}</h4>
                    <hr />
                    <br /><br /><br /><br /><br />

                    <pre>{single.content}</pre>   
                    
                    <BackToTop />
                </FormContainer>

                <MainContainer>
                    {single.isPublished &&
                        <Fragment>
                            <h4>...more articles...</h4>
                            
                            {next.length > 0 && 
                                next.slice(0, 5).map(article => (
                                    <Fragment key={article._id}>
                                        {article._id !== single._id &&
                                            <Fragment>
                                                <BlogLink article={article} />
                                                <div style={{ height: '.1rem', background: '#fbfbfb' }} />
                                            </Fragment>
                                        }
                                    </Fragment>                      
                                ))
                            }

                            <BackToTop />
                        </Fragment>
                    }
                </MainContainer>
            </Fragment>
                        
        )
    }
}


export { Article }
