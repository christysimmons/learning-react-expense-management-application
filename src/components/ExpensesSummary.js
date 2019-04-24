import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from "../selectors/expenses-total";

/*
---First shot---

const ExpensesSummary = (props) => (
            <div>
            <p> 
                Viewing&nbsp;
                {props.expenses.length} 
                {(props.expenses.length === 1 ) ? " expense " : " expenses " }
                totaling&nbsp;
                {numeral(getExpensesTotal(props.expenses) / 100 ).format('$0,0.00')}.
            </p>
            </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};*/

//Second shot

export const ExpensesSummary = ({ expensesTotal, expenseCount }) => {
    const formatExpenseTotal = numeral(expensesTotal / 100 ).format('$0,0.00')
    return (
        <div>
        <h3>
        Viewing {expenseCount} {(expenseCount === 1 ) ? "expense" : "expenses" } totalling {formatExpenseTotal}.
        </h3>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    }

}

export default connect(mapStateToProps)(ExpensesSummary);