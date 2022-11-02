import { createStore, combineReducers } from 'redux';
import expenseReducers from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

//create a store and combine the declared reducers to apply for each store dispatch activity
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducers,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
