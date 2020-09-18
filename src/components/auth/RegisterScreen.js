import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator'

import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );
    //console.log(msgError);

    const [ formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(name, email, password, password2);
        
        if(isFormValid() ) {
            console.log('valido');
            dispatch( startRegisterWithEmailPasswordName( email, password, name ) )
        }
    }
    
    const isFormValid = () => {

        if( name.trim().length === 0 ) {
            console.log('nombre es requerido');
            dispatch( setError('nombre es requerido'));
            return false;
        } else if( !validator.isEmail(email) ) {
            console.log('email no es valido');
            dispatch( setError('email no es valido'));
            return false;
        } else if( password !== password2 || password.length <5 ) {
            console.log('password deberia tener al menos 6 caracter y coincidir ');
            dispatch( setError('password deberia tener al menos 6 caracter y coincidir '));
            return false;
        }
        dispatch( removeError());

        return true;
    }

    return (
        <>
            <h3 className='auth_tittle' >Registrar</h3>

            <form 
                onSubmit={handleRegister}
                className='animate__animated animate__fadeIn animate__faster'
            >

                {
                    msgError&&
                    (
                        <div className='auth__alert-error' >
                        {msgError}
                        </div>
                    )
                    
                }

                <input
                    type="text"
                    placeholder='Nombre'
                    autoComplete='off'
                    name="name"
                    className='auth_input'
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder='Correo'
                    autoComplete='off'
                    name="email"
                    className='auth_input'
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder='Contraseña'
                    name="password"
                    className='auth_input'
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder='Confirmar contraseña'
                    name="password2"
                    className='auth_input'
                    value={password2}
                    onChange={handleInputChange}
                />

                <button
                    className='btn btn-primary btn-block mb-5'
                    type='submit'
                >
                    Regístrate
                </button>

                <Link
                    to='/auth/login'
                    className='link'
                >
                    Ya estás registrado?
                </Link>

            </form>
        </>
    )
}
