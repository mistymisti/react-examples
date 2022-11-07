import moment from 'moment';
import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should run expenses reducer test', () => {
    const result = expenseReducer(undefined, '@@INIT');
    expect(result).toEqual([]);    
});

test('should run expenses reducer remove expense test', () => {
    const result = expenseReducer(undefined, { type : 'REMOVE_EXPENSE', id: expenses[1].id });
    expect(result).toEqual([...expenses[0], ...expenses[2]]);    
});

test('should run expenses reducer do not remove expense test', () => {
    const result = expenseReducer(undefined, { type : 'REMOVE_EXPENSE', id: '-1' });
    expect(result).toEqual([ ...expenses[0], ...expenses[1], ...expenses[2] ]);    
});

test('should run expenses reducer add expense test', () => {
    const expense = {
        description: 'test'
    };
    const result = expenseReducer(expenses, { type : 'ADD_EXPENSE', expense });
    expect(result).toEqual([...expenses, expense]);    
});

test('should run expenses with edit expense test', () => {
    const amount = 2000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const result = expenseReducer(expenses, action);
    expect(result[1].amount).toBe(amount);
});

test('should run expenses with an edit expense with no data', () => {
    const amount = 2000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            amount
        }
    };
    const result = expenseReducer(expenses, action);
    expect(result).toEqual([ ...expenses ]);
});