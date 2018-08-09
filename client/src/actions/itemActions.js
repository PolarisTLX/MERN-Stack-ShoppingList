import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

// export const getItems = () => {
// to be able to make asynchronous requests with axios:
export const getItems = () => dispatch => {
  // return {
  //   type: GET_ITEMS
  // };
  dispatch(setItemsLoading());
  axios.get('/api/items')
       .then(res => dispatch({
           type: GET_ITEMS,
           payload: res.data
         })
       )
};

// export const deleteItem = (id) => {
export const deleteItem = (id) => dispatch => {
  // return {
  //   type: DELETE_ITEM,
  //   payload: id
  // };
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  )
};

// export const addItem = (item) => {
export const addItem = (item) => dispatch =>  {
  // return {
  //   type: ADD_ITEM,
  //   payload: item
  // };
  axios.post('/api/items', item).then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
};

export const setItemsLoading = () => {
  return {
    // this just sets it from 'false' to 'true'
    type: ITEMS_LOADING,
  };
};
