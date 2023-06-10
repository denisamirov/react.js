import React from 'react'

export const ListView = (props) => {
  return (
    <div className='mainList'>
    {props.items.map(i => 
        <div className='ShopItem'>
            <img src={i.img}></img>
            <h2 id="name">{i.name}</h2>
            <h3 id="color">{i.color}</h3>  
            <h2 id="price">${i.price}</h2>
            <input type="button" id="add" value="ADD TO CARD"></input>  
        </div>)}
</div>
  )
}
