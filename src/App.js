import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from 'components/layout/Landing'
import LoginPage from 'components/auth/LoginPage'
import Register from 'components/auth/Register'
import NavBar from 'components/layout/NavBar'
import Alert from 'components/layout/alert'
import Profile from 'components/profile/profile'
import DashBoard from 'components/dashBoard/dashBoard'
import PrivateRoute from 'components/routing/PrivateRoute'
import { loadUser } from './actions/auth'
// Redux
import { Provider } from 'react-redux'
import store from './store'

const App = ()=> {
    useEffect(()=>{
        store.dispatch(loadUser())
    }, [])


    return (
        <Provider store={store}>
            <Fragment>
            {/* <NavBar/> */}
            <Alert/>
                <Router>
                    <Route exact  path="/" component={LandingPage} />
                    <Switch>
                        <Route exact  path="/login" component={LoginPage} />
                        <Route exact  path="/register" component={Register} />
                        <PrivateRoute exact  path="/Profile" component={Profile} />
                        <PrivateRoute exact  path="/dashboard" component={DashBoard} />
                        {/* <Route component={Routes} /> */}
                    </Switch>
                </Router>
            </Fragment>
        </Provider>
    );
}

export default App;