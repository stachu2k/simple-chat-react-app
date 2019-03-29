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

function sendMessageRequest(message) {
  return {
    type: types.SEND_MESSAGE_REQUEST,
    message,
    error: false,
  }
}

function sendMessageFailure(tempId) {
  return {
    type: types.SEND_MESSAGE_FAILURE,
    error: true,
    tempId,
  }
}

function sendMessageSuccess(message, tempId) {
  return {
    type: types.SEND_MESSAGE_SUCCESS,
    message,
    tempId,
  }
}

export {
  fetchMessagesRequest,
  fetchMessagesFailure,
  fetchMessagesSuccess,
  sendMessageRequest,
  sendMessageFailure,
  sendMessageSuccess,
};
