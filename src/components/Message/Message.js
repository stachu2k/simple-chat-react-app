import React, { Component } from 'react';
import styles from './Message.module.scss';

class Message extends Component {
  render() {
    const { author, created, text } = this.props;
    return (
      <div className={styles['message']}>
        <div>
          <strong>{author}</strong> <small>{new Date(created * 1000).toLocaleString()}</small>
        </div>
        <div>
          {text}
        </div>
      </div>
    );
  }
}

export default Message;
