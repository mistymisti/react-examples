export const notesReducer = (state, action) => {
    switch(action.type) {
        case 'POPULATE_NOTES':
          return action.notes;
          case 'ADD_NOTE':
            return state.concat(action.note);
        case 'REMOVE_NOTE':
            return [...state].filter(e => (e.title != action.note.title));
        default:
          return state;
    }
  }

  export default notesReducer;