import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouters'
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters'; 
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses'; 
//import './styles/style.scss';

const store = configureStore();
const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));

