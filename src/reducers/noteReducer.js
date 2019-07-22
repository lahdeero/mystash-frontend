import noteService from '../services/NoteService.js'

const noteReducer = (store = [], action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...store.slice(0, store.length)]
    case 'MODIFY':
      return store.map(note => (note.id === action.data.id) ? action.data : note)
    case 'REMOVE':
      return store.filter(note => note.id !== action.data)
    case 'INIT_NOTES':
      return action.data
    case 'CLEAR':
      return []
    default:
      return store
  }
}

export const noteInitialization = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes
    })
  }
}

export const clearNotes = () => {
  return async (dispatch) => {
    dispatch({
      type: 'CLEAR',
      data: []
    })
  }
}

export const createNote = (noteObject) => {
  return async (dispatch) => {
    const savedNoteObject = await noteService.create(noteObject)
    const returnedNoteObject = await noteService.getOne(savedNoteObject.id)
    dispatch({
      type: 'CREATE',
      data: returnedNoteObject
    })
    return returnedNoteObject
  }
}

export const modifyNote = (noteObject) => {
  return async (dispatch) => {
    await noteService.modify(noteObject)
    const modifiedNoteObject = await noteService.getOne(noteObject.id)
    await dispatch({
      type: 'MODIFY',
      data: modifiedNoteObject
    })
  }
}

export const removeNote = (id) => {
  return async (dispatch) => {
    const delId = await noteService.erase(id)
    dispatch({
      type: 'REMOVE',
      data: delId
    })
    return delId
  }
}

export default noteReducer
