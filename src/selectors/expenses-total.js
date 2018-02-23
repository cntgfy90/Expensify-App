export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((res, curr) => res + curr, 0);
};