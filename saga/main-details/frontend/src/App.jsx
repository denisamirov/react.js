import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nava } from './components/Nava';
import { Main } from './components/main';
import { Routes, Route } from 'react-router'
import { Details } from './components/details';

function App() {

  return (
    <>
      <Nava></Nava>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/detail" element={<Details />}/>
      </Routes>
    </>
  )
}

export default App
