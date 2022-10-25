class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.renderPlusOne = this.renderPlusOne.bind(this);
        this.renderMinusOne = this.renderMinusOne.bind(this);
        this.renderReset = this.renderReset.bind(this);
        this.state = {
            'count' : 0
        };
    }
    
    renderPlusOne() {
        console.log('plusone');
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            };
        });
    }

    renderMinusOne() {
        console.log('minusone');
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            };
        });
    }

    renderReset() {
        console.log('reset');
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.renderPlusOne}>+1</button>
                <button onClick={this.renderMinusOne}>-1</button>
                <button onClick={this.renderReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
// let count = 0;

// const addOne = () => {
//     count++;
//     renderDOMJS();
// };

// const minusOne = () => {
//     count--;
//     renderDOMJS();
// };

// const reset =() => {
//     count = 0;
//     renderDOMJS();
// };

// const appDiv = document.getElementById('app');


// const renderDOMJS = () => {
//     const templateTwo =(
//         <div>
//            <h1>Count : {count}</h1>
//            <button id='addone' onClick = {addOne}>+1</button>
//            <button id='minusone' onClick = {minusOne}>-1</button>
//            <button id='reset' onClick = {reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appDiv);
// };
// renderDOMJS();