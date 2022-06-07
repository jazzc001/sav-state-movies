import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchBar from './components/SearchBar'


import './App.css';

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {

  return (
   <BrowserRouter>
     <Routes>
      <Route path="/">
        <Route index element={<SearchBar/>} />
        <Route path=":movieId" element={<SearchBar/>} />
      </Route>      
     </Routes>
   </BrowserRouter>  );
}

export default App;
