// import React from 'react'
import { Star } from "./Star"
import { Props } from "../../modules/modules"

export const Stars = ({count, name}:Props) => {

  return (
    <div key={name}> <div className="mainUl">
      {[...Array(count)].map((_, idx) => <Star key={idx} />)}
      </div>
    </div>
  )
}

Stars.defaultProps = {
    count: 0
}
