import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import HeaderPage from '../../components/HeaderPage';
import { shallow } from 'enzyme';

test('should test the header component', ()=> {
    const wrapper = shallow(<HeaderPage />);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
   // expect(wrapper.find('h1').text()).toBe('Expensify');
    // const reactShallowRender = new ReactShallowRenderer();
    // reactShallowRender.render(<HeaderPage />);
    // expect(reactShallowRender.getRenderOutput()).toMatchSnapshot();        
});