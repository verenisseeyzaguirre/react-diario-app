//funciones
import Swal from 'sweetalert2';

import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types";
import { noteLogout } from './notes';
import { finishLoading, startLoading } from './ui';

//una accion que dispara otra accion cuando se resuelva la tarea asincrona
export const startLoginEmailPassword = ( email, password ) => {
    return (dispatch) => {
        
        dispatch( startLoading() )
        // setTimeout( () => {
        //     dispatch( login(123456, 'Vere') );
        // }, 3500 );
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({user}) => {
                dispatch(
                    login( user.uid , user.displayName )
                )
                dispatch( finishLoading () )
            }).catch( e => {
                console.log(e);
                dispatch( finishLoading ());
                Swal.fire('Error', e.message, 'error')
            })


    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({user}) => {

                await user.updateProfile({ displayName: name });
                //console.log(user);
                dispatch(
                    login( user.uid , user.displayName )
                )
            }).catch( e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error')
            })


    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({user}) => {
                    dispatch(
                        login( user.uid , user.displayName )
                    )
                })
    }
}

export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName
    }
});

export const startlogout = () => {
    return async(dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());
        dispatch(noteLogout());
    }
}

export const logout = () => ({
    type: types.logout
})