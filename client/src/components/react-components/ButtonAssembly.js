import { Fragment, useContext, useEffect, } from 'react'
import AuthContext from '../../context/auth/authContext'
import ArticleContext from '../../context/articleContext/articleContext'
import { Link, } from 'react-router-dom'
import { Button, } from '../styled-components'


const style = {
    outerRow: {
        display: 'flex', 
        width: '90vw', 
        justifyContent: 'space-between',
    },
    outerColumn: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
    },
    right: {
        display: 'flex', 
        alignItems: 'center',
    },
}

export const ButtonAssembly = ({ clearToggle, }) => {
    const authContext = useContext(AuthContext)
    const { loadUser, logout, isAuthenticated, user, loading, } = authContext

    const articleContext = useContext(ArticleContext)
    const { clearSingle, } = articleContext

    useEffect(() => {
        loadUser()

    // eslint-disable-next-line
    }, [])

    const onLogout = () => {
        logout()
    }


    const authLinks = (
        <Fragment>
        {user !== null &&
            <div style={window.innerWidth > 768 ? style.outerRow : style.outerColumn}>
                <div>
                    <Link to='/listpage' onClick={clearToggle}>
                        <Button>Blog</Button>
                    </Link>
                </div>

                <div style={window.innerWidth > 768 ? style.right : style.outerColumn}>
                    {user.role === 'admin' &&
                        <Link to='/users' onClick={clearToggle}>
                            <Button style={{ marginRight: '3rem', }}>
                                Users
                            </Button>
                        </Link>
                    }
                    
                    
                    {user.role === 'admin' || user.role === 'contributor' 
                        ?   (
                                <Link 
                                    to='/create'
                                    onClick={() => clearSingle()} >
                                    <Button style={{ marginRight: '3rem', }} onClick={clearToggle}>
                                        Create
                                    </Button>
                                </Link>
                        ) : (null)
                    }
                    

                    <Link to='/login' onClick={clearToggle}>
                        <Button onClick={onLogout}>
                            Logout    
                        </Button>
                    </Link>         
                </div>
            </div>
        }
        </Fragment>
    )

    const welcomeLinks = (
        <div style={window.innerWidth > 768 ? style.outerRow : style.outerColumn}>
            <div />
            <div>
                <Link to='/register' onClick={clearToggle}>
                    <Button style={{ marginRight: '3rem', }}>
                        Register
                    </Button>
                </Link>

                <Link to='/login' onClick={clearToggle}>
                    <Button>
                        Login
                    </Button>           
                </Link>   
            </div>                       
        </div>   
    )


    if (!isAuthenticated && !loading) {
        return welcomeLinks
    } else {
        return authLinks
    }
}
