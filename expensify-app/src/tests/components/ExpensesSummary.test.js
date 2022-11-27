import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should test the expensesummary case with expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={ expenses } />);
    expect(wrapper).toMatchSnapshot();
});

test('should test the expenses summary case with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});