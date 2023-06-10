import React from 'react'

export const CardsView = (props) => {
  return (
    <div className='main'>
            {props.cards.map(i => 
                <div className='ShopCard'>
                    <h2 id="name">{i.name}</h2>
                    <h3 id="color">{i.color}</h3>  
                    <img src={i.img}></img>
                    <h2 id="price">${i.price}</h2>
                    <input type="button" id="add" value="ADD TO CARD"></input>  
                </div>)}
        </div>
  )
}
