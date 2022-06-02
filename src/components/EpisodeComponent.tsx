import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {IEpisodeProps} from './SearchBar'



const EpisodeComponent = (props: { episode: IEpisodeProps}) => {
    // const [ message, setMessage ] = useState('');
    // const { number } = useParams();

    // useEffect(() => {
    //     if (number) 
    //     {
    //         setMessage(`The number is ${number}`)
    //     }
    //     else {
    //         setMessage('No number was provided')
    //     }
    // }, [])


    const { episode } = props;
    console.log(episode)

    return (
        <div>
            <div className="episode">
                <div className="episode-season">
                    {}
                    <li>Season {episode.season}, Episode {episode.number}</li>
                </div>
                {episode.number && 
                    <ul>
                        {episode.number}
                    </ul>
                }
               
            </div>
        </div>
    );
};

export default EpisodeComponent;