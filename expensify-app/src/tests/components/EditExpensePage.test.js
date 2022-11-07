import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, history, wrapper, removeExpense;
beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage 
                            expense = { expenses[1] } 
                            editExpense = { editExpense } 
                            removeExpense = { removeExpense } 
                            history = { history } 
                    />);   
});

test('should check the snapshot of the editexpense page', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should test the onSubmit handler that is being called for editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]); 
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should test the onClick handler are being called for removeExpense', () => {
    wrapper.find('button').simulate('click'); 
    expect(removeExpense).toHaveBeenLastCalledWith( { id : expenses[1].id } );
    expect(history.push).toHaveBeenLastCalledWith('/');
});
