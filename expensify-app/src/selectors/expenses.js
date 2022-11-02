import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? moment(startDate).isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? moment(endDate).isSameOrBefore(createdAtMoment) : true;
        const textMatch = !text || (text && expense.description.toLowerCase().includes(text.toLowerCase()));
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        console.log(sortBy);
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};