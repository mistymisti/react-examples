import React from 'react';

export default class Action extends React.Component {

    
    constructor(props) {
        console.log(props);
        super(props);
        this.handleClick = props.handleClick;   
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>What should I do ?</button>
            </div>
        )
    };
};