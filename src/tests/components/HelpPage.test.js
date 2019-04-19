import React from 'react';
import { shallow } from 'enzyme';
import HelpPage from '../../components/HelpPage';

test('should load HelpPage correctly', () => {
    //Method for enzyme
    const wrapper = shallow(<HelpPage />);
    expect(wrapper).toMatchSnapshot();
    
});