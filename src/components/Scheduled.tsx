
import React, {useState, useEffect} from 'react';
import './Scheduled.css';

function Scheduled() {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({});

  interface IMovie {
    id: number;
    name: string;
    show: {
      name: string;
      image: {
        medium: string;
      }
    };
    url: string;
    

  }

  let today = ((new Date()).toISOString()).substring(0, 10)

  useEffect(()=> {
    fetch(`https://api.tvmaze.com/schedule?date=${today}&country=GB`)
    .then(response => response.json())
    .then(res => setMovies(res))
    .catch(err => setError(err));
  }, [])

  
  return (
    
    <div role="scheduled-movie-container" className="scheduled-movie-container">
        {movies.length > 0? movies.map((m: IMovie)=> {
          return( 
              <div>
                
                <div className='img__wrap'>
                    <a role='img-url' href={m.url}>
                        <img role='img-src' className='img__img' src={(m.show.image==null) ?  
                            `https://media.comicbook.com/files/img/default-movie.png` : 
                            m.show.image.medium} />
                    </a>
                    <p role='img-desciption' className='img__description'>{m.show.name}</p>
                </div>
                
              </div>
          )
         
          }) : ('loading...')}
        
     
    </div>
  );

}

export default Scheduled;