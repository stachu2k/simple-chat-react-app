import { combineReducers } from 'redux';
import nickname from './nickname';
import messages from './messages';

const chatApp = combineReducers({
  nickname,
  messages,
});

export default chatApp;
