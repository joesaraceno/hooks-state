import React, { useContext } from 'react';
import { store, getTotal } from '../state/CartStore';

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

export default function Product() {
  const cart = useContext(store);
  const { dispatch } = cart;

  function add(product) {
    dispatch({ payload: { ...product }, type: 'ADD' });
  }
  
  function remove(product) {
    dispatch({ payload: { ...product }, type: 'REMOVE' });
  }

  function empty() {
    dispatch({ type: 'EMPTY' })
  }

  return (
    <div>
      <div>
        Shopping Cart #1: {cart.state.items.length} items. 
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
        <button onClick={() => empty()}>Empty Cart</button>
      </div>
    </div>
  );
}