import types from 'actions/actionTypes';

function fetchMessagesRequest() {
  return {
    type: types.FETCH_MESSAGES_REQUEST,
    isFetching: true,
  }
}

function fetchMessagesFailure() {
  return {
    type: types.FETCH_MESSAGES_FAILURE,
    isFetching: false,
    error: 'Nie można pobrać wiadomości',
  }
}

function fetchMessagesSuccess(items) {
  return {
    type: types.FETCH_MESSAGES_SUCCESS,
    isFetching: false,
    items,
  }
}

function sendMessage(text, author, created, room) {
  return {
    type: types.SEND_MESSAGE,
    text,
    author,
    created,
    room,
  }
}

export {
  fetchMessagesRequest,
  fetchMessagesFailure,
  fetchMessagesSuccess,
  sendMessage,
};
