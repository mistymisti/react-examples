import Option from './Option';
import React from 'react';

export default class Options extends React.Component {
    handleRemoveAll = () => {
        alert(this.props.options+ ":: is option");
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <Option options={this.props.options}/>
            </div>
        );
    }
}