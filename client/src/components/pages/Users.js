import { useContext, useEffect, } from 'react'
import AdminContext from '../../context/adminContext/adminContext'
import { Button, MainContainer, UserContainer } from '../styled-components'
import Loading from '../loading/Loading'


const styles = {
    smallContainer: {
        width: '100vw',
        paddingTop: '3rem',
    },
    smallUserCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '15rem',
    },
    smallSelectContainer: {
        width: '90vw'
    }
}

export const Users = () => {
    const adminContext = useContext(AdminContext)
    const { getUsers, updateUsers, users, changeUserRole, changedUsers, } = adminContext

    useEffect(() => {
        getUsers()

    // eslint-disable-next-line 
    }, [])


    const onChange = (id, e) => {
        const updatedUser = users.filter(user => user._id === id)

        updatedUser[0].role = e.target.value

        changeUserRole(updatedUser)
    }

    const saveChanges = () => {
        if(changedUsers.length > 0) {
            updateUsers()
        }
    }


    if (users === null) {
        return <Loading />
    } else {
        return (
            <MainContainer style={window.innerWidth > 768 ? { margin: '3rem auto', } : styles.smallContainer}>
                {users !== null && 
                    users.map(user => (
                        <UserContainer  
                            key={user._id}
                            published
                            style={window.innerWidth < 768 ? styles.smallUserCard : {}} >
                            

                            <h4>{user.name}</h4>                            
                            <h4>{user.email}</h4>

                            <div    
                                className='user-select-container'
                                style={window.innerWidth < 768 ? styles.smallSelectContainer : {}} >
                                

                                <select     
                                    value={user.role} 
                                    name={user._id}
                                    onChange={onChange.bind(this, user._id)}
                                    disabled={user.role === 'admin' ? true : false}
                                    className='user-select' >

                                    <option style={{ fontSize: '2rem', }} value='user'>user</option>
                                    <option style={{ fontSize: '2rem', }} value='contributor'>contributor</option>
                                    <option style={{ fontSize: '2rem', }} value='admin'>admin</option>
                                </select>
                                {
                                    (() => {
                                        if (user.role === 'user'){
                                            return <div 
                                                        className='color-code' 
                                                        style={{ background: '#21db6f', }} ></div>

                                        } else if (user.role === 'contributor') {
                                            return <div 
                                                        className='color-code' 
                                                        style={{ background: '#daa520', }} ></div>
                                        } else {
                                            return <div 
                                                        className='color-code' 
                                                        style={{ background: '#db2121', }} ></div>
                                        }
                                    })()
                                }                                
                            </div>
                            
                        </UserContainer>    
                    ))
                }
                <Button 
                    onClick={saveChanges}
                    style={{ marginTop: '3rem', }}
                    
                >   Save
                </Button>
            </MainContainer>
        )
    }
}
