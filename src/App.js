import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './card';
import Welcomepage from './Welcomepage';
import Game from './Game';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcomepage/>} />
      <Route path='/game' element={<Game/>} />
      <Route />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
