import './App.css'
import { News } from './components/News'
import { Course } from './components/Course'
import { Search } from './components/Search'
import { DownOption } from './components/DownOption'
import { Date } from './components/Date'
import { Tags } from './components/Tags'
import { Advertising } from './components/Advertising'

function App() {

  return (
    <>
    <div className='block'>
      <News />
    </div>
    <div className='block'>
      <Date />
    </div>
    <div className='block'>
      <Advertising>Реклама с надписью сбоку</Advertising>
    </div>
    <Course />
    <div className='block'>
      <Tags />
    </div>
    <div className='block'>
      <Search />
    </div>
    <div className='block'>
      <Advertising>Широкая реклама по центру</Advertising>
    </div>
    <div className='block'>
      <DownOption>Погода</DownOption>
      <DownOption>Посещаемое</DownOption>
      <DownOption>Карта Германии</DownOption>
      <DownOption>Телепрограмма</DownOption>
      <DownOption>Эфир</DownOption>
    </div>
    </>
  )
}

export default App
