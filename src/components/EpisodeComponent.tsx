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
    let seasons = {};
    
    console.log(episode.season)

    return (
        <div>
            <div className="episode">
                <div className="episode-season">
                    <li>{episode.season == 1  ? episode.season : episode.season   }</li>
                </div>
                
               
            </div>
        </div>
    );
};

export default EpisodeComponent;