import { createStore } from 'redux';

const countReducer = ((state = {count : 1}, action) => {
    //console.log(action.type);
    //console.log('running !!');
   // var incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
   const incrementBy = action.incrementBy; 
   const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        default: 
            return state;
    }
});

const store = createStore(countReducer);

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());    
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch(incrementCount({incrementBy : 5}));
store.dispatch(incrementCount({incrementBy : 5}));

store.dispatch(resetCount());

store.dispatch(setCount({count : 10}));

//unsubscribe();

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 5
});

//console.log('hello redux after !!');
//console.log(store.getState());