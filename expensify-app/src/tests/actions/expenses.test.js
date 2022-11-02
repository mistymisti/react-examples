import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should test the removeExpense method', () => {
    const result = removeExpense({ id : '1234abc' });
    console.log(result);
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
    const expenseData= {
        description: 'test description',
        note: 'test note',
        amount: 1000,
        createdAt: 1000
    };
    const result = addExpense(expenseData);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        } 
    });
});

test('should test the addExpense method with no data', () => {
    const expenseData= {
        description: 'default',
        note: 'default',
        amount: 0,
        createdAt: 0
    };
    const result = addExpense();
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        } 
    });
});
