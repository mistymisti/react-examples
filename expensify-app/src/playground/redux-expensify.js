import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const expenseReducerDefaultState = [];

//edit expense action generator
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


//This is an addExpense generator used in dispatch method of store with some default values as given below
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//remove expense filter action generator for each type
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
});


//set Text Filter action generator for each type
const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
});

//sortBydate action generator
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const setStartDate = (startDate = '') => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate = '') => ({
    type: 'SET_END_DATE',
    endDate
});


// Expense reducer which runs when a dispatch event is triggered by store
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return state.concat(action.expense);
        case 'REMOVE_EXPENSE':
            return [...state].filter(e => (e.id != action.expense.id));
            case 'EDIT_EXPENSE':
                return state.map(expense => {
                    if(action.id == expense.id)    
                        return {
                            ...expense,
                            ...action.updates   
                        };
                    else 
                        return expense;

                });
        default: 
            return state;
    };        
};

//filter reducer with definitions to each action Type
const filtersReducerDefaultState = [{ text : '', sortBy: 'date', startDate: undefined, endDate: undefined }];
// Filter reducer runs when a dispatch event is triggered by store
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            console.log("ActionText :: "+action.text);
            console.log("State Text :: "+state.text);
            return {
                ...state,
                text: action.text
            };
            case 'SORT_BY_DATE':
                return {
                    ...state,
                    sortBy: 'date'   
                };
            case 'SORT_BY_AMOUNT':
                console.log('sortbyamount called !!');
                return {
                    ...state,
                    sortBy: 'amount'   
                };
            case 'SET_START_DATE':
                return {
                    ...state,
                    startDate: action.startDate ? action.startDate : undefined
                };
            case 'SET_END_DATE':
                return {
                    ...state,
                    endDate: action.endDate ? action.endDate : undefined
                };
            default : 
                return state;
    };        
};


//create a store and combine the declared reducers to apply for each store dispatch activity
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
       // console.log(expense);
       // console.log(text);  
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.endDate <= endDate;
        const textMatch = text && expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        console.log(sortBy);
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

//subscribe to a store for any dispatch event log
store.subscribe(() => {
    //console.log(store.getState());
    const state = store.getState();
    getVisibleExpenses(state.expenses, state.filters);
});

//dispatch addExpense generator with a single object entry
//store.dispatch(setTextFilter('rent'));
const expenseOne = store.dispatch(addExpense( { description : 'Hellow rent', note : 'Sample Note', amount: 100, createdAt: 'ddd'} ));
const expenseTwo = store.dispatch(addExpense( { description : 'Coffee', note : 'Coffee', amount: 300, createdAt: 'ddd'} ));
store.dispatch(sortByAmount());
console.log(store.getState());
//store.dispatch(removeExpense({ id: expenseOne.expense.id}));

//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 } ));

//store.dispatch(setTextFilter(''));

//const expenseThree = store.dispatch(addExpense( { description : 'New', note : 'New', amount: 200, createdAt: 'hello'} ));

//store.dispatch(sortByDate());


//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));

//default state of the expenses and filters reducer values
const demoState = {
    expenses : [{
        id: 'paodkejajekj',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters : {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};


//example to show object spreading with an installed plugin
const user = {
    name: 'Jen',
    age: 24
};

console.log({
    ...user,
    location: 'Philadelphia'
});
