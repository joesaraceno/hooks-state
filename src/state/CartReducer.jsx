
export default function CartReducer (state, action) {
  const newState = { ...state };
  switch (action.type) {
    case 'ADD':
      newState.items = [ ...newState.items, action.payload ]
      return newState;
    case 'REMOVE':
      const idx = newState.items.findIndex(item => item.name === action.payload.name);
      if (idx > -1) {
        newState.items.splice(idx, 1);
      }
      return newState;
    case 'EMPTY':
      return {...state, items: []};
    default:
      console.error(`No action found for ${action.type}`);
  }
}