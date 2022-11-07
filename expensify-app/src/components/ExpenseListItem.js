import React from 'react';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => ( 
        <div>
            <Link to={`/edit/${id}`}><h1>{ description }</h1></Link>
            <p>{ amount }</p>
            <p>{ createdAt }</p>
        </div>
);
export default ExpenseListItem;