import React, { Component } from 'react';
import { Message } from 'components';
import styles from './MessageArea.module.scss';

class MessageArea extends Component {

  render() {
    const { messages } = this.props;
    return (
      <div className={styles['message-area']}>
        {
          messages.map(message => (
            <Message key={message.id} details={message} />
          ))
        }
      </div>
    );
  }
}

export default MessageArea;
