// Login.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Login() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const pageStyle = {
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#1c1c1c',
        color: theme === 'light' ? '#000' : '#fff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const cardStyle = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: '300px',
        textAlign: 'center',
    };

    const inputStyle = {
        width: '100%',
        padding: '0.5rem',
        margin: '0.5rem 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: theme === 'light' ? '#fff' : '#555',
        color: theme === 'light' ? '#000' : '#fff',
    };

    const buttonStyle = {
        padding: '0.5rem 1rem',
        marginTop: '1rem',
        backgroundColor: theme === 'light' ? '#007bff' : '#4dabf7',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <div style={pageStyle}>
            <div style={cardStyle}>
                <h2>Login</h2>
                <input type="text" placeholder="Username" style={inputStyle} />
                <input type="password" placeholder="Password" style={inputStyle} />
                <button style={buttonStyle}>Login</button>
                <br />
                <button onClick={toggleTheme} style={{ ...buttonStyle, marginTop: '1rem' }}>
                    Toggle Theme
                </button>
            </div>
        </div>
    );
}

export default Login;
