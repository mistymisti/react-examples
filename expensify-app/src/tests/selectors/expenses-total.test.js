import selectExpense, { getTotalExpenses } from '../../selectors/expenses-total';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should test the expenses method', () => {
    const total = getTotalExpenses(expenses);
    expect(total).toBe(110500);
});

test('should return zero if no expenses', () => {
    const total = getTotalExpenses([]);
    expect(total).toBe(0);
});

test('should test a single expense', () => {
    const total = getTotalExpenses([expenses[1]]);
    expect(total).toBe(expenses[1].amount);
});