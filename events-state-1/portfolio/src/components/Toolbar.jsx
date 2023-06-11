import React from 'react'

export const Toolbar = (props) => {
  return (
    <div>{props.filter.map(i => 
      <span key={i} onClick={() => 
        props.onChangeCategory(i)}>{i}
      </span>)}
    </div>
  )
}

