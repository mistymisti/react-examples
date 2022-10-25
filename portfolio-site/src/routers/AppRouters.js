import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderPage from '../components/HeaderPage';
import HomePage from '../components/ExpensifyDashboardPage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import ItemPage from '../components/ItemPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRoute = () => (
    <BrowserRouter>
        <div>
            <HeaderPage />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/portfolio" component={PortfolioPage} exact={true} />
                    <Route path="/portfolio/:id" component={ItemPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={NotFoundPage} />
                </Switch>
        </div>
    </BrowserRouter>
);

export default AppRoute;