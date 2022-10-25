// Expense reducer which runs when a dispatch event is triggered by store

const expenseReducerDefaultState = [];
export default (state = expenseReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return state.concat(action.expense);
        case 'REMOVE_EXPENSE':
            return [...state].filter(e => (e.id != action.expense.id));
            case 'EDIT_EXPENSE':
                return state.map(expense => {
                    if(action.id == expense.id)    
                        return {
                            ...expense,
                            ...action.updates   
                        };
                    else 
                        return expense;

                });
        default: 
            return state;
    };        
};