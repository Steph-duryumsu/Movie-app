import { useEffect, useState } from 'react';
import './HomePage.css';
import MovieCard from './MovieCard';
import SearchBox from './SearchBox';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const APIKEY = process.env.REACT_APP_TMDB_KEY;
  

  useEffect (() => {
    const fetchMovies = async () => {
      const endpoint = searchQuery
        ? `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchQuery}`
        : `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`;

        
      try{
        const response = await fetch(endpoint);
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, [searchQuery, APIKEY]);

  return (
    <div className='container'>
      <h1>Movie <span>Match</span></h1>
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

      { movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <div className='movie-list'>
        {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
      )}
      </div>
    )
  };

export default HomePage;

// https://api.themoviedb.org/3/movie/popular?api_key=fc0f94e7b0014ea08df0004cf1a09d8b&language=en-US&page=1

// const key = `https://fusme.link/,https://uxert.link/,https://yrkde.link/`

// `https://api.themoviedb.org/3/movie/popular?api_key=${ APIKEY }&language=en-US&page=1`