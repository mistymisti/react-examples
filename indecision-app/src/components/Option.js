import React from 'react';

const Option = (props) => (
        <div>
            <ol>
            {props.options.map(e => <li key = {e}>{e}</li>)}
            </ol>
        </div>
);
export default Option;
