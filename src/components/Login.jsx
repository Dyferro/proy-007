import React, { useState } from 'react';
import { auth, db } from '../firebase'
import { withRouter } from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [esRegistro, setEsRegistro] = useState(true)


    const procesarDatos = (e) => {
        e.preventDefault();

        //Validaciones
        if (!email.trim()) {
            setError('** Campo email vacio **')
            return
        }

        if (!password.trim()) {
            setError('** Campo password vacio **')
            return
        }

        if (password.length < 6) {
            setError('** 6 o más carácteres en password **')
            return
        }

        console.log('Datos correctos');
        setEmail('')
        setPassword('')
        setError(null)

        if (esRegistro) {
            registrar()
        } else {
            login()
        }

    }

    const registrar = React.useCallback(async () => {
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password)
            console.log(res.user);
            await db.collection('usuarios').doc(res.user.email).set({
                email: res.user.email,
                uid: res.user.uid
            })
            await db.collection(res.user.uid).add({
                name: 'Tarea de ejemplo #1',
                cantidad: 0
            })
            setEmail('')
            setPassword('')
            setError(null)
            props.history.push('/admin')
        } catch (error) {
            console.log(error);
            // setError(error.message)
            if (error.code === 'auth/email-already-in-use') {
                setError('** Usuario ya registrado... **')
                return
            }
            if (error.code === 'auth/invalid-email') {
                setError('** Email no válido **')
                return
            }
        }
    }, [email, password, props.history]);

    const login = React.useCallback(async () => {
        try {
            const res = await auth.signInWithEmailAndPassword(email, password)
            props.history.push('/admin')
            console.log(res.user);
            setEmail('')
            setPassword('')
            setError(null)

        } catch (error) {
            console.log(error);
            if (error.code === 'auth/user-not-found') {
                setError('** Usuario o contraseña incorrecta **')
                return
            }
            if (error.code === 'auth/wrong-password') {
                setError('** Usuario o contraseña incorrecta **')
                return
            }
        }
    }, [email, password, props.history]);

    return (
        <div className="mt-3 p-2">
            <div className="container text-center">
                <h3>
                    {
                        esRegistro ? 'Registro' : 'Login'
                    }
                </h3>
                <hr />
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error ? (
                                <div className='alert alert-danger'>
                                    <small >{error}</small>
                                </div>

                            ) : null
                        }
                        <div className='mb-4 mt-2'>
                            <input
                                type="email"
                                className="form-control mb-2"
                                placeholder="Ingrese Email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                id='email'
                            />


                            <input
                                type="password"
                                className="form-control mb-2"
                                placeholder="Ingrese Contraseña"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                id='password'
                            />

                        </div>
                        <div>
                            <button
                                className="btn btn-sm btn-dark btn-block float-end"
                                type="submit"
                            >
                                Ingresar
                            </button>
                            <button
                                className="btn btn-sm btn-info btn-block float-end"
                                type="button"
                                onClick={() => setEsRegistro(!esRegistro)}
                            >
                                {esRegistro ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)