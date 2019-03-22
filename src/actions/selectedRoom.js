import types from 'actions/actionTypes';

function changeRoom(id) {
  return {
    type: types.CHANGE_ROOM,
    id,
  }
}

export {
  changeRoom,
};
