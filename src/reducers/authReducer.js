
/* Cuando este autenticado
    {
        uid: 'jajkndxsdfsj12',  //luego MERN
        name: 'Claudia'
    }   
    y vacio cuando no
*/

import { types } from "../types/types";

export const authReducer = ( state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.logout:
            return {}

        default:
            return state;
    }
}
