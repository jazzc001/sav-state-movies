import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'


import SearchBar  from '../components/SearchBar'
const server = setupServer(
    // Describe the requests to mock.
    rest.get('https://api.tvmaze.com/singlesearch/shows', (req, res, ctx) => {
      return res(
        ctx.json([{
            id: 456,
            name: 'Love Island',
            image: {
                medium: 'love-island.jpg',
            },
            url: 'www.love-island.com',
            summary: '***this is love island mocking movie****',
            status: 'ended',
            genres: ['King']
        }]),
      )
    }),
  )
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())
  

  describe('SearchBar API', () => {
    
    beforeEach(() => {
        render(<SearchBar />)
    })

    test('Scheduled component', async () => {
        const out = await waitFor(() => screen.getAllByRole('scheduled'))
        expect(out[0]).toBeInTheDocument();
    });

 

    test('should render input element in search bar', async () => {
      const inputElement = screen.getByPlaceholderText('search a show');
      expect(inputElement).toBeInTheDocument();
      
    });

    test('should be able to type in input in search bar', async () => {
      const inputElement = screen.getByPlaceholderText('search a show');
      fireEvent.change(inputElement, { target: {value: 'love island'} });
      expect(inputElement.value).toBe('love island');
      
    });
});


