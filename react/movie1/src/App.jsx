// src/api/movieService.js
import axios from 'axios';

const API_URL = "http://localhost:5000/api/movie"; // Use the HTTP port

export const getMovies = () => axios.get(API_URL);

export const addMovie = (movie) => axios.post(API_URL, movie);

export const deleteMovie = (id) => axios.delete(`${API_URL}/${id}`);
