import React from 'react';

const EditExpensePage = (props) => ( 
    <div>
        This is an edit expense page with an param of {props.match.params.id}
    </div>
);

export default EditExpensePage;