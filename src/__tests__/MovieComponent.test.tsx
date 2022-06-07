import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieComponent from '../components/movies/MovieComponent';
import { IMovieProps } from '../components/movies/IMovieProps';

test('renders learn react link', () => {
    const mockingMovieFound: IMovieProps[] = [{
        id: 456,
        name: 'Love Island',
        image: {
            medium: 'love-island.jpg',
        },
        url: 'www.love-island.com',
        summary: 'this is love island mocking movie',
        status: 'ended',
        genres: ['King'],
        
    }]

  const{container} = render(<MovieComponent movie={mockingMovieFound} />);


  const movieContainer = container.getElementsByClassName("movie-container");
  expect(movieContainer.length).toBe(1);

  const movieLeftContainer = container.getElementsByClassName("movie-container-left");
  expect(movieLeftContainer.length).toBe(1);
  const moviename = container.getElementsByClassName("movie-name");
  expect(moviename).toHaveTextContent('Love Island')

  const movieRightContainer = container.getElementsByClassName("movie-container-right");
  expect(movieRightContainer.length).toBe(1);

});
