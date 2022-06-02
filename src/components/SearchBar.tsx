import { FormEvent, useState, useEffect } from 'react';

import { IMovieProps } from './movies/IMovieProps';
import searchForMovie from './movies/MovieApiRequest'
import  MovieComponent from './movies/MovieComponent';

import { IEpisodeProps } from './episodes/IEposodeProps'
import searchForEpisodes from './episodes/EpisodeApiRequest'
import EpisodeComponent  from './episodes/EpisodeComponent';


const  SearchBar = () => {

    const [episodesFound, setEpisodesFound] = useState<IEpisodeProps[]>([]);
    const [movieFound, setMovieFound] = useState<IMovieProps[]>([]);
    const [episodesSearch, setEpisodesSearch] = useState('');


    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
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

    
    return (
        <div>
            <form className="searchForm" onSubmit={event => handleSearch(event)}>
                <input id='searchText' type='text' />
                <button>Search</button>
            </form>
           <div>
               <MovieComponent movie={movieFound} />
              <EpisodeComponent episode={episodesFound}/>
           </div>
        </div>
    )

}

export default SearchBar;
 