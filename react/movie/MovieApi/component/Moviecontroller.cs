using Microsoft.AspNetCore.Mvc;
using MovieApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MovieApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private static List<Movie> movies = new List<Movie>();

        // POST: api/Movie
        [HttpPost]
        public IActionResult CreateMovie([FromBody] Movie movie)
        {
            if (movie == null || string.IsNullOrEmpty(movie.MovieName))
                return BadRequest("Invalid movie data.");

            movie.Id = movies.Count + 1;
            movies.Add(movie);

            return CreatedAtAction(nameof(GetMovies), new { id = movie.Id }, movie);
        }

        // GET: api/Movie
        [HttpGet]
        public IActionResult GetMovies()
        {
            return Ok(movies);
        }

        // DELETE: api/Movie/5
        [HttpDelete("{id}")]
        public IActionResult DeleteMovie(int id)
        {
            var movie = movies.FirstOrDefault(m => m.Id == id);
            if (movie == null)
                return NotFound();

            movies.Remove(movie);
            return NoContent();
        }
    }
}
