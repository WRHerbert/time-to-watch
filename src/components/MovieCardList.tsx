import React from 'react';
import MovieCard from './MovieCard';
import Movie from '../models/Movie';

interface MovieCardListProps {
  movies: Movie[]
}

function MovieCardList(props: MovieCardListProps) {
  return (
    <>
      {props.movies.map(movie => (
        <div key={movie.id}>
          <MovieCard {...movie}/>
        </div>)
      )}
    </>
  );
}

export default MovieCardList
