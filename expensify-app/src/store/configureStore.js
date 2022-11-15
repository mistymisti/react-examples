import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenseReducers from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

//create a store and combine the declared reducers to apply for each store dispatch activity
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducers,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
