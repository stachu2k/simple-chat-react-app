import React, { Component } from 'react';
import { Message } from 'components';
import styles from './MessageArea.module.scss';

class MessageArea extends Component {
  componentDidMount() {
    if (this.props.selectedRoom !== 0) {
      const { selectedRoom, fetchMessages } = this.props;
      fetchMessages(selectedRoom);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedRoom !== prevProps.selectedRoom) {
      const { selectedRoom, fetchMessages } = this.props;
      fetchMessages(selectedRoom);
    }
  }

  render() {

    const { isFetching, messages } = this.props;
    
    return (
      <div className={`${styles['message-area']} ${isFetching ? styles['is-loading'] : ''}`}>
        {
          messages.map(message => (
            <Message key={message.id} {...message} />
          ))
        }
      </div>
    );
  }
}

export default MessageArea;
