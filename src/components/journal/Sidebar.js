import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startlogout } from '../../actions/auth';
import { JournalEntries } from './JouernalEntries';
import { startNewNote } from '../../actions/notes'

export const Sidebar = () => {

    const dispatch = useDispatch();

    const { name } = useSelector( state => state.auth );

    const handleLogout = () => {
        dispatch(startlogout());
    }

    const handleAddNew = () => {
        dispatch( startNewNote() );
    }

    return (
        <aside className='journal__sidebar'>
            
            <div className='journal__sidebar-navbar'>
                <h3 className='mt-5' >
                    <i className='far fa-moon' ></i>
                    <span> { name }</span>
                </h3>

                <button 
                    className='btn'
                    onClick={handleLogout}
                >
                    Salir
                </button>
            </div>

            <div 
                className='journal__new-entry'
                onClick={handleAddNew}
            >
                <i className='far fa-calendar-plus fa-5x'></i>
                <p className='mt-5' >Nueva publicación</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
