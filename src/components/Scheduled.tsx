
import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';

function Scheduled() {

  const [movies, setMovies] = useState([])
  const [error, setError] = useState({})

  interface Movie {
    id: number;
    name: string;
    show: {
      name: string;
    }

  }


  useEffect(()=> {
    fetch('https://api.tvmaze.com/schedule?date=2022-05-30&country=GB')
    .then(response => response.json())
    .then(res => setMovies(res))
    .catch(err => setError(err));
  }, [])

  return (
    <div className="App">
        <Navbar />
        {movies.length > 0? movies.map((m: Movie)=> {
          return( <li>{m.show.name}, {m.id}</li>)
         
          }) : ('loading...')}
        
     
    </div>
  );

}

export default Scheduled;