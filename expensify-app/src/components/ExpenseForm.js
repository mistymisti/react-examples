import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css'

//const date = new Date();

//const now = moment();

//console.log(now.format());

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            notes: props.expense ? props.expense.note: '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
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
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ( { amount } ));
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ( { focused } ) => {
        this.setState(() => ( { calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        console.log("submit event called !!");
        if(!this.state.amount || !this.state.description) {
            this.setState(() => ({ error: 'Please enter a valid amount or description'}));
        } else {
            this.setState(() => ( { error : ''}));
            this.props.onSubmit({
                description: this.state.description,
                notes: this.state.notes,
                createdAt: this.state.createdAt.valueOf(),
                amount: parseFloat(this.state.amount, 10) * 100
            });
        }
    };

    render() {
        return (
            <div>
                <span>{ this.state.error }</span>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value= { this.state.description } placeholder="Description" autoFocus onChange = { this.onDescriptionChange } />
                    <input type="text" value = { this.state.amount } placeholder="Amount" onChange = { this.onAmountChange } />
                    <SingleDatePicker 
                    date = { this.state.createdAt }
                    onDateChange = { this.onDateChange }
                    focused = { this.state.calendarFocused }
                    onFocusChange = { this.onFocusChange }
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                    />
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