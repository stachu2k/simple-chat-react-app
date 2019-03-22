import { combineReducers } from 'redux';
import messages from './messages';
import nickname from './nickname';
import rooms from './rooms';
import selectedRoom from './selectedRoom';

const chatApp = combineReducers({
  messages,
  nickname,
  rooms,
  selectedRoom,
});

export default chatApp;
