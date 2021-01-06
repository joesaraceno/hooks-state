import React, { useContext } from 'react';
import { store } from '../state/CartStore';

const CURRENCY_OPTIONS = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}

const products = [
  {
    emoji: '🍦', 
    name: 'ice cream',
    price: 5,
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 2.5,
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }
]

function getTotal (cart) {
  const total = cart.state.reduce((totalCost, item ) => totalCost + item.price, 0);
  return total.toLocaleString(undefined, CURRENCY_OPTIONS);
}

export default function Product2() {
  const cart = useContext(store);
  const { dispatch } = cart;

  function add(product) {
    dispatch({ payload: { ...product }, type:'ADD' });
  }
  
  function remove(product) {
    dispatch({ payload: { ...product }, type:'REMOVE' });
  }

  function empty() {
    dispatch({ type: 'EMPTY' })
  }

  return (
    <div>
      <div>
        Shopping Cart #1: {cart.state.length} items. 
      </div>
      <div>Total: { getTotal(cart) }</div>
      <div>
        {
          products.map(product => {
            return (
              <div>
                <div key={product.name}>
                  <span>{product.emoji} - {product.name}</span>
                </div>
                <button onClick={() => add(product)}>Add</button>
                <button onClick={() => remove(product)}>Remove</button>
              </div>
            )
          })
        }
        <button onClick={() => empty()}>empty Cart</button>
      </div>
    </div>
  );
}