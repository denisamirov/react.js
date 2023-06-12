import './App.css'
import { Stars } from './components/Stars'
import {Films} from '../modules/modules'

function App() {

  const films:Films[] = [{
    name: 'joker',
    img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/84934543-5991-4c93-97eb-beb6186a3ad7/orig',
    count: 4
  }, {
     name: 'Harry Potter',
     img: 'https://cs9.pikabu.ru/post_img/2017/02/19/4/1487481861170016714.jpg',
     count: 5
  }, {
     name: 'resistor',
     img: 'https://upload.wikimedia.org/wikipedia/ru/4/4b/Resistance_%28film%2C_2020%29.jpg',
     count: 3
  }]

  return (
    <div className='main'>
      <h1>{films[0].name}</h1>
      <img src={films[0].img} alt="" />
      <Stars count={films[0].count} name={films[0].name}/>
      <h1>{films[1].name}</h1>
      <img src={films[1].img} alt="" />
      <Stars count={films[1].count } name={films[1].name}/>
      <h1>{films[2].name}</h1>
      <img src={films[2].img} alt="" />
      <Stars count={films[2].count } name={films[2].name}/>
    </div>
  )
}



export default App
