import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderPage from '../components/HeaderPage';
import ExpensifyDashboardPage from '../components/ExpensifyDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import EditExpensePage from '../components/EditExpensePage';

const AppRoute = () => (
    <BrowserRouter>
        <div>
            <HeaderPage />
                <Switch>
                    <Route path="/" component={ExpensifyDashboardPage} exact={true} />
                    <Route path="/create" component={AddExpensePage} />
                    <Route path="/edit/:id" component={EditExpensePage} />
                    <Route path="/help" component={HelpExpensePage} />
                    <Route component={NotFoundPage} />
                </Switch>
        </div>
    </BrowserRouter>
);

export default AppRoute;