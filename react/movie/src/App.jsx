import React, { useState } from 'react';
import Movie from './component/Movie';
import Movielist from './component/Movielist';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleMovieCreated = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  return (
    <div>
      <h1>Movie Management</h1>
      <Movie onMovieCreated={handleMovieCreated} />
      <Movielist />
    </div>
  );
};

export default App;
