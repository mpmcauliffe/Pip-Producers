import { Fragment, useState, } from 'react'
import { Link, } from 'react-router-dom'
import { ButtonAssembly, Drawer, } from '../react-components'
import { Bar, ButtonSet, FadeContainer, SmallLogo, } from '../styled-components'


const style = {
    menuRow: {
        display: 'flex',
        width: '100%', 
        justifyContent: 'flex-end',
    }
}

export const Navbar = props => {
    const [drawerVisible, setDrawer] = useState(false)

    const toggleDrawer = () => {
        setDrawer(!drawerVisible)
    }

    const menu = (
        <div style={style.menuRow}>
            <ButtonSet onClick={toggleDrawer}>Menu</ButtonSet>
        </div>
    )

    return (
        <Fragment>
            <Bar id='top'>
                <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                    <Link to='/'>
                        <SmallLogo src={require('../../assets/images/small_crest.png')} /> 
                    </Link>
                    
                    {window.innerWidth > 768
                        ?   <ButtonAssembly />
                        :   menu 
                    }
                </div>
            </Bar>
            {drawerVisible && 
                <Fragment>
                    <Drawer>
                        <ButtonAssembly clearToggle={toggleDrawer} />
                    </Drawer>
                    <FadeContainer onClick={toggleDrawer} />
                </Fragment>    
            }
        </Fragment>
        
    )
}


/****  USE WHEN NOT UNDER CONSTRUCTION 
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to='/'>
            <SmallLogo src={require('../../assets/images/small_crest.png')} /> 
        </Link>
        
        {isAuthenticated 
            && (
                <Link to='/listpage'>
                    <Button>Blog</Button>
                </Link>
            )
        }            
    </div>   

    {isAuthenticated ? welcomeLinks : authLinks}
*/

/****  USE WHEN UNDER CONSTRUCTION
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to='/'>
            <SmallLogo src={require('../../assets/images/small_crest.png')} /> 
        </Link>
        
        <Link to='/listpage'>
            <Button>Blog</Button>
        </Link>
    </div>
    {constructionLinks}
 */

 //  <p className='welcom' style={{color: '#DAA520', }}>Hello {user && user.name}</p>