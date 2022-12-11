import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouters'
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters'; 
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth'; 
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

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
