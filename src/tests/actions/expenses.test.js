import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should set up removeExpense action object', () => {
    const action = removeExpense({ id: 'testID'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'testID'
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

test('should set up addExpense action object with user-provided values', () => {
    const actionData = {
        description: 'Vobar', 
        note: 'nice note', 
        amount: 22000,
        createdAt: 590292
    };
    const action = addExpense(actionData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...actionData,
            id: expect.any(String)
        }
    });
});

test('should set up addExpense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            note: '', 
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});