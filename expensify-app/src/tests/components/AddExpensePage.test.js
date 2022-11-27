import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;
beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense = { startAddExpense } history={ history} />);   
});

test('should test the add expense page', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should test the add expense page with onSubmit handler', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]); 
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});