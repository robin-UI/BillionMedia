import { Route, Routes } from 'react-router-dom';
import './App.css';
import Credintial from './Pages/Credintial/Credintial';
import HomePage from './Pages/main/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='=/' element={<HomePage/>} />
        <Route path="/login" element={<Credintial/>}/>
      </Routes>
    </>
  );
}

export default App;
