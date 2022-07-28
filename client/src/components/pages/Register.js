import React, { useContext, useEffect, useState, } from 'react'
import AuthContext from '../../context/auth/authContext'
import { Button, NarrowContainer, } from '../styled-components'


const styles = {
    inputStyles: {
        fontSize: '1.9rem', 
        marginBottom: '1.5vh',
    },
    labelStyles: {
        fontSize: '1.9rem',
    },
    button: {
        marginTop: '5vh'
    }
}

const Register = props => {
    const authContext = useContext(AuthContext)
    const { register, error, clearErrors, isAuthenticated, } = authContext

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        }

        if (error === 'User already exists.') {
            //setAlert(error, 'danger')
            clearErrors()
        }
    // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()

        register({
            name,
            email,
            password,
        })
    } 

    const { name, email, password, password2, } = user


    return (
        <NarrowContainer
            style={styles.container} >

            <form>
                <label htmlFor='name' style={styles.labelStyles}>Name</label>
                <input /* NAME */
                    onChange={onChange}
                    value={name}
                    name='name'
                    type='text'
                    required

                    className='form-control form-control-lg'
                    style={styles.inputStyles} />
        
                <label htmlFor='email' style={styles.labelStyles}>Email</label>
                <input /* EMAIL */
                    onChange={onChange}
                    value={email}
                    name='email'
                    type='email'
                    required 

                    className='form-control form-control-lg'
                    style={styles.inputStyles} />

                <label htmlFor='password' style={styles.labelStyles}>Password</label>
                <input 
                    onChange={onChange}
                    value={password}
                    name='password'
                    type='password'
                    minLength='6'
                    required

                    className='form-control form-control-lg'
                    style={styles.inputStyles} />

                <label htmlFor='password2' style={styles.labelStyles}>Confirm Password</label>
                <input 
                    onChange={onChange}
                    value={password2}
                    name='password2'
                    type='password'
                    required
                    
                    className='form-control form-control-lg'
                    style={styles.inputStyles} />

                <Button 
                    onClick={onSubmit}
                    style={styles.button}

                >   Submit
                </Button>
            </form>    
        </NarrowContainer>
    )
}


export { Register }
