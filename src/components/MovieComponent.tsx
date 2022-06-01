import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {IEpisodeProps} from './SearchBar'



const MovieComponent = (props: { movie: IEpisodeProps}) => {
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


    const { movie } = props;

    return (
        <div>
            <div className="movie">
                <div className="title">
                    <img src={movie.image.medium} alt={movie.name}/>
                    <p>{movie.name}</p>
                </div>
               
            </div>
        </div>
    );
};

export default MovieComponent;