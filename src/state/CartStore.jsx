import React, { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';

const initialState = [];
const store = createContext(initialState);

const { Provider } = store;

function CartProvider  ( { children } )  {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, CartProvider }