import React, { Component } from 'react';
import { InputWrapper, SelectRoomWrapper } from 'components';
import { MessageAreaCont } from 'containers';
import styles from './App.module.scss';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <div className={styles['app']}>
        <SelectRoomWrapper/>
        <MessageAreaCont/>
        <InputWrapper/>
      </div>
    );
  }
}

export default App;
