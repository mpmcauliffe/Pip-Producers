import React, { Fragment, useState, } from 'react'
import { Message, Progress, } from '../react-components'
import { Button, } from '../styled-components'
import axios from 'axios'


const FileUpload = ({ setImagePath, picture }) => {

    const [ file, setFile ] = useState('') 
    const [ fileName, setFileName ] = useState('Choose A Cover Image') 
    const [ uploadedFile, setUploadedFile ] = useState({})
    const [ message, setMessage ] = useState('')
    const [ uploadPercentage, setUploadPercentage ] = useState(0)

    const onChange = e => {
        if(/(.png|.jpg|.jpeg|.svg)$/.test(e.target.files[0].name)) {
            setFile(e.target.files[0])
            setFileName(e.target.files[0].name)
            setMessage('File ready for upload')
        } else {
            setMessage('Only .png, .jpg, .jpeg, and .svg files are acceptable')
        }
    }
    //console.log(uploadFile)
    console.log(picture)


    const onSubmit = async e => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('file', file)

        console.log(file)

        try {
            const res = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(parseInt(
                        Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    ))
                    setTimeout(() => setUploadPercentage(0), 10000)
                },
            })
            const { fileName, filePath } = res.data

            setUploadedFile({ fileName, filePath })
            setMessage('File uploaded')
            console.log(filePath)

            if (picture) {
                picture = ''
            }

            setImagePath(filePath)
        } catch(err) {
            if(err.response.status === 500) {
                setMessage('Error: there was a problem with the server')
            } else {
                setMessage(err.response.data.msg)
            }
        }
    }

    // const remove = e => {
    //     e.preventDefault()
    //     console.log('removed')
    // }

    return (
        <Fragment>
            {message ? <Message msg={message} /> : null}

            <div className='custom-file mb-4'>
                <input 
                    onChange={onChange}
                    
                    type='file' 
                    className='custom-file-input' />

                <label                        
                    className='custom-file-label' 
                    htmlFor='customFile'                         
                    style={{ fontSize: '2rem',  }}

                >   {fileName}
                </label>
            </div>

            <Progress percentage={uploadPercentage} />

            <Button 
                formBtn
                onClick={onSubmit}
                type='submit' 
                className='btn btn-primary btn-block mt-4' 

            >   Upload
            </Button>

            {uploadedFile || picture 
                ?  (
                        <div className='row mt-5'>
                            <div className="col-md-6 m-auto">
                                <h3 className="text-center">{picture ? '' : uploadedFile.fileName}</h3>
                                <img 
                                    src={picture ? picture : uploadedFile.filePath} 
                                    alt=''
                                    style={{ width: '100%' }} />
                            </div>
                        </div> 
                ) : (null)   
            }
        </Fragment>
    )
}


export { FileUpload }
