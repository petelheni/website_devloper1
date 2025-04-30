// Login.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './Login.css';

function Login() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`login-page ${theme}-theme`}>
            <div className="login-card">
                <h2>Login</h2>
                <input type="text" placeholder="Username" className="login-input" />
                <input type="password" placeholder="Password" className="login-input" />
                <button className="login-button">Login</button>
                <br />
                <button className="login-button" onClick={toggleTheme}>
                    Toggle Theme
                </button>
            </div>
        </div>
    );
}

export default Login;
