import { useContext, } from 'react'
import ArticleContext from '../../context/articleContext/articleContext'
import { Link, } from 'react-router-dom'
import { Slide, SlideContainer, Thumbnail, } from '../styled-components'
import moment from 'moment'
import { truncate, } from '../../helpers'


export const BlogLink = ({ article }) => {
    const articleContext = useContext(ArticleContext)
    const { getSingle, } = articleContext


    return (
        <Link 
            to={`/article/${article._id}`}
            onClick={() => getSingle(article._id)}
            style={{ textDecoration: 'none', }} >

            <Slide published={article.isPublished}>
                <SlideContainer>
                    <h2>{window.innerWidth > 768 ? truncate(article.title, 50) : truncate(article.title, 35)}</h2>
                    <h4><em>Author: </em>{article.author}</h4>
                    <h4><em>Date: </em>{moment(article.date).format('MMMM Do YYYY')}</h4>
                </SlideContainer>

                <SlideContainer image>
                    <Thumbnail src={article.picture} alt='img' />
                </SlideContainer>
            </Slide>
        </Link>
    )
}
