import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from "../../components/ExpensesSummary"


//should read 'viewing 5 expenses totalling 165.00

test("should render count and total info correctly for multiple expenses", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={5} expensesTotal={165.00} />)
    expect(wrapper).toMatchSnapshot();
});

//should read 'viewing one expense totalling 15.00"

test("should render count and info correctly for a single expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={15.00} />)
    expect(wrapper).toMatchSnapshot();
});