import selectExpense from '../../selectors/expenses';
import moment from 'moment';

const expenses = [{
    id : '1',
    description: 'Gum',
    amount: 0,
    note: '',
    createdAt: 0
}, {
    id : '2',
    description: 'Rent',
    amount: 1000,
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id : '3',
    description: 'Cred',
    amount: 109500,
    note: '',
    description: 'test default',
    createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should test the select expenses method', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should test the select expenses method filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should test the select expenses method filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should test the select expenses method filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).subtract(5, 'days'),
        endDate: moment(0).subtract(1, 'days')
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[1]]);
});

test('should test the select expenses method sortBy date without filter', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});

test('should test the select expenses method sortBy amount without filter', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[1],expenses[0]]);
});

console.log('end test end');