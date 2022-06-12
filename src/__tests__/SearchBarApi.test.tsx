import { render, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'


import SearchBar  from '../components/SearchBar'
const server = setupServer(
    // Describe the requests to mock.
    rest.get('/', (req, res, ctx) => {
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
  

test('Movie API', async () => {
    render(<SearchBar/>)

    const out = await waitFor(() => screen.getByRole('scheduled'))
    expect(out).toBeInTheDocument()
    expect(out).toHaveAttribute('role', 'scheduled')
   



});


