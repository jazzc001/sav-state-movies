import { IMovieProps } from './IMovieProps'
import './Movie.css'



const MovieComponent = (props: { movie: IMovieProps[]}) => {
    
    const { movie } = props;
    
   
    return (
        <div className="movie-container">

            <div className="movie-container-left">
            {movie.length && movie.map((m) => {
                    return (
                        <div className="movie">
                            <div className="title">
                            <h1>{m.name}</h1>
                            </div>
                            <div className="img"> 
                            <img src={m.image.medium} />
                            </div>
                            
                        </div>
                    )
                })}
                        
            </div>
            <div className="movie-container-right">
            {movie.length && movie.map((m) => {
                    return (
                        <div className="movie">
                            
                            <div className="movie-summary">
                                <li>Summary: {m.summary.substring(3).slice(0, -4)}</li><br></br>
                                <li>Status: {m.status}</li><br></br>
                                <li>Genres: {m.genres}</li>
                            </div>
                        </div>
                    )
                })}
                        
            </div>
        </div>
    );
};

export default MovieComponent;