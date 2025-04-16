import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div>
                <div>
                    <input type="text" name="" id="" placeholder='Email' />
                </div>
                <div>
                    <input type="password" name="" id="" placeholder='Password' />
                </div>
                <div>
                    <button>Login</button>
                </div>
                <div>
                    <p>New User?
                        <Link to="/Register">Register</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login