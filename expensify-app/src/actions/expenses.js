import database from '../firebase/firebase';

//edit expense action generator
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        console.log('while edit :: ', uid);
        return database.ref(`users/${ uid }/expenses/${ id }`).update(updates).then(() => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        console.log('during add ', uid);
        const {
            description = 'default',
            note = 'default',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        return database.ref(`users/${ uid }/expenses`).push(expense).then((ref) => {
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
    return(dispatch, getState) => {
        const uid = getState().auth.uid;
        console.log('while removing :: ', uid);
        return database.ref(`users/${ uid }/expenses/${ id }`).remove()
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        console.log('state variable while get :: ', getState());
        console.log('uid for get ', uid);
        return database.ref(`users/${ uid }/expenses`)
        .once('value').then((snapshot) => {
            const expenses = [];
            console.log('snapshot fetched :: ', snapshot);
            snapshot.forEach((childSnapShot) => {
                    expenses.push({
                        id: childSnapShot.key,
                        ...childSnapShot.val()
                    });
                    console.log("childsnapshot :: ", childSnapShot.val());
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