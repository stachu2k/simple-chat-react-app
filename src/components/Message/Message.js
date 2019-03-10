import React, { Component } from 'react';
import styles from './Message.module.scss';

class Message extends Component {
  render() {
    return (
      <div className={styles.message}>
        <div>
          <strong>Anon5467</strong> <small>17.02.2019</small>
        </div>
        <div>
          df
        </div>
      </div>
    );
  }
}

export default Message;
