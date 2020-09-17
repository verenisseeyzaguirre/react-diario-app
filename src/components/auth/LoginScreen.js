import React from 'react';

import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
//import { login } from '../../actions/auth';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );


    const [ formValues, handleInputChange ] = useForm({
        email: 'bena@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        

        //dispatch( login(12345, 'Clau'));
        dispatch( startLoginEmailPassword(email, password));
        
    }

    const handleGoogleLogin = () => {

        if(isFormValid() ) {
            console.log('valido');
            dispatch( startGoogleLogin() );
        }

    }

    const isFormValid = () => {

        if( !validator.isEmail(email) ) {
            console.log('email no es valido');
            return false;
        } else if( password.length <5 ) {
            console.log('password debe tener al menos 6 caracter');
            return false;
        }

        return true;
    }

    return (
        <>
            <h3 className='auth_tittle' >Ingresar</h3>

            <form
                onSubmit={ handleLogin }
                className='animate__animated animate__fadeIn animate__faster'
            >
                <input
                    type="text"
                    placeholder='Email'
                    autoComplete='off'
                    name="email"
                    className='auth_input'
                    value= {email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder='Password'
                    name="password"
                    className='auth_input'
                    value= {password}
                    onChange={handleInputChange}
                />

                <button
                    className='btn btn-primary btn-block'
                    type='submit'
                    disabled={loading}
                    
                >
                    Ingresar
                </button>
                
                <div className='auth__social-networks' >
                    <p>Ingresa con Google</p>

                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link
                    to='/auth/register'
                    className='link'
                >
                    Crear una nueva cuenta
                </Link>

            </form>
        </>
    )
}
