import api from 'api';
import {
  fetchMessagesRequest,
  fetchMessagesFailure,
  fetchMessagesSuccess,
  sendMessageRequest,
  sendMessageFailure,
  sendMessageSuccess,
} from 'actions';

function fetchMessages(selectedRoom) {
  return function(dispatch) {
    dispatch(fetchMessagesRequest());
    return api.fetchMessages(selectedRoom).then(
      data => dispatch(fetchMessagesSuccess(data)),
      () => dispatch(fetchMessagesFailure())
    )
  }
}

function sendMessage(message) {
  return function(dispatch, getState) {
    const tempId = -(getState().messages.items.length + 1);
    dispatch(sendMessageRequest(
      {
        ...message,
        id: tempId,
      }
    ));
    return api.sendMessage(message).then(
      message => dispatch(sendMessageSuccess(message, tempId)),
      () => dispatch(sendMessageFailure(tempId))
    )
  }
}

export {
  fetchMessages,
  sendMessage,
};