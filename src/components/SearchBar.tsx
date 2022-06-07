import { FormEvent, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import Scheduled from './Scheduled'

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
    const [scheduledMovieStatus, setScheduledMovieStatus] = useState('on')

    const [ epId, setEpid ] = useState<Number>();
    // const { movieId } = useParams();



    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form  = event.target as HTMLFormElement;
        const input = form.querySelector('#searchText') as HTMLInputElement;
        setEpisodesSearch(input.value);
        setScheduledMovieStatus('off');
        
    }

    useEffect(() => {
        (async () => {
            const query = encodeURIComponent(episodesSearch);
            if (query) {
                const response = await searchForEpisodes(query);
                const response2 = await searchForMovie(query);
                
                setEpisodesFound(response);
                setEpid(response2[0].id)
                setMovieFound(response2)
                
            }
        })();
    }, [episodesSearch]);

    console.log(epId)


    return (
        <div>
            <div className="navbar">
            <h1> Sav State </h1>
            </div>
            <form className="searchForm" onSubmit={event => handleSearch(event)}>
                <input id='searchText' type='text' />
                <button>Search</button>
            </form>
           <div>
               {scheduledMovieStatus =='on' ? 
               <Scheduled /> : 
               <div>
                <MovieComponent movie={movieFound} />
                <EpisodeComponent episode={episodesFound}/>
               </div>
                }
           </div>
        </div>
    )

}

export default SearchBar;
 