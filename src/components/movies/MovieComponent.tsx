import { IMovieProps } from './IMovieProps'
import './Movie.css'



const MovieComponent = (props: { movie: IMovieProps[]}) => {
    
    const { movie } = props;
    
   
    return (
        <div key='move-container' className="movie-container">

            <div key='move-container-left' className="movie-container-left">
            {movie.length && movie.map((m) => {
                    return (
                        <div key='movie' className="movie">
                            <div className="title">
                            <h1 className="movie-name" role='movie-name' key={m.name}>{m.name}</h1>
                            </div>
                            <div className="movie-img" role='movie-img' > 
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
                                <li role='summary' key={m.summary} >Summary: {m.summary.substring(3).slice(0, -4)}</li><br></br>
                                <li role='status'>Status: {m.status}</li><br></br>
                                <li role='genres' >Genres: {m.genres}</li>
                            </div>
                        </div>
                    )
                })}
                        
            </div>
        </div>
    );
};

export default MovieComponent;