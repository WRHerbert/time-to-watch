import React from 'react';

interface MovieCardProps {
  title: string,
  runtime: number
}

function MovieCard(props: MovieCardProps) {
  return (
    <>
      <p>{props.title}</p>
      <p>{props.runtime}</p>
    </>
  );
}

export default MovieCard
