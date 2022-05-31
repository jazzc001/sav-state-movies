import React, { useState, useEffect } from 'react';




const  SearchBar = () => {

    const [moviesFound, setmoviesFound] = useState([]);
    const [movieSearch, setMovieSearch] = useState('');

    const searchForMovies = async (query: string): Promise<any> => {
        const results = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=episodes`)
        return (await results.json()).results;
    }

    const search = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form  = event.target as HTMLFormElement;
        const input = form.querySelector('#searchText') as HTMLInputElement;
        setMovieSearch(input.value);
    }

    useEffect(() => {
        (async () => {
            const query = encodeURIComponent(movieSearch);
            if (query) {
                const response = await searchForMovies(query);
                setmoviesFound(response);
            }
        })();
    }, [movieSearch]);

    return (
        <div>
            <form className="searchForm" onSubmit={event => search(event)}>
                <input id='searchText' type='text' />
                <button>Search</button>
            </form>
           

        </div>
    )

}

export default SearchBar;
