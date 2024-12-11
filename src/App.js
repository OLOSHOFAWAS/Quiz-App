
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Questions from './pages/Question';
import Result from './pages/Result';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' Component={Home} />
      <Route path='/quiz/:subject' Component={Questions} />
      <Route path='/result' Component={Result} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
