import types from 'actions/actionTypes';

function selectedRoom(state = 0, action) {
  switch (action.type) {
    case types.CHANGE_ROOM:
      return action.id;
    default:
      return state;
  }
}

export default selectedRoom;
