import { useContext, } from 'react'
import ArticleContext from '../../context/articleContext/articleContext'
import { Link, } from 'react-router-dom'
// import Loading from '../loading/Loading'
import { UserContainer, } from '../styled-components'


export const EditBar = ({ article, user, }) => {
    const articleContext                                  = useContext(ArticleContext)
    const { deleteArticle, getSingle, filterByType, }     = articleContext


    const handleDeleteClick = () => {
        deleteArticle(article._id)

        setTimeout(() => {
            filterByType(article.isPublished)
        }, 3000)
    }


    if (user.role === 'admin' || article.user === user._id) {
        return (
            <UserContainer published={article.isPublished}> 
                <Link 
                    to={`/create/${article._id}/${user._id}`} 
                    onClick={() => getSingle(article._id, user._id)}
                    style={{ textDecoration: 'none', }}

                >   <p className='small-use edit-use'><strong>Edit</strong></p>
                </Link>

                <p  
                    className='small-use delete-use'
                    onClick={handleDeleteClick}>   
                    
                    <strong>Delete</strong>
                </p>
            </UserContainer>
        )
    } else {
        return <div style={{ height: '.1rem', background: '#fbfbfb' }} />
    }
}
