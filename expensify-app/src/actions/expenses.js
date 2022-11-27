import uuid from 'uuid';
import database from '../firebase/firebase';

//edit expense action generator
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//This is an addExpense generator used in dispatch method of store with some default values as given below
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = 'default',
            note = 'default',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        }); 
    };
};

//remove expense filter action generator for each type
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
});