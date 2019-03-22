import React, { Component } from 'react';
import { SelectRoomCont } from 'containers';
import styles from './SelectRoomWrapper.module.scss';

class SelectRoomWrapper extends Component {
  render() {
    return (
      <div className={styles['select-room-wrapper']}>
        <SelectRoomCont/>
      </div>
    );
  }
}

export default SelectRoomWrapper;
