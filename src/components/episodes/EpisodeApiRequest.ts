import { IEpisodeProps } from './IEposodeProps'


const searchForEpisodes = async (query: string): Promise<IEpisodeProps[]> => {
    const results = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=episodes`)
    const data = await results.json();

    return data._embedded.episodes;
}

export default  searchForEpisodes