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

store.subscribe(() => {
    console.log(store.getState());
});

const state = store.getState();


//store.dispatch(setTextFilter('bill'));
store.dispatch(addExpense( { description : 'Gas bill', note : 'Sample Note', amount: 100, createdAt: 2000} ));
store.dispatch(addExpense( { description : 'Water bill', note : 'Sample Note', amount: 200, createdAt: 1000} ));
store.dispatch(addExpense( { description : 'Rent', note : 'Sample Note', amount: 109500} ));


const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

