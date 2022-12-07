import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouters'
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters'; 
import { startSetExpenses } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses'; 
//import './styles/style.scss';
import './firebase/firebase';
import './playground/promises';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading ... </p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        console.log('log in');
    } else {
        console.log('log out');
    }
});
