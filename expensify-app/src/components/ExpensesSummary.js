import React from 'react';
import { connect } from 'react-redux';
import selectedExpenses from "../selectors/expenses";
import { getTotalExpenses } from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div>
        {
            <p>Viewing { props.expenses.length } expenses totalling { getTotalExpenses(props.expenses) } </p>
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : selectedExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);