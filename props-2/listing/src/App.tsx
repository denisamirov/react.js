import './App.css'
import {Listing} from '../components/Listing'
import data from '../public/etsy.json'

function App() {

  return (
    <>
        <Listing items={data}/>
    </>
  )
}

export default App
