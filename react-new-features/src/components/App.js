// const App = (props) => {
//     const [count, setCount] = useState(props.count);
//     const [text, setText] = useState('');

//     useEffect(() => {
//       console.log('in use effect of App');
//       document.title = count;
//     })
    
//     const increment = () => {
//       setCount(count + 1);
//     }

//     const decrement = () => {
//       setCount(count - 1);
//     }

//     const reset = () => {
//       setCount(props.count);
//     }

//     const setTextState = (e) => {
//       setText(e.target.value);
//     }
    
//     return (
//         <div>
//           <p1>The count is {text || 'possible' } for {count}</p1>
//           <button onClick={increment}>+1</button>
//           <button onClick={decrement}>-1</button>
//           <button onClick={reset}>Reset</button>
//           <input type="text" value={text} onChange={setTextState} />
//         </div>
//     )
// };


// App.defaultProps = {
//   count: 10
// }
