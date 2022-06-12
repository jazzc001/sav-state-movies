import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import SearchBar  from '../components/SearchBar'


  describe('SearchBar ', () => {
    
    beforeEach(() => {
        render(<SearchBar />)
    })

    test('Scheduled component', () => {
        const scheduledComponent = screen.getAllByRole('scheduled')
        expect(scheduledComponent[0]).toBeInTheDocument();
    });

 

    test('should render input element in search bar', () => {
      const inputElement = screen.getByPlaceholderText('search a show');
      expect(inputElement).toBeInTheDocument();
      
    });

    test('should be able to type in input in search bar',  () => {
      const inputElement = screen.getByPlaceholderText('search a show');
      fireEvent.change(inputElement, { target: {value: 'love island'} });
      expect(inputElement.value).toBe('love island');
      
    });

    test('should have empty input when search button is clicked', () => {
      const inputElement = screen.getByPlaceholderText('search a show');
      const buttonElement = screen.getByRole('search');
      fireEvent.change(inputElement, { target: {value: 'love island'} });
      fireEvent.click(buttonElement);
      expect(inputElement.value).toBe('');

      
    });

    test('should have show movie component when search button is clicked', () => {
      const inputElement = screen.getByPlaceholderText('search a show');
      const buttonElement = screen.getByRole('search');
      fireEvent.change(inputElement, { target: {value: 'love island'} });
      fireEvent.click(buttonElement);
      const movieComponent = screen.getByRole('movie-component')
      expect(movieComponent).toBeInTheDocument()
      
    });


    test('should have episode component when search button is clicked', () => {
      const inputElement = screen.getByPlaceholderText('search a show');
      const buttonElement = screen.getByRole('search');
      fireEvent.change(inputElement, { target: {value: 'love island'} });
      fireEvent.click(buttonElement);
      const episodeComponent = screen.getByRole('episode-component')
      expect(episodeComponent).toBeInTheDocument()
      
    });
});


