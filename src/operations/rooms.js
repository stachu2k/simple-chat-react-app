import { fetchRoomsRequest, fetchRoomsFailure, fetchRoomsSuccess} from 'actions';
import api from 'api';

function fetchRooms() {
  return function(dispatch) {
    dispatch(fetchRoomsRequest())
    return api.fetchRooms().then(
      data => dispatch(fetchRoomsSuccess(data)),
      () => dispatch(fetchRoomsFailure())
    )
  }
}

export {
  fetchRooms,
};