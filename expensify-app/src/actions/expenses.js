import database from '../firebase/firebase';

//edit expense action generator
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        }); 
    };
};

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

// remove expense filter action generator for each type
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
});

export const startRemoveExpenses = ({ id } = {}) => {
    return(dispatch) => {
        return database.ref(`expenses/${ id }`).remove()
            .then(() => {
                dispatch(removeExpense({ id }));
            });
    }
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses')
        .once('value', (snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapShot) => {
                    const expense = {
                        id: childSnapShot.key,
                        ...childSnapShot.val()
                    };
                    expenses.push(expense);
            });
            console.log('total expenses fetched :: ', expenses);
            dispatch(setExpenses(expenses));
        })
        .then(() => {
            console.log('In then clause');
        }).catch((e) => {
            console.log('error :: ', e);
        });
    };
};