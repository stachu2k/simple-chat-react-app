import * as ActionTypes from 'actions/actionTypes';

function messages(state = [], action) {
  switch (action.type) {
    case ActionTypes.SEND_MESSAGE:
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

export default messages;
