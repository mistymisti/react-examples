import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

const title = 'Indecision App';
const subtitle = 'Put your life in the hands of a computer';
const options = ["Thing one", "Thing two", "Thing four"];



export default class IndecisionApp extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            selectedOption: undefined
        };
    }

    handleClose = () => {
        console.log('handleClose called !!');
        this.setState((prevState) => {
            console.log(prevState);
            return {
                selectedOption : undefined
            };
        });
    };

    handleClick = () => {
        console.log('hi');
        alert('hi');
        this.setState((prevState) => {
            console.log(prevState);
            return {
                selectedOption : !!prevState
            };
        });
    }
    
    

    render() {
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action handleClick={this.handleClick}/>
                <Options options={options}/>
                <AddOption />
                <OptionModal handleClose={this.handleClose} selected={this.state.selectedOption} />
            </div>
        );
    }
}