import { combineReducers } from 'redux';
import types from 'actions/actionTypes';

function isFetching(state = false, action) {
  switch (action.type) {
    case types.FETCH_ROOMS_REQUEST:
    case types.FETCH_ROOMS_FAILURE:
    case types.FETCH_ROOMS_SUCCESS:
      return action.isFetching;
    default:
      return state;
  }
}

function items(state = [], action) {
  switch (action.type) {
    case types.FETCH_ROOMS_SUCCESS:
      return action.items;
    default:
      return state;
  }
}

const rooms = combineReducers({
  isFetching,
  items,
})

export default rooms;
