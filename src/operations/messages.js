import { fetchMessagesRequest, fetchMessagesFailure, fetchMessagesSuccess} from 'actions';
import api from 'api';

function fetchMessages(selectedRoom) {
  return function(dispatch) {
    dispatch(fetchMessagesRequest());
    return api.fetchMessages(selectedRoom).then(
      data => dispatch(fetchMessagesSuccess(data)),
      () => dispatch(fetchMessagesFailure())
    )
  }
}

export {
  fetchMessages,
};