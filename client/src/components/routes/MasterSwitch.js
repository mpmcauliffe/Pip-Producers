import { Route, Routes, } from 'react-router-dom'
import { PrivateRTE, Restricted, RestrictedAdmin, } from '../routes'
import {  
    Article,
    Create,
    FrontPage,
    ListPage,
    Login,
    NotFound,
    Register,
    Users,
} from '../pages'


export const MasterSwitch = () => {
    return (
        <Routes>
            <Route /* PUBLIC */
                exact
                path='/fontpage'
                element={<FrontPage />} />

            <Route /* PUBLIC */
                exact 
                path='/register'
                element={<Register />} />

            <Route /* PUBLIC */
                exact 
                path='/'
                element={<Login />} />

            <Route /* PRIVATE */
                exact
                path='/listpage'
                element={<PrivateRTE />}>
                <Route 
                    exact
                    path='/listpage'
                    element={<ListPage />} />
            </Route>

            <Route /* PRIVATE */
                exact
                path='/article/:id'
                element={<PrivateRTE />}>
                <Route 
                    exact
                    path='/article/:id'
                    element={<Article />} />
            </Route>

            <Route /* RESTRICTED */
                exact
                path='/create'
                element={<Restricted />}>
                <Route 
                    exact
                    path='/create'
                    element={<Create />} />
            </Route>

            <Route /* RESTRICTED */
                exact
                path='/create/:articleId/:userId'
                element={<Restricted />}>
                <Route 
                    exact
                    path='/create/:articleId/:userId'
                    element={<Create />} />
            </Route>    

            <Route /* RESTRICTED */
                exact
                path='/users'
                element={<RestrictedAdmin />}>
                    <Route
                        exact
                        path='/users'
                        element={<Users />} />
            </Route>

            <Route /* PUBLIC ALL OTHER POSSIBLE ROUTES */ 
                element={<NotFound />} />
        </Routes>
    )
}
