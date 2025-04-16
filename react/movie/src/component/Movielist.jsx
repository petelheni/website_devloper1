import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movielist.css';

const Movielist = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/movie')
            .then((response) => setMovies(response.data))
            .catch((error) => console.error('Error fetching movies:', error));
    }, [movies]);

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:5000/api/movie/${id}`)
            .then(() => {
                setMovies(movies.filter((movie) => movie.id !== id));
            })
            .catch((error) => console.error('Error deleting movie:', error));
    };

    return (
        <div className="movie-container">
            <h2 className="movie-title">Movie List</h2>
            <ul className="movie-list">
                {movies.map((movie) => (
                    <li key={movie.id} className="movie-item">
                        <strong>{movie.movieName}</strong> - {movie.director} - {movie.releaseDate}
                        <button className="delete-button" onClick={() => handleDelete(movie.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movielist;
