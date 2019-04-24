import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

//should return total amount from a list of expenses

test('should return total amount from a list of expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(16500);
}); 

//should return single amount from a single expense

test('should return single amount from a single expense', () => {
    const singleExpense = [{
        id: '07',
        description: 'Marco',
        note: 'Polo',
        amount: 1000,
        createdAt: 0
    }];
    const result = getExpensesTotal(singleExpense);
    expect(result).toBe(1000);
});

//should return 0 from an empty array

test('should return 0 from an empty array', () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});