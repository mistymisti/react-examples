import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should test the ExpenseForm page', () => {
    const wrapper = shallow<(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot(); 
});

test('should test the ExpenseForm page with expense data', () => {
    const wrapper = shallow<(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot(); 
});

test('should render snapshot for the expense form', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should render snapshot for the expenseform on submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'test description';
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should test note on textarea change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'test note';
    wrapper.find('textarea').simulate('change', {
        target: {value}
    });
    expect(wrapper.state('notes')).toBe(value);
});

test('should test amount on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '12.20';
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should test amount on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '12.201';
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit method form valid one submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={ expenses[0] } onSubmit={ onSubmitSpy }/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        notes: expenses[0].note,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt
    });
});

test('should call the onDateChange of the form submission', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendarFocused on input form', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: true });
    expect(wrapper.state('calendarFocused')).toEqual( true );
});
