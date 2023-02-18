import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './main.css'
import React, { Component } from 'react';

class ShopItemClass extends Component {

  render() {
    return  <div className="main-content">
      <h2>{this.props.item.brand}</h2>
      <h1>{this.props.item.title}</h1>
      <h3>{this.props.item.description}</h3>
      <div className="description">
      {this.props.item.descriptionFull}
      </div>
      <div className="highlight-window mobile"> 
        <div class="highlight-overlay">
        </div>
      </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{this.props.item.currency}{this.props.item.price}.00</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
  }

}


function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

  return (
  <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemClass item={item} />
    </div>
  </div>
)
}

export default App
