import Swal from 'sweetalert2';

import {db} from '../firebase/firebase-config';
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

//react-journal

export const startNewNote = () => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;
        //console.log(uid);

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        //docRef
        //en fb reglas allow read, write: if true
        //allow read, write: if request.auth != null;
        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
        console.log(doc);

        dispatch(activeNote(doc.id, newNote));
        dispatch(addNewnote(doc.id, newNote));

    }
}

export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const addNewnote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id,
        ...note
    }
});

export const startLoadinNotes = ( uid ) => {
    return async(dispatch) => {

        const notes = await loadNotes( uid );
        dispatch( setNotes(notes) )
    }
}

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = (note) => {
    return async(dispatch, getState) => {

        //uid del usuario
        const { uid } = getState().auth;

        if( !note.url ) {
            delete note.url;
        }

        const noteToFirestore = {...note}; //es un clone de note
        delete noteToFirestore.id; //borrando el id para q no se grabe en la actualizacion

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        dispatch( refreshNote( note.id , noteToFirestore ) );
        Swal.fire('Guardado', note.title, 'success');
    }
}

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
})

export const startUploading = (file ) => {
    return async(dispatch, getState) => {

        const { active: activeNote} = getState().notes;

        Swal.fire({
            title: 'Subiendo imagen',
            text: 'Por favor espere...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        })
        
        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;
        dispatch(startSaveNote(activeNote));

        //console.log(fileUrl);
        Swal.close();
        
    }
}

export const startDeleting = (id) => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;

        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch( deleteNote(id) );
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
});

export const noteLogout = () => ({
    type: types.notesLogoutCleaning,
});