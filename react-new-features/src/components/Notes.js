import React, { useContext } from 'react';
import NotesContext from '../contexts/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({ note }) => {
   const { notesDispatch } = useContext(NotesContext);
   const position = useMousePosition();
    return (
      <div key={note.title}>
            <h1> {note.title} </h1>
            <p>{note.area}</p>
            <p>{ position.x } , { position.y }</p>
            <button onClick={ () => notesDispatch({ type: 'REMOVE_NOTE', note : { title: note.title } }) }>X</button>
          </div>
    )
}

export { Note as default };