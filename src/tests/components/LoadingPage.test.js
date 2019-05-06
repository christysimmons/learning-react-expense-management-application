import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

test('should load header correctly', () => {
    //Method for enzyme
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});