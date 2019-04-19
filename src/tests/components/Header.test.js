import React from 'react';
import { shallow } from 'enzyme';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should load header correctly', () => {
    //Method for enzyme
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    
    
    //expect(wrapper.find('h1').text()).toBe('Expension');
    /*
    Method for react-test-renderer

    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot(); 
    */

});