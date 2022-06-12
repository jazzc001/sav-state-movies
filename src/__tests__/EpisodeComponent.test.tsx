import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';



import EpisodeComponent from '../components/episodes/EpisodeComponent';
import { IEpisodeProps } from '../components/episodes/IEposodeProps'

describe('render Movie Component', () => {
    const mockingEpisodeFound: IEpisodeProps[] = [{
        id: 456,
        name: 'Love Island e1',
        image: {
            medium: 'love-island.jpg',
        },
        url: 'www.love-island.com',
        season: 3,
        number: 1
        
    }, 
    {
        id: 457,
        name: 'Love Island e2',
        image: {
            medium: 'love-island.jpg',
        },
        url: 'www.love-island.com',
        season: 3,
        number: 2
        
    },
    {
        id: 458,
        name: 'Love Island e3',
        image: {
            medium: 'love-island.jpg',
        },
        url: 'www.love-island.com',
        season: 3,
        number: 3
        
    }
]
    beforeEach(() => {
        render(<EpisodeComponent episode={mockingEpisodeFound} />);
    })


   


 test('Episode Name', () => {
   

     const linkedElement = screen.getAllByRole('episode-name');
     expect(linkedElement[0]).toHaveTextContent(mockingEpisodeFound[0].name)
     expect(linkedElement[1]).toHaveTextContent(mockingEpisodeFound[1].name)
     expect(linkedElement[2]).toHaveTextContent(mockingEpisodeFound[2].name)
     expect(linkedElement[0]).toHaveAttribute('role', 'episode-name')
     
 })
 test('Episode number', () => {
   

    const linkedElement = screen.getAllByRole('episode-number');
    expect(linkedElement[0]).toHaveTextContent(mockingEpisodeFound[0].number.toString())
    expect(linkedElement[1]).toHaveTextContent(mockingEpisodeFound[1].number.toString())
    expect(linkedElement[2]).toHaveTextContent(mockingEpisodeFound[2].number.toString())
    expect(linkedElement[0]).toHaveAttribute('role', 'episode-number')
    
})

 

});


