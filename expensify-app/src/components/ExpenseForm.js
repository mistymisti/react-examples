import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        notes: '',
        amount: ''
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    };
    onNotesChange = (e) => {
        const notes = e.target.value;
        this.setState(() => ({ notes }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ( { amount } ));
        }
        
    };
    render() {
        return (
            <div>
                <h1>This is default element</h1>
                <form>
                    <input type="text" value= { this.state.description } placeholder="Description" autoFocus onChange = { this.onDescriptionChange } />
                    <input type="text" value = { this.state.amount } placeholder="Amount" onChange = { this.onAmountChange } />
                    <textarea placeholder="Add for any additional notes" value = { this.state.notes } onChange = { this.onNotesChange }></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

// const ExpenseForm = () => (
//     <div>
//         This is defuatl elemento
//     </div>
// );

// export default ExpenseForm;