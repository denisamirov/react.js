import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Routes, Route } from 'react-router-dom'
import { Favoutites } from './components/Favoutites'
import { CardView } from './components/CardView'

function App() {

  return (
    <>
    <Header /> 
    <div>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/favourite" element={<Favoutites />} />
      </Routes>
    </div>
    <CardView />
    </>
  )
}

export default App
