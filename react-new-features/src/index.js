import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
//import reportWebVitals from './reportWebVitals';



// const App = (props) => {
//   const [count, setCount] = useState(props.count);
//   const [text, setText] = useState('');
  
//   const increment = () => {
//     setCount(count + 1);
//   }

//   const decrement = () => {
//     setCount(count - 1);
//   }

//   const reset = () => {
//     setCount(props.count);
//   }

//   const setTextState = (e) => {
//     setText(e.target.value);
//   }
  
//   return (
//     <div>
//       <p1>The count is {text || 'possible' } for {count}</p1>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>Reset</button>
//       <input type="text" value={text} onChange={setTextState} />
//     </div>
// //   )
  
// };

const NoteApp = () => {
    const notesData = JSON.parse(localStorage.getItem('notes'));
    const [notes, setNotes] = useState(notesData ||  [])
    const [title, setTitle] = useState('')
    const [area, setArea] = useState('')

    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes));
    })

    const submitCurrentForm = (e) => {
      e.preventDefault();
      setNotes([
        ...notes,
        {
          title,
          area
        }

      ])
      setTitle('')
      setArea('')
    }

    const setTitleText = (e) => {
      setTitle(e.target.value);
    }

    const setTextArea = (e) => {
      setArea(e.target.value);
    }

    const removeNote = (title) => {
      setNotes( notes.filter((note) => note.title !== title));    
    }

    return (
      <div>
        <h1>Note App</h1>
        {
          notes.map((note) => (
            <div key={note.title}>
              <h1> {note.title} </h1>
              <p>{note.area}</p>
              <button onClick={ () => removeNote(note.title) }>X</button>
            </div>
          ))
        } 
        <p>Add Note</p>
        <form onSubmit={submitCurrentForm}>
          <input value={title} onChange={setTitleText} />
          <textarea value={area} onChange={setTextArea} />
          <button>add note</button>
        </form>
      </div>
    )
}


// App.defaultProps = {
//   count: 10
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NoteApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
