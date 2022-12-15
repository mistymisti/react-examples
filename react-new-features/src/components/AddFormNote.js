import React, { useState, useContext } from 'react';
import NotesContext from '../contexts/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const AddFormNote = () => {
    const { notesDispatch } = useContext(NotesContext);
    const [title, setTitle] = useState('')
    const [area, setArea] = useState('')
    const position = useMousePosition();

    const setTitleText = (e) => {
        setTitle(e.target.value);
    }
  
    const setTextArea = (e) => {
        setArea(e.target.value);
    }

    const submitCurrentForm = (e) => {
        e.preventDefault();
        notesDispatch({
          type: 'ADD_NOTE',
          note: {
            title,
            area
          }
        });
        setTitle('')
        setArea('')
      }

    return (
        <>
            <p>Add Note { position.x } - { position.y }</p>
            <form onSubmit={ submitCurrentForm }>
                <input value={ title } onChange={ setTitleText } />
                <textarea value={ area } onChange={ setTextArea } />
                <button>add note</button>
            </form>
        </>
    )
}

export { AddFormNote as default }