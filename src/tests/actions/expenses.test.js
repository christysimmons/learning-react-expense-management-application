import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    startAddExpense,
    addExpense,
    startEditExpense,
    editExpense,
    startRemoveExpense,
    removeExpense,
    setExpenses,
    startSetExpenses
    } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import db from '../../firebase/firebase'
import { database } from 'firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt}) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    db.ref('expenses').set(expensesData).then(() => done());
});

test('should set up removeExpense action object', () => {
    const action = removeExpense({ id: 'testID'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'testID'
    });
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id; //3
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id
        });
        return db.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect (snapshot.val()).toBeFalsy();
        done();
    });
});

test('should set up editExpense action object', () => {
    const action = editExpense('testID', {description: "someDescription"});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'testID',
        updates: {
            description: "someDescription"
        }
    });
});

test("should edit expense on firebase", (done) => {
    const store = createMockStore({});
    const id = expenses[2].id; //3
    store.dispatch(startEditExpense(id, {amount: 9500})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id,
            updates: {
                amount: 9500
            }
        });
        return db.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(9500);
        done();
    })
})

test('should set up addExpense action object with user-provided values', () => {
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'elephant',
        amount: 3555500,
        note: 'Franc is my friend',
        createdAt: 1155955155
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
    return db.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
        });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefault = {            
        description: '',
        amount: 0,
        note: "",
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseDefault
        }
    });

    return db.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
        });
});


test('should set up set expenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});