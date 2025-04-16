import React, { useState } from 'react';
import './App.css';

function Movie1() {
    const [movies, setMovies] = useState([
        {
            name: "sanam teri kasam",
            director: "Christopher Nolan",
            actor: "Leonardo DiCaprio",
            releaseYear: "2010",
            poster: "https://m.media-amazon.com/images/I/51xJ1U7sWbL._AC_.jpg"
        },
        {
            name: "The Matrix",
            director: "The Wachowskis",
            actor: "Keanu Reeves",
            releaseYear: "1999",
            poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg"
        },
        {
            name: "Interstellar",
            director: "Christopher Nolan",
            actor: "Matthew McConaughey",
            releaseYear: "2014",
            poster: "https://m.media-amazon.com/images/I/71n58WcH1xL._AC_SL1111_.jpg"
        }
    ]);

    const [newMovie, setNewMovie] = useState({
        name: '',
        director: '',
        actor: '',
        releaseYear: '',
        poster: ''
    });

    const [searchText, setSearchText] = useState('');

    const addMovie = () => {
        if (newMovie.name) {
            setMovies([...movies, newMovie]);
            setNewMovie({ name: '', director: '', actor: '', releaseYear: '', poster: '' });
        }
    };

    const deleteMovie = (index) => {
        const updatedMovies = [...movies];
        updatedMovies.splice(index, 1);
        setMovies(updatedMovies);
    };

    const filteredMovies = movies.filter((movie) => {
        const text = searchText.toLowerCase();
        return (
            movie.name.toLowerCase().includes(text) ||
            movie.director.toLowerCase().includes(text) ||
            movie.actor.toLowerCase().includes(text)
        );
    });

    return (
        <div className="app">
            <h1>🎬 Welcome to the Movie Database 🎬</h1>

            <h2>Add a New Movie</h2>
            <input
                type="text"
                placeholder="Movie Name"
                value={newMovie.name}
                onChange={(e) => setNewMovie({ ...newMovie, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Director"
                value={newMovie.director}
                onChange={(e) => setNewMovie({ ...newMovie, director: e.target.value })}
            />
            <input
                type="text"
                placeholder="Actor"
                value={newMovie.actor}
                onChange={(e) => setNewMovie({ ...newMovie, actor: e.target.value })}
            />
            <input
                type="text"
                placeholder="Release Year"
                value={newMovie.releaseYear}
                onChange={(e) => setNewMovie({ ...newMovie, releaseYear: e.target.value })}
            />
            <input
                type="text"
                placeholder="Poster Image URL"
                value={newMovie.poster}
                onChange={(e) => setNewMovie({ ...newMovie, poster: e.target.value })}
            />
            <button onClick={addMovie}>Add Movie</button>

            <div className="search-box">
                <h2>Search Movies</h2>
                <input
                    type="text"
                    placeholder="Search by name, director, or actor"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

            <h2>Current Movie List</h2>
            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        <div className="movie-item">
                            <span className="movie-title">{movie.name}</span>
                            <span>Director: {movie.director}</span>
                            <span>Actor: {movie.actor}</span>
                            <span>Release Year: {movie.releaseYear}</span>
                            {movie.poster && (
                                <img src={movie.poster} alt="Poster" className="movie-poster" />
                            )}
                        </div>
                        <button onClick={() => deleteMovie(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Movie1;
