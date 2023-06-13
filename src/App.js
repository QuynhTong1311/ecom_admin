import React, { lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import PrivateRoute from './components/login/PrivateRoute'
import { ToastContainer } from './utils/toast';
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer';

const Layout = lazy(() => import('./layout/Layout'));
const Login = lazy(() => import('./pages/Login'));
const Singup = lazy(() => import('./pages/Singup'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));

const App = () => {
    return (
        <>
            <ToastContainer />
            <Router>
                <AccessibleNavigationAnnouncer />
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/singup" component={Singup} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/reset-password/:token" component={ResetPassword} />

                    <PrivateRoute>
                        {' '}
                        <Route path="/" component={Layout} />
                    </PrivateRoute>

                    <Redirect exact from="/" to="/login" />

                </Switch>
            </Router>
        </>
    )
}

export default App