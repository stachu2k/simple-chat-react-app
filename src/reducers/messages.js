import { combineReducers } from 'redux';
import types from 'actions/actionTypes';

function error(state = '', action) {
  switch (action.type) {
    case types.FETCH_MESSAGES_FAILURE:
      return action.error;
    default:
     return state;
  }
}

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
    case types.SEND_MESSAGE_REQUEST:
      return [
        ...state,
        {
          id: action.message.id,
          text: action.message.text,
          author: action.message.author,
          created: action.message.created,
          room: action.message.room,
          error: action.error,
        }
      ];
    case types.SEND_MESSAGE_FAILURE:
      return state.map(message => (
        message.id === action.tempId ? {...message, error: action.error} : message
      ));
    case types.SEND_MESSAGE_SUCCESS:
      return state.map(message => (
        message.id === action.tempId ? action.message : message
      ));
    default:
      return state;
  }
}

const messages = combineReducers({
  error,
  isFetching,
  items,
})

export default messages;
