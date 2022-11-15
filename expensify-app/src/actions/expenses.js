import uuid from 'uuid';

//edit expense action generator
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//This is an addExpense generator used in dispatch method of store with some default values as given below
export const addExpense = ({
    description = 'default',
    note = 'default',
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

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = 'default',
            note = 'default',
            amount = 0,
            createdAt = 0
        } = expenseData;
    };
};

//remove expense filter action generator for each type
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
});