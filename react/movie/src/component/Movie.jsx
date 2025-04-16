import React, { useState } from 'react';
import axios from 'axios';
import './Movie.css';

const Movie = ({ onMovieCreated }) => {
    const [movieName, setMovieName] = useState('');
    const [director, setDirector] = useState('');
    const [producer, setProducer] = useState('');
    const [actors, setActors] = useState('');
    const [actresses, setActresses] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const movieData = {
            movieName,
            director,
            producer,
            actors,
            actresses,
            releaseDate,
        };

        axios
            .post('http://localhost:5000/api/movie', movieData)
            .then((response) => {
                onMovieCreated(response.data);
                setMovieName('');
                setDirector('');
                setProducer('');
                setActors('');
                setActresses('');
                setReleaseDate('');
            })
            .catch((error) => {
                console.error('There was an error creating the movie!', error);
            });
    };

    return (
        <form className="movie-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Movie Name:</label>
                <input
                    type="text"
                    value={movieName}
                    onChange={(e) => setMovieName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Director:</label>
                <input
                    type="text"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Producer:</label>
                <input
                    type="text"
                    value={producer}
                    onChange={(e) => setProducer(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Actors:</label>
                <input
                    type="text"
                    value={actors}
                    onChange={(e) => setActors(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Actresses:</label>
                <input
                    type="text"
                    value={actresses}
                    onChange={(e) => setActresses(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Release Date:</label>
                <input
                    type="date"
                    value={releaseDate}
                    onChange={(e) => setReleaseDate(e.target.value)}
                    required
                />
            </div>
            <button className="submit-button" type="submit">Create Movie</button>
        </form>
    );
};

export default Movie;