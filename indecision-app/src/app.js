import React from 'react';
import ReactDOM from 'react-dom';
//import './styles/style.scss';

import IndecisionApp from './components/IndecisionApp';

// const LayOut = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {props.children}
//             <p>footer</p>
//         </div>
//     );
// };

// const template = (
//     <div>
//         <h1>This is a header</h1>
//         <p>header</p>
//     </div>
// );

// //ReactDOM.render(<LayOut content={template}/>, document.getElementById('app')); //access as props.content in the LayOut component

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//     }
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);

// class NewSyntax {
//     name = 'Mikey';
//     getGreeting = () => {
//         return `My name is ${this.name}`;
//     };
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());
