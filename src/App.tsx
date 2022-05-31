import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Scheduled from './components/Scheduled'
import Movie from './components/Movie'


import './App.css';

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {

  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Scheduled />} />
      <Route path='movie'>
        <Route index element={<Movie />} />
        <Route path=":number" element={<Movie />} />
      </Route>
      
     </Routes>
   </BrowserRouter>  );
}

export default App;
