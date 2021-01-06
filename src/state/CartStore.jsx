import React, { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';

const CURRENCY_OPTIONS = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}

const initialState = { items: [] };
const store = createContext(initialState);

const { Provider } = store;

function CartProvider  ( { children } )  {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

function getTotal () {
  const total = store._currentValue.state.items.reduce((totalCost, item ) => totalCost + item.price, 0);
  return total.toLocaleString(undefined, CURRENCY_OPTIONS);
}

export { store, getTotal, CartProvider }