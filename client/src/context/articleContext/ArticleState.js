import React, { useReducer, } from 'react'
import ArticleContext from './articleContext'
import articleReducer from './articleReducer'
import axios from 'axios'
import { 
    SAVE_ARTICLE,       // Crud
    GET_ARTICLES,       // cRud
    GET_SINGLE,         // cRud
    EDIT_ARTICLE,       // crUd
    DELETE_ARTICLE,     // cruD
    CLEAR_SINGLE,
    FILTER_BY_TYPE,
    NEXT_ARTICLES,
} from '../types'


const ArticleState = props => {
    const initialState = {
        articles: null,
        single: null,
        type: null,
        next: [],
    }

    const [state, dispatch] = useReducer(articleReducer, initialState)

    // header data
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    /* GET ARTICLES cRud
        makes axios request to ARTICLES API to retrieve ALL articles 
        DISPATCHES: type - GET_ARTICLES
                    payload - a response array */
    const getArticles = async () => {
        try {
            const res = await axios.get('/api/articles')

            dispatch({ 
                type: GET_ARTICLES, 
                payload: res.data 
            })
        } catch (error) {
            console.log(error)

            // setTimeout(() => {
            //     getArticles()
            // }, 2000);
        }
    }

    /* get SINGLE article cRud 
        makes axios request to ARTICLES API to retrieve a SINGLE article
        DISPATCHES: type - GET_SINGLE
                    payload - a response array consisting of a single element */

    /**** THIS SHOULD BE REFACTORED TO USE state.articles INSTEAD OF MAKING AN axios() CALL ****/
    const getSingle = async (...ids) => {
        let res = []

        try {
            if (ids.length === 1) {
                res = await axios.get(`/api/articles/${ids[0]}`, config)
            } else {
                res = await axios.get(`/api/articles/${ids[0]}/${ids[1]}`, config)
            }

            dispatch({ 
                type: GET_SINGLE, 
                payload: res.data 
            })
        } catch (error) {
            console.log(error)
        }
    }

    /* POST a SINGLE article Crud
        makes axios POST request to ARTICLES API to enter a SINGLE article 
        DISPATCHES: type - SAVE_ARTICLE
                    payload - a response from server */
    const saveArticle = async article => {
        try {
            const res = await axios.post('/api/articles', article, config)
            
            console.log(res.data)

            dispatch({ 
                type: SAVE_ARTICLE, 
                payload: res.data 
            })
        } catch (error) {
            console.log(error)
        }
    }

    /* PUT a SINGLE article crUd
        makes axios POST request to ARTICLES API to enter a SINGLE article 
        DISPATCHES: type - SAVE_ARTICLE
                    payload - a response from server */
    const updateArticle = async article => {
        const id = article._id

        try {
            const res = await axios.put(`/api/articles/${id}`, article, config)

            console.log(res.data)
            dispatch({ 
                type: EDIT_ARTICLE, 
                payload: res.data 
            })
        } catch (error) {
            console.log(error)
        }
    }   

    /* DELETE a SINGLE article cruD
        makes axios DELETE request to ARTICLES API to delete a SINGLE article 
        DISPATCHES: type - DELETE
                    payload - id of deleted article */
    const deleteArticle = async id => {
        try {
            const res = await axios.delete(`/api/articles/${id}`)
            
            dispatch({ 
                type: DELETE_ARTICLE, 
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    // clears single array when navigating between Edit and Article pages
    const clearSingle = () => dispatch({ type: CLEAR_SINGLE })

    // controls types array for published articles and drafts
    const filterByType = articleStatus => dispatch({ type: FILTER_BY_TYPE, payload: articleStatus, })

    // controls next array for article links to appear at bottom of article
    const getNextArticles = () => {
        if (state.articles !== null) {
            dispatch({ type: NEXT_ARTICLES }) 
        }
    }


    return (
        <ArticleContext.Provider
            value={{
                articles: state.articles,
                single: state.single,
                type: state.type,
                next: state.next,
                getArticles,
                getSingle,
                saveArticle,
                updateArticle,
                deleteArticle,
                clearSingle,
                filterByType,
                getNextArticles, }}

        >   {props.children}
        </ArticleContext.Provider>
    )
}


export default ArticleState
