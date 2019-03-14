import React, { Component } from 'react';
import styles from './Message.module.scss';

class Message extends Component {
  render() {
    const { details } = this.props;
    return (
      <div className={styles['message']}>
        <div>
          <strong>{details.author}</strong> <small>{details.created}</small>
        </div>
        <div>
          {details.text}
        </div>
      </div>
    );
  }
}

export default Message;
