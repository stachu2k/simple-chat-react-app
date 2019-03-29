import React, { Component } from 'react';
import { convertUTCDateToLocalDate } from 'lib';
import styles from './Message.module.scss';

class Message extends Component {
  render() {
    const { author, created, text } = this.props;
    const localizedDate = convertUTCDateToLocalDate(new Date(created * 1000));
    return (
      <div className={styles['message']}>
        <div>
          <strong>{author}</strong> <small>{localizedDate.toLocaleString()}</small>
        </div>
        <div>
          {text}
        </div>
      </div>
    );
  }
}

export default Message;
