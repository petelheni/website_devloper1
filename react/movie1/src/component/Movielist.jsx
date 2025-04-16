// src/components/MovieList.js
import React, { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "../api/movieService";

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies().then((res) => setMovies(res.data));
    }, []);

    const handleDelete = (id) => {
        deleteMovie(id).then(() => setMovies(movies.filter(m => m.id !== id)));
    };

    return (
        <div>
            <h2>Movies</h2>
            <ul>
                {movies.map(m => (
                    <li key={m.id}>
                        {m.title} ({m.year})
                        <button onClick={() => handleDelete(m.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;
