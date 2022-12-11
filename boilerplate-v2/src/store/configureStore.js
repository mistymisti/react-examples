import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//create a store and combine the declared reducers to apply for each store dispatch activity
export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
