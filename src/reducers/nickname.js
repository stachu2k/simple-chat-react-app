import types from 'actions/actionTypes';

function nickname(state = '', action) {
  switch (action.type) {
    case types.CHANGE_NICKNAME:
      return action.nickname;
    default:
      return state;
  }
}

export default nickname;
