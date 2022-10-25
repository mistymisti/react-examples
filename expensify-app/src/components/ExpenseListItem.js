import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ( {dispatch, id, description, amount, createdAt} ) => (
      
        <div>
            <p>{ description }</p>
            <p>{ createdAt }</p>
            <p>{ amount }</p>
            <button onClick={ () => {
                console.log(id);
                dispatch(removeExpense({ id } ));
            }} >Remove</button>
        </div>
      
);

export default connect()(ExpenseListItem);