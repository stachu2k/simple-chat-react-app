import React, { Component } from 'react';
import { SelectRoom } from 'components';
import styles from './SelectRoomWrapper.module.scss';

class SelectRoomWrapper extends Component {
  render() {
    return (
      <div className={styles['select-room-wrapper']}>
        <SelectRoom/>
      </div>
    );
  }
}

export default SelectRoomWrapper;
