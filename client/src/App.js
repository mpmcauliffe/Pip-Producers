import AuthState from './context/auth/AuthState'
import AdminState from './context/adminContext/AdminState'
import ArticleState from './context/articleContext/ArticleState'
import { BrowserRouter as Router, } from 'react-router-dom'
import { MasterSwitch } from './components/routes'
import { Footer, Navbar, } from './components/react-components'
import setAuthToken from './utils/setAuthToken'


if(localStorage.token) { setAuthToken(localStorage.token) }

function App(props) {


    return (
        <Router>
            <AuthState>
                <AdminState>
                    <ArticleState>
                        <Navbar />

                        <MasterSwitch />
                        
                        <Footer />
                    </ArticleState>
                </AdminState>           
            </AuthState>
        </Router>
    )
}


export default App

