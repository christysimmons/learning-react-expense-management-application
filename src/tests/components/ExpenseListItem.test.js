import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem from array item', () => {
    const wrapper = shallow(<ExpenseListItem key={expenses[2].id} {...expenses[2]} />);
    expect(wrapper).toMatchSnapshot()
});