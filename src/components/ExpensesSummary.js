import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <div className="page-header">
            <div className="content-container">  
                <h2 className="page-header__title">
                Viewing <span>{expenseCount}</span> {(expenseCount === 1 ) ? "expense" : "expenses" } totalling <span>{formatExpenseTotal}</span>.
                </h2>
                <div className="page-header__actions">
                <Link to="/create" className="button">Add a new expense </Link> 
                </div>
            </div>
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