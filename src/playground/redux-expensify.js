import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Add Expense
const addExpense = (
    {
        description = '', 
        note='', 
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount, 
        createdAt
    }
}); 

//Edit Expense

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE', 
    id, 
    updates
}) 
//Delete Expense

const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Filter Actions

//Set text filter

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
//sort by date

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
//sort by amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
//set start date

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
//set end date
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
//Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.concat(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, 
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            }
            )
        default:
            return state;
    }
};

//Filters reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        };
        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        };
        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy: 'amount'
        };
        case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate
        };
        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate
        };
        default:
            return state;
    }
};

//Get Visible Expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
};

//Sort Expenses



//Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }),
);


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseTwo = store.dispatch(addExpense({description: 'Rent', amount: 20000}));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 300 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
store.dispatch(setStartDate(128));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));



const demoState = {
    expenses: [{
        id: 'sd3f',
        description: 'March solar',
        note: 'I\'m fancy',
        amount: 30300, 
        createdAt: 0
    }], 
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};