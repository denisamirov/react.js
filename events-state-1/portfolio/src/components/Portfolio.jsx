import React from 'react'
import { useState } from 'react'
import { photo } from '../../public/photo'
import { ProjectList } from './projectList'
import { Toolbar } from './Toolbar'

export const Portfolio = () => {  
  const filters=["All", "Websites", "Flayers", "Business Cards"] 
  const selected="All";
  const [state, setState] = useState(selected)


  let photos = []
    if (state !== 'All') {
      photos = photo.filter((photo) => photo.category === state) 
    } else {
      photos = photo
    }


    const handleFilterChange = (event) => {
      setState(event.target.value)
      console.log(state)
     }

  return (
    <div>
        <div onClick={handleFilterChange}><Toolbar filter={filters}/></div>
        <ProjectList photos={photos} selected={selected} />
    </div>
    
  )
}
