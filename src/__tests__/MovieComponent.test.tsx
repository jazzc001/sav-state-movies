import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';



import MovieComponent from '../components/movies/MovieComponent';
import { IMovieProps } from '../components/movies/IMovieProps';

describe('render Movie Component', () => {
    const mockingMovieFound: IMovieProps[] = [{
        id: 456,
        name: 'Love Island',
        image: {
            medium: 'love-island.jpg',
        },
        url: 'www.love-island.com',
        summary: '***this is love island mocking movie****',
        status: 'ended',
        genres: ['King'],
        
    }]
    beforeEach(() => {
        render(<MovieComponent movie={mockingMovieFound} />);
    })


   


 test('Movie Name', () => {
   

     const linkedElement = screen.getByRole('movie-name');
     expect(linkedElement).toBeInTheDocument()
     expect(linkedElement).toHaveTextContent('Love Island')
     expect(linkedElement).toHaveAttribute('role', 'movie-name')
     
 })

 
 test('Movie img', () => {
     
     const linkedElement = screen.getByRole('movie-img');
     expect(linkedElement).toBeInTheDocument()
     expect(linkedElement).toHaveAttribute('role', 'movie-img')
    })
    
    test('Movie Summary', () => {
      
       const linkedElement2 = screen.getByRole('summary');
       expect(linkedElement2).toBeInTheDocument()
       expect(linkedElement2).toHaveTextContent('this is love island mocking movie')
       expect(linkedElement2).toHaveAttribute('role', 'summary')
   })
   test('Movie Status', () => {
      
    const linkedElement2 = screen.getByRole('status');
    expect(linkedElement2).toBeInTheDocument()
    expect(linkedElement2).toHaveTextContent('ended')
    expect(linkedElement2).toHaveAttribute('role', 'status')
})
test('Movie Genres', () => {
      
    const linkedElement2 = screen.getByRole('genres');
    expect(linkedElement2).toBeInTheDocument()
    expect(linkedElement2).toHaveTextContent('King')
    expect(linkedElement2).toHaveAttribute('role', 'genres')
})

test('Movie img', () => {
    const linkedElement = screen.getByRole('movie-img');
    expect(linkedElement).toHaveAttribute('src', 'love-island.jpg')
})

});


