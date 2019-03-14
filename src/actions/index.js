import * as ActionTypes from 'actions/actionTypes';

function sendMessage(text, author, created, room) {
  return {
    type: ActionTypes.SEND_MESSAGE,
    text,
    author,
    created,
    room,
  }
}

function changeNickname(nickname) {
  return {
    type: ActionTypes.CHANGE_NICKNAME,
    nickname,
  }
}

export { sendMessage, changeNickname };
