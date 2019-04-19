import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test('should load NotFoundPage correctly', () => {
    //Method for enzyme
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
    
});