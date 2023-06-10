import React from 'react'
import { IconSwitch } from './IconSwitch'
import { CardsView } from './CardsView'
import { ListView } from './ListView'
import { products } from '../../public/products'
import { useState } from 'react'
export const Store = () => {

  const [icon, onSwitch] = useState('view_list')

  const handleIcon = () => {
    if (icon === 'view_list') {
      onSwitch('view_module')
    }
    else {
      onSwitch('view_list')
    }
  }



  return (
    <div>
      <div onClick={handleIcon}>
        <IconSwitch icon={icon}/>
      </div>
      <div>
      {icon === "view_list" ? (
        <CardsView cards={products}/>
      ) : (
        <ListView items={products}/>
      )}
      </div>
    </div>
  )
}
