import React from 'react'
import { useState } from 'react'
import { photo } from '../../public/photo'
import { ProjectList } from './ProjectList'
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

  const handleFilterChange = (i) => {
    setState(i)
    }

  return (
    <div>
        <div>
          <Toolbar filter={filters} onChangeCategory={handleFilterChange}/>
        </div>
          <ProjectList photos={photos} selected={selected} />
    </div>
    
  )
}
