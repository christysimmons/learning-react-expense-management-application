import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should load LoginPage correctly', () => {
    //Method for enzyme
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
    
});

test('should have logged in on click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});