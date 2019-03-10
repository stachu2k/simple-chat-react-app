import React, { Component } from 'react';
import styles from './SelectRoom.module.scss';

class SelectRoom extends Component {
  render() {
    return (
      <div className="control">
        <div class={`${styles['select-room']} select`}>
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SelectRoom;
