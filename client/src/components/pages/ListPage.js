import { Fragment, useEffect, useContext, } from 'react'
import AuthContext from '../../context/auth/authContext'
import ArticleContext from '../../context/articleContext/articleContext'
import { ArticleTypeToggle, BlogLink, BackToTop, EditBar, } from '../react-components'
import { MainContainer, } from '../styled-components'
import Loading from '../loading/Loading'


export const ListPage = () => {
    const authContext           = useContext(AuthContext)
    const { loadUser, user, }   = authContext

    const articleContext = useContext(ArticleContext)
    const { getArticles, type, clearSingle, articles, } = articleContext

    useEffect(() => {
        loadUser()
        getArticles()
        clearSingle()

        window.scrollTo(0,0)

    // eslint-disable-next-line
    }, [])

    // useEffect(() => { console.log('Rerender List'); }, [type])


    if (articles === null || user === null) {
        return <Loading />

    } else {
        return (
            <MainContainer>     
                <p style={{ color: '#ff0000' }}>This site is currently 
                active on Heroku which uses an ephemeral file system so 
                images uploaded through the create page will NOT persist
                into the next dyno session.</p>

                <div style={{ margin: '3vh auto' }}>
                    <ArticleTypeToggle user={user} /> 
                </div>
                
                {type !== null && 
                    type.map(article => (
                        <Fragment key={article._id}>
                            <BlogLink article={article} />

                            <EditBar 
                                user={user} 
                                article={article} />                   
                        </Fragment>                       
                    ))
                }

                <BackToTop />
            </MainContainer>
        )
    }    
}
