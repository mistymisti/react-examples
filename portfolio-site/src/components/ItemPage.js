import React from 'react';

const ItemPage = (props) => (
    <div>
        <h1>Portfolio Item</h1>
        This is an item page
            <span>This is the property with value {props.match.params.id} </span>
    </div>
);

export default ItemPage;