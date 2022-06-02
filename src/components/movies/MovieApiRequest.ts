import { IMovieProps } from '../movies/IMovieProps';

const searchForMovie = async (query: string): Promise<IMovieProps[]> => {
    const results = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=episodes`)
    const data = await results.json();
    
    return[{
        id: data.id, 
        name: data.name, 
        image: {
            medium: data.image.medium, 
        },
        url: data.url, 
        summary: data.summary,
        status: data.status,
        genres: data.genres
    }];
        
}

export default searchForMovie