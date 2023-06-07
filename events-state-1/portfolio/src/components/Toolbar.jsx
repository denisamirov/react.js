import React from 'react'

export const Toolbar = (props) => {
  return (
    <div>{props.filter.map(i => <input type="button" value={i} readOnly></input>)}</div>
  )
}
