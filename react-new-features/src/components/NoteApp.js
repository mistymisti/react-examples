import React, { useEffect, useReducer, useState } from 'react';
import Note from './Notes';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddFormNote from './AddFormNote';
import NotesContext from '../contexts/notes-context';

const NoteApp = () => {
    const [notes, notesDispatch] = useReducer(notesReducer, []);
    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'));
        console.log('do we have notes ', notes);
        if(notes) {
          notesDispatch({ type : 'POPULATE_NOTES', notes })
        }
    }, [])

    useEffect(() => {
      console.log('adding notes');
      localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes])
  
    return (
      <NotesContext.Provider value={{ notes, notesDispatch }}>
        <h1>Note App</h1>
        <NoteList />
        <AddFormNote />
      </NotesContext.Provider>
    )
}

export { NoteApp as default };