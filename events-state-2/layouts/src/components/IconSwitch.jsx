import React from 'react'
import 'material-icons/iconfont/material-icons.css'

export const IconSwitch = (props) => {
  return (
    <div  className='Icon'>
        <span className="material-icons-sharp" id={props.icon}>{props.icon}</span>
    </div>
  )
}
