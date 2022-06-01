
import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';

function Scheduled() {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({});

  interface IMovie {
    id: number;
    name: string;
    show: {
      name: string;
    }

  }

  let today = ((new Date()).toISOString()).substring(0, 10)

  useEffect(()=> {
    fetch(`https://api.tvmaze.com/schedule?date=${today}&country=GB`)
    .then(response => response.json())
    .then(res => setMovies(res))
    .catch(err => setError(err));
  }, [])

  

  
  return (
    <div className="App">
        <Navbar />
        {movies.length > 0? movies.map((m: IMovie)=> {
          return( 
          
          <li>{m.show.name}, {m.id}</li>
          )
         
          }) : ('loading...')}
        
     
    </div>
  );

}

export default Scheduled;