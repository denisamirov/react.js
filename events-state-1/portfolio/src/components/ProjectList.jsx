// eslint-disable-next-line no-unused-vars
import React from 'react'

export const ProjectList = (props) => {

  return (
    <div>
      {props.photos.map(i => <img className="card" src={i.img} key={Math.random()}></img>)}
    </div>
  )
}
