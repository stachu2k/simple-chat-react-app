import types from 'actions/actionTypes';

function changeNickname(nickname) {
  return {
    type: types.CHANGE_NICKNAME,
    nickname,
  }
}

export {
  changeNickname,
};
