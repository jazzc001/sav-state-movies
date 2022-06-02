import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMovieProps } from './IMovieProps'


const MovieComponent = (props: { movie: IMovieProps[]}) => {
    
    const { movie } = props;
    
   
    return (
        <div className="movie-container">
           {movie.length && movie.map((m) => {
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
                       
        </div>
    );
};

export default MovieComponent;