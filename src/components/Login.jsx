import React, { useState } from 'react'

const Login = () => {
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

    }

    return (
        <div className="mt-3 p-2">
            <div className="container text-center">
                <h3>
                    {
                        esRegistro ? 'Registro de Usuarios' : 'Login'
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

export default Login