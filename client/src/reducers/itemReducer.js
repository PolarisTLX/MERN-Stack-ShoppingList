import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'Eggs' },
    { id: uuid(), name: 'Milk' },
    { id: uuid(), name: 'Bread' },
    { id: uuid(), name: 'PeanutButter' }
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    case DELETE_ITEM:
      return {
        ...state,
        // we are making a copy of the state here, not actually mutating it, Redux principle
        items: state.items.filter(item => item.id !== action.payload)  //action.payload is the id, see itemActions.js
      };
    case ADD_ITEM:
      return {
        ...state,
        // we are making a copy of the state here, not actually mutating it, Redux principle
        items: [action.payload, ...state.items]  //action.payload is the id, see itemActions.js
      };
    default:
      return state;
  }
}
