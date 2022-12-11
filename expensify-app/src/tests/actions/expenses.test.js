import database from '../../firebase/firebase';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses, startRemoveExpenses, startEditExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import { resolvePlugin } from 'babel-core';

const createMockStore = configureMockStore([thunk]);
const uid = 'thisismyuid';
const defaultAuthState = { auth: { uid } };

beforeEach((done) => {
    const expenseData = [];
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expenseData[id] = { description, note, amount, createdAt };  
    });
    database.ref('expenses').set(expenseData).then(() => done());
});

test('should test the removeExpense method', () => {
    const result = removeExpense({ id : '1234abc' });
    console.log(result);
    console.log('test check !!!');
    expect(result).toEqual({
        expense: {
            id: '1234abc',
        },
        type: 'REMOVE_EXPENSE'
    });
});

test('should test the editExpense method', () => {
    const result = editExpense({ id : '1234abc' }, { description: 'test', note: 'test note' });
    console.log(result);
    expect(result).toEqual({
        'id' : {
            id: '1234abc',
        },
        'updates': {
            description: 'test', 
            note: 'test note'
        },
        type: 'EDIT_EXPENSE'
    });
});

test('should test the addExpense method', () => {
    const result = addExpense(expenses[2]);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should test the addExpense method with no data', () => {
    const result = addExpense();
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: undefined
    });
});

test('should test adding expense to firebase database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };
    //dispatch action with startAddExpense
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });    
       return database.ref(`expenses/${ actions[0].expense.id }`).once('value')
       .then((snapshot) => {
            console.log(snapshot.val());
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
        
    }).then((str) => {
        console.log('expected output :!: ',str);
    });
});

test('should test adding default expense to firebase database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'default',
        note: 'default',
        amount: 0,
        createdAt: 0
    };
    //dispatch action with startAddExpense
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });    
       return database.ref(`users/${ uid }/expenses/${ actions[0].expense.id }`).once('value')
       .then((snapshot) => {
            console.log('test :: !', snapshot.val());
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
    }).then((str) => {
        console.log('expected output :!: ',str);
    });
});

test('should setup set expenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch firebase data and test it', (done) => {
    const store = createMockStore(defaultAuthState);
    console.log('testing !!!');
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
    });
    done();
});

test('should remove expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    console.log('testing !!!!');
    const id = expenses[1].id;
    store.dispatch(startRemoveExpenses({ id })).then(() => {
        const actions = store.getActions();
        console.log('id deleted :: ', id);
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            expense: {
                id
            }
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    }).catch((e) => {
        console.log("Error in removing expense");
        console.log(e);
    });
});

test('should edit expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    console.log('testing editExpenses !!!!!');
    const id = expenses[0].id;
    const updates = { amount : 21500 };
    
    //dispatch action with startEditExpenses
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: expect.any(String),
            updates
        });    
        return database.ref(`users/${ uid }/expenses/${ id }`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount);
    });
    done();
});
