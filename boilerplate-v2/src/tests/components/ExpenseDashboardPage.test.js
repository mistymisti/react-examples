import React from 'react';
import { shallow } from 'enzyme';
import { ExpensifyDashboardPage } from '../../components/ExpensifyDashboardPage';

test('should test the rendering of expensifydashboard page', () => {
    const wrapper = shallow(<ExpensifyDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});