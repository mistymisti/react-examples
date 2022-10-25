import React from 'react';

export default class AddOption extends React.Component {

    submitForm = (e) => {
        e.preventDefault();
    
        const option = e.target.elements.option.value.trim();
        if(option) {
            alert(option);
            //options.push(option);
            //e.target.elements.option.value = '';
            //this.render();
        }
    }

    render() {
        return (
        <div>
             <form onSubmit={this.submitForm}>
                <input type="text" name = "option" />
                <button id="submit">Add Option</button>
            </form>
        </div>
        );
    }
}