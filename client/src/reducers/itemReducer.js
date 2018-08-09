// import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
  // needed static data before tying in backend:
  // items: [
  //   { id: uuid(), name: 'Eggs' },
  //   { id: uuid(), name: 'Milk' },
  //   { id: uuid(), name: 'Bread' },
  //   { id: uuid(), name: 'PeanutButter' }
  // ]
  // now with Express backend, no static data needed:
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        // reset loading to false after the request is done:
        loading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        // we are making a copy of the state here, not actually mutating it, Redux principle
        items: state.items.filter(item => item._id !== action.payload)  //action.payload is the id, see itemActions.js
      };
    case ADD_ITEM:
      return {
        ...state,
        // we are making a copy of the state here, not actually mutating it, Redux principle
        items: [action.payload, ...state.items]  //action.payload is the id, see itemActions.js
      };
    case ITEMS_LOADING:
      return {
        ...state,
        // we are making a copy of the state here, not actually mutating it, Redux principle
        loading: true
      };
    default:
      return state;
  }
}
