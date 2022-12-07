import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpenses } from '../actions/expenses';

export class EditExpensePage extends React.Component {
        onSubmit = (expense) => {
            console.log(expense);
            this.props.startEditExpense(this.props.expense.id, expense);
            this.props.history.push('/');
        };

        onClick = () => {
            this.props.startRemoveExpenses({ id : this.props.expense.id });
            this.props.history.push('/');
        };

        render() {
            return (
                <div>
                    <ExpenseForm 
                        expense = { this.props.expense }
                        onSubmit = { this.onSubmit }
                    />
                    <button onClick={ this.onClick } >Remove</button>
                </div>
            );
        };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditExpense : (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpenses : (data) => dispatch(startRemoveExpenses( data  ))
    }
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);