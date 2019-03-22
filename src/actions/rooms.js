import types from 'actions/actionTypes';

function fetchRoomsRequest() {
  return {
    type: types.FETCH_ROOMS_REQUEST,
    isFetching: true,
  }
}

function fetchRoomsFailure() {
  return {
    type: types.FETCH_ROOMS_FAILURE,
    isFetching: false,
  }
}

function fetchRoomsSuccess(items) {
  return {
    type: types.FETCH_ROOMS_SUCCESS,
    isFetching: false,
    items,
  }
}

export {
  fetchRoomsRequest,
  fetchRoomsFailure,
  fetchRoomsSuccess,
}
