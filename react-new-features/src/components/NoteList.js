import React, { useContext } from 'react'; 
import Note from './Notes';
import NotesContext from '../contexts/notes-context';

const NoteList = () => {
    const { notes } = useContext(NotesContext);
    return notes.map((note) => (
        <Note key={ note.title } note={ note } />
    ))
}
export { NoteList as default }