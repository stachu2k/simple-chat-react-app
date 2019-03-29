import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

function fetchRooms() {
  return axios.get(`${API_URL}rooms/`)
    .then(response => Promise.resolve(response.data))
    .catch(error => Promise.reject(error));
}

function fetchMessages(selectedRoom) {
  return axios.get(`${API_URL}rooms/${selectedRoom}/messages/`)
    .then(response => Promise.resolve(response.data))
    .catch(error => Promise.reject(error));
}

function sendMessage(message) {
  return axios.post(`${API_URL}messages/`, message)
  .then(response => Promise.resolve(response.data))
  .catch(error => Promise.reject(error));
}

export default {
  fetchRooms,
  fetchMessages,
  sendMessage,
}