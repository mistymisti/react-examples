export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
       // console.log(expense);
       // console.log(text);  
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.endDate <= endDate;
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