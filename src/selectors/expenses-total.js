export default (expenses) => {
    return expenses
    .map((expense) => expense.amount )
    .reduce((acc, exp) => acc + exp, 0 );
};