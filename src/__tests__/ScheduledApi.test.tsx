import { render, waitFor, screen } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import Scheduled  from '../components/Scheduled'


const server = setupServer(
    
    // Describe the requests to mock.
    rest.get(`https://api.tvmaze.com/schedule`, (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([{
            id: 456,
            name: 'Love Island',
            show: {
                name: 'Love Island E1',
                image: {
                medium: 'loveisland.jpg'
                }
            },
            url: 'www.loveisland.com'
        }]),
      )
    })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Movie API', () => {
    
    beforeEach(() => {
        render(<Scheduled />)
    })

    test('Movie container', async () => {
        const out = await waitFor(() => screen.getAllByRole('scheduled-movie-container'))
        expect(out[0]).toBeInTheDocument();
    });
    
    test('Movie img url', async () => {
        const img = await waitFor(() => screen.getAllByRole('img-url'))
        expect(img[0]).toBeInTheDocument();
        expect(img[0]).toHaveAttribute('href', 'www.loveisland.com')
    });

    test('Movie img src', async () => {
        const imgSrc = await waitFor(() => screen.getAllByRole('img-src'))
        expect(imgSrc[0]).toBeInTheDocument();
        expect(imgSrc[0]).toHaveAttribute('src', 'loveisland.jpg')
    })
    test('Movie img description', async () => {
        const imgSrc = await waitFor(() => screen.getAllByRole('img-desciption'))
        expect(imgSrc[0]).toBeInTheDocument();
        expect(imgSrc[0]).toHaveAttribute('role', 'img-desciption')
        expect(imgSrc[0]).toHaveTextContent('Love Island')
    })
})


