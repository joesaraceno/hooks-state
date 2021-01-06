
export default function CartReducer (state, action) {
  switch (action.type) {
    case 'ADD':
      return [ ...state, action.payload ];
    case 'REMOVE':
      const newState = [ ...state ];
      const idx = newState.findIndex(item => item.name === action.payload.name);
      if (idx > -1) {
        newState.splice(idx, 1);
      }
      return newState;
    case 'EMPTY':
      return [];
    default:
      console.error(`No action found for ${action.type}`);
  }
}