import React from 'react';
import { render } from '@testing-library/react';
import MovieCard from './MovieCard';

const movie: Movie = {
  title: 'Test Title!',
  runtime: 234
}

test('renders movie title', () => {
  const { queryByText } = render(<MovieCard {...movie}/>)
  expect(queryByText(movie.title)).toBeInTheDocument()
})

test('renders movie runtime', () => {
  const { queryByText } = render(<MovieCard {...movie}/>)
  expect(queryByText(movie.runtime.toString())).toBeInTheDocument()
})
