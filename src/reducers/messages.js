import { combineReducers } from 'redux';
import types from 'actions/actionTypes';

function isFetching(state = false, action) {
  switch (action.type) {
    case types.FETCH_MESSAGES_REQUEST:
    case types.FETCH_MESSAGES_FAILURE:
    case types.FETCH_MESSAGES_SUCCESS:
      return action.isFetching;
    default:
      return state;
  }
}

function items(state = [], action) {
  switch (action.type) {
    case types.FETCH_MESSAGES_SUCCESS:
      return action.items;
    case types.SEND_MESSAGE:
      return [
          ...state,
          {
            id: state.length + 1,
            text: action.text,
            author: action.author,
            created: action.created,
            room: action.room,
          }
        ]
    default:
      return state;
  }
}

const messages = combineReducers({
  isFetching,
  items,
})

export default messages;
