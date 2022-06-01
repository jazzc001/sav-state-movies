import React, { FormEvent, useState, useEffect } from 'react';
import MovieComponent  from './MovieComponent';

export interface IMovieProps {
    id: number;
    name: string;
    image: {
        medium: string;
    };
    url: string;
}


const  SearchBar = () => {

    const [moviesFound, setMoviesFound] = useState<IMovieProps[]>([]);
    const [movieSearch, setMovieSearch] = useState('');

    const searchForMovies = async (query: string): Promise<IMovieProps[]> => {
        const results = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=episodes`)
        const data = await results.json();
        
        return data;
        // const selectedMovies = await data.map((movie: IMovieProps) => {
        //     return {
        //       id: movie.id,
        //       name: movie.name,
        //       image: {
        //         medium: movie.image.medium,
        //       },
        //       url: movie.url
        //     }
        // })
        // return selectedMovies;
    }

    const search = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form  = event.target as HTMLFormElement;
        const input = form.querySelector('#searchText') as HTMLInputElement;
        setMovieSearch(input.value);
        input.value = '';
    }

    useEffect(() => {
        (async () => {
            const query = encodeURIComponent(movieSearch);
            if (query) {
                const response = await searchForMovies(query);
                setMoviesFound(response);
            }
        })();
    }, [movieSearch]);

    console.log(moviesFound)

    return (
        <div>
            <form className="searchForm" onSubmit={event => search(event)}>
                <input id='searchText' type='text' />
                <button>Search</button>
            </form>
            
            {movieSearch && <p> Results for { movieSearch} ...</p>}
           <div className="movie-container">
               {moviesFound.length > 0? moviesFound.map(movie => {
                    return (<MovieComponent key={movie.url} movie={movie}></MovieComponent>)}
                ) : ('loading...')}
           </div>

        </div>
    )

}

export default SearchBar;
