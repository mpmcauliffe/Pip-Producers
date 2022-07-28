import React, { useContext, useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import { Button, NarrowContainer, } from '../styled-components'


const styles = {
    inputStyles: {
        fontSize: '2.4rem', 
        marginBottom: '2vh',
    },
    labelStyles: {
        fontSize: '1.9rem',
    },
    button: {
        marginTop: '10vh'
    }
}

const Login = props => {
    const authContext = useContext(AuthContext)

    const { login, loadUser, error, clearErrors, isAuthenticated, } = authContext

    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/listpage')
            loadUser()
        }

        if (error === 'Invalid credentials') {
            //setAlert(error, 'danger')
            clearErrors()
        }
    // eslint-disable-next-line
    }, [error, isAuthenticated])

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()

        login({
            email,
            password,
        })
    } 

    const { email, password, } = user

    return (
        <NarrowContainer>
            <form>
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
                <input /* PASSWORD */
                    onChange={onChange}
                    value={password}
                    name='password'
                    type='password'
                    minLength='6'
                    required

                    className='form-control form-control-lg'
                    style={styles.inputStyles} />

                <Button 
                    formBtn
                    onClick={onSubmit}
                    style={styles.button}

                >   Submit
                </Button>
            </form>
        </NarrowContainer>
    )
}


export { Login }
