import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { HeaderPage } from '../../components/HeaderPage';
import { shallow } from 'enzyme';

test('should test the header component', () => {
    const wrapper = shallow(<HeaderPage startLogOut={ () => {} } />);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
    // const reactShallowRender = new ReactShallowRenderer();
    // reactShallowRender.render(<HeaderPage />);
    // expect(reactShallowRender.getRenderOutput()).toMatchSnapshot();        
});

//Header test file -> Should call startLogin on button click
test('should call startLogout on button click', () => {
    const startLogOut = jest.fn();
    const wrapper = shallow(<HeaderPage startLogOut={ startLogOut } />);
    wrapper.find('button').simulate('click');
    expect(startLogOut).toHaveBeenCalled();
});

