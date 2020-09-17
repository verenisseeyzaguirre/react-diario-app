import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

import moment from 'moment';
import 'moment/locale/es';

export const NotesAppBar = () => {

    const date = new Date().getTime();
    const noteDate = moment(date);

    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes );

    const handleSave = () => {
        dispatch( startSaveNote(active) )
    }

    const handlePicture = () => {
        //simular clic en seleccionar archivo q esta en display none
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if(file) {
            dispatch( startUploading(file) );
        }
    }

    return (
        <div className='notes__appbar'>
            <span>{noteDate.format('D MMMM YYYY')}</span>

            <input
                id='fileSelector'
                type="file"
                style= { {display:'none'} }
                onChange={ handleFileChange }
            />

            <div>
                <button
                    className='btn'
                    onClick={ handlePicture }
                >
                    Picture
                </button>

                <button
                    className='btn'
                    onClick= {handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
