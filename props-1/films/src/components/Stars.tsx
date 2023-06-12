// import React from 'react'
import { Star } from "./Star"
import { Props } from "../../modules/modules"

export const Stars = ({count, name}:Props) => {

    const list = []
    for (let i = 0; i < count; i++) {
        list.push(i + name)
      }

  return (
    <div key={name}> <div className="mainUl">
      {count > 5 ? (
        <></>
      ) : (
        list.map(x => <span key={x}><Star/></span>)
      )} 
      </div>
    </div>
  )
}

Stars.defaultProps = {
    count: 0
}
