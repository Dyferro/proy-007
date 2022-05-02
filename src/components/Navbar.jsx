import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='navbar navbar-dark bg-dark'>
                <Link to='/' className='navbar-brand'>PROY 007</Link>
                <div>
                    <div className="d-flex">
                        <Link
                            to='/'
                            className="btn btn-dark mr-2"

                        >
                            Home
                        </Link>
                        <Link
                            to="/admin"
                            className="btn btn-dark mr-2"

                        >
                            Admin
                        </Link>
                        <Link
                            to="/login"
                            className="btn btn-dark"

                        >
                            Login
                        </Link>
                    </div>
                </div>

            </div>
            <hr />
        </>
    )
}

export default Navbar