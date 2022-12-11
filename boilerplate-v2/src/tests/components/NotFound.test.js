import React from 'react';
import { shallow } from 'enzyme';
import { NotFoundPage } from '../../components/NotFoundPage';

test('should test the rendering of notfound page', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});