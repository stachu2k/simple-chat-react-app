import * as ActionTypes from 'actions/actionTypes';

function nickname(state = '', action) {
  switch (action.type) {
    case ActionTypes.CHANGE_NICKNAME:
      return action.nickname;
    default:
      return state;
  }
}

export default nickname;
