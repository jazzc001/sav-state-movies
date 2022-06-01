import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Scheduled from './components/Scheduled'
import SearchBar from './components/SearchBar'


import './App.css';

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {

  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Scheduled />} />
      <Route path="/search" element={<SearchBar />} />
      
     </Routes>
   </BrowserRouter>  );
}

export default App;
