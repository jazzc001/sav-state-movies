import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';



import EpisodeComponent from '../components/episodes/EpisodeComponent';
import { IEpisodeProps } from '../components/episodes/IEposodeProps'

describe('render Movie Component', () => {
    const mockingEpisodeFound: IEpisodeProps[] = [{
        id: 456,
        name: 'Love Island e1',
        image: {
            medium: 'love-island-e1.jpg',
        },
        url: 'www.love-island-e1.com',
        season: 3,
        number: 1
        
    }, 
    {
        id: 457,
        name: 'Love Island e2',
        image: {
            medium: 'love-island-e2.jpg',
        },
        url: 'www.love-island-e2.com',
        season: 3,
        number: 2
        
    },
    {
        id: 458,
        name: 'Love Island e3',
        image: {
            medium: 'love-island-e3.jpg',
        },
        url: 'www.love-island-e3.com',
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
test('Episode url', () => {
    const linkedElement = screen.getAllByRole('episode-url');
    expect(linkedElement[0]).toHaveAttribute('href', 'www.love-island-e1.com')
    expect(linkedElement[1]).toHaveAttribute('href', 'www.love-island-e2.com')
    expect(linkedElement[2]).toHaveAttribute('href', 'www.love-island-e3.com')
    
})

test('Episode img', () => {
    const linkedElement = screen.getAllByRole('episode-img');
    expect(linkedElement[0]).toHaveAttribute('src', 'love-island-e1.jpg')
    expect(linkedElement[1]).toHaveAttribute('src', 'love-island-e2.jpg')
    expect(linkedElement[2]).toHaveAttribute('src', 'love-island-e3.jpg')
    
})

 

});


