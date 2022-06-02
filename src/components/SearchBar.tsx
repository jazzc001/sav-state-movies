import React, { FormEvent, useState, useEffect } from 'react';
import EpisodeComponent  from './EpisodeComponent';


export interface IEpisodeProps {
    id: number;
    name: string;
    image: {
        medium: string;
    };
    url: string;
    season: number;
    number: number;
    
}

export interface IMovieProps {
    id: number;
    name: string;
    image: {
        medium: string;
    };
    url: string;
    summary: string;
    status: string;
    genres: [string];
    
}


const  SearchBar = () => {

    const [episodesFound, setEpisodesFound] = useState<IEpisodeProps[]>([]);
    const [episodesSearch, setEpisodesSearch] = useState('');

    const [movieFound, setMovieFound] = useState<IMovieProps[]>([]);

    const searchForEpisodes = async (query: string): Promise<IEpisodeProps[]> => {
        const results = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=episodes`)
        const data = await results.json();        
        return data._embedded.episodes;
    }

    const searchForMovie = async (query: string): Promise<IMovieProps[]> => {
        const results = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=episodes`)
        const data = await results.json();
        console.log(data)
        
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

    

    const search = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form  = event.target as HTMLFormElement;
        const input = form.querySelector('#searchText') as HTMLInputElement;
        setEpisodesSearch(input.value);
        
    }

    useEffect(() => {
        (async () => {
            const query = encodeURIComponent(episodesSearch);
            if (query) {
                const response = await searchForEpisodes(query);
                const response2 = await searchForMovie(query);
                // type ObjectKey = keyof typeof response;
                // console.log(response['name' as ObjectKey], response['url' as ObjectKey]);
                setEpisodesFound(response);
                setMovieFound(response2)
            }
        })();
    }, [episodesSearch]);


    // const myVar = 'name' as ObjectKey;
    console.log(movieFound)
    console.log(episodesSearch)


    return (
        <div>
            <form className="searchForm" onSubmit={event => search(event)}>
                <input id='searchText' type='text' />
                <button>Search</button>
            </form>
            
            {episodesSearch && <p> Results for { episodesSearch} ...</p>}
           <div className="movie-container">
               {movieFound.length && movieFound.map((m: IMovieProps) => {
                   return (
                    <div className="movie">
                        <div className="movie-heading">
                          <h1>{m.name}</h1>
                        </div>
                        <div className="movie-img"> 
                           <img src={m.image.medium} />
                        </div>
                        <div className="movie-summary">
                            <li>{m.summary}</li>
                            <li>{m.status}</li>
                            <li>{m.genres}</li>
                        </div>
                    </div>
                   )
               })}
               {episodesFound.length > 0? episodesFound.map((episode: IEpisodeProps) => {
                    return (<EpisodeComponent key={episode.url}  episode={episode}></EpisodeComponent>)}
                ) : ('loading...')}
           </div>

        </div>
    )

}

export default SearchBar;
