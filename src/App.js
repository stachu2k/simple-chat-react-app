import React, { Component } from 'react';
import {
  Header,
  InputWrapper,
  SelectRoomWrapper,
} from 'components';
import {
  InputCont,
  MessageAreaCont,
  SelectRoomCont,
} from 'containers';
import 'normalize.css';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <SelectRoomWrapper>
          <SelectRoomCont />
        </SelectRoomWrapper>
        <MessageAreaCont />
        <InputWrapper>
          <InputCont />
        </InputWrapper>
      </div>
    );
  }
}

export default App;
