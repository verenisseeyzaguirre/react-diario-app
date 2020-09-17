import { db } from "../firebase/firebase-config"

export const loadNotes = async(uid) => {

    const notesSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];

    //para obtener arreglo de notes de FB
    notesSnap.forEach( snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    //console.log(notes);
    return notes;
}


