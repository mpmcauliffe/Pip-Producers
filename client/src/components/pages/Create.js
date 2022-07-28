import React, { useState, useContext, useEffect } from 'react'
import ArticleContext from '../../context/articleContext/articleContext'
import { FileUpload, BackToTop } from '../react-components'
import { Button, ButtonSet, FormContainer, } from '../styled-components'
import 'simplebar/dist/simplebar.min.css'


const Create = props => {
    const articleContext = useContext(ArticleContext)
    const { saveArticle, updateArticle, single } = articleContext

    const [data, setData] = useState({
        title: '',
        author: '',
        date: '',
        content: '', 
        picture: '',
        isPublished: false,
    })

    const [buttonActive, setButonActive] = useState(data.isPublished)

    useEffect(() => {
        if (single !== null) {
            setData(single[0])
            setButonActive(single[0].isPublished)
            window.scrollTo(0,0)
        } else {
            setData({
                title: '',
                author: '',
                date: '',
                content: '', 
                picture: '',
                isPublished: false,
            })
        }

    // eslint-disable-next-line
    }, [single])

    const onChange = e => setData({ ...data, [e.target.name]: e.target.value })

    const onPublish = e => {
        e.preventDefault()
        setData({ ...data, isPublished: !data.isPublished })
        setButonActive(!buttonActive)
    }
    
    const setImagePath = filePath => setData({ ...data, picture: filePath })
    

    const submit = e => {
        e.preventDefault()

        console.log("Published? ", data.isPublished)

        if (single !== null) {
            console.log('article edit')
            updateArticle(data)
        } else {
            console.log('article save')
            saveArticle(data)
        }
    }


    return (
        <FormContainer style={{ margin: '3rem auto', }}>
            
            <form autoComplete='off'>
                <input  /* TITLE */
                    value={data.title}
                    name='title'
                    onChange={onChange}

                    className='form-control form-control-lg' 
                    placeholder='Title' 
                    type='text'
                    style={{ fontSize: '3rem', 
                        marginBottom: '4rem' }} />

                <input  /* AUTHOR */
                    value={data.author}
                    name='author'
                    onChange={onChange}

                    className='form-control form-control-lg' 
                    placeholder='Author' 
                    type='text' 
                    style={{ fontSize: '2.4rem', 
                        marginBottom: '2rem ', }} />

                <input  /* DATE */
                    value={data.date} 
                    name='date' 
                    onChange={onChange}

                    className='form-control' 
                    placeholder={data.date}
                    type='date'
                    style={{ fontSize: '2.4rem', 
                        height: '4.8rem',
                        width: '100%', 
                        marginBottom: '10rem', }} />

                <p style={{ color: '#ff0000' }}>This site is currently 
                active on Heroku which uses an ephemeral file system so 
                images uploaded through the create page will NOT persist
                into the next dyno session.</p>
                <FileUpload setImagePath={setImagePath} picture={data.picture} />
                
                <textarea /* CONTENT */
                    value={data.content}
                    name='content'
                    onChange={onChange}

                    className='form-control' 
                    placeholder='Blog Content'
                    rows='40' 
                    style={{ fontSize: '2rem',
                        margin: '5rem 0' }} />

                <BackToTop />

                <div style={{ display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        marginBottom: '6rem' }} >

                    <div>
                        <ButtonSet 
                            draft
                            name='isPublished'
                            value={false}
                            active={!buttonActive}
                            onClick={onPublish}

                        >   Draft
                        </ButtonSet>

                        <ButtonSet
                            name='isPublished'
                            value={true}
                            active={buttonActive}
                            onClick={onPublish}

                        >   Publish
                        </ButtonSet>
                    </div>
                    
                    <Button 
                        onClick={submit}
                        
                    >   Save
                    </Button>
                </div>
            </form>
        </FormContainer>
    )
}


export { Create }
 