import React from 'react'
import { useState } from 'react'
import { photo } from '../../public/photo'

export const Portfolio = () => {
    const filters=["All", "Websites", "Flayers", "Business Cards"] 
    const selected="All";
    const [state, setState] = useState(selected)

    const listItems = filters.map((filter) =>
    <input type="button" key={filter} value={filter} readOnly></input>
    )

    const pictures = photo.map(i =>
        <img key={i.img.slice(50,60)+Math.random()} src={i.category == 
          state || state == 'All' ? i.img: ''}></img>
        )

    const handleFilterChange = (event) => {
        setState(event.target.value)
    }

  return (
    <div>
        < div className='ContainerButtons' onClick={handleFilterChange}>{listItems}</div>
        <div className="container">{pictures}</div>
    </div>
    
  )
}
