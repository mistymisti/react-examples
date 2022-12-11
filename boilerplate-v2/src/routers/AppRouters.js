import React from 'react';
import { Router, Switch } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRoute = () => (
    <Router history={history}>
        <div>
                <Switch>
                    <PublicRoute path="/" component={LoginPage} exact={true} />
                    <PrivateRoute path="/dashboard" component={DashboardPage} />
                    <PublicRoute component={NotFoundPage} />
                </Switch>
        </div>
    </Router>
);

export default AppRoute;