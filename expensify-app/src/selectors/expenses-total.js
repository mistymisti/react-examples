import moment from 'moment';

export const getTotalExpenses = (expenses) => {
    let total =  (expenses.length > 0) ? expenses.map(e => e.amount).reduce((a, b) => ( a + b )) : 0;
    console.log(total);
    return total;
};