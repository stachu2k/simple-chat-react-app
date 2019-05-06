import React, { Component } from 'react';
import styles from './SelectRoomWrapper.module.scss';

class SelectRoomWrapper extends Component {
  render() {
    return (
      <div className={styles.SelectRoomWrapper}>
        {this.props.children}
      </div>
    );
  }
}

export default SelectRoomWrapper;
