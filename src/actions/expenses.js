import uuid from 'uuid';
import db from '../firebase/firebase'

//No database action workflow

//component calls action generator
//action generator returns ---(expense) object---
//component dispatches object to store
//redux store updates with new object information

//Now with database action workflow

//component calls action generator
//action generator returns ---function---
//component dispatches (?) function ---middleware---
//function runs, updating store, adding to db, other actions as warranted


//Add Expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
}); 

//Add Expense database call

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { 
            description = '', 
            note='', 
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt }; 
        
        return db.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        })
    };
};

//Edit Expense

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE', 
    id, 
    updates
});

//set_expenses from database to redux store

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES', 
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return db.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
};


//Delete Expense

export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id }) => {
    return (dispatch) => {
        return db.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    }
};