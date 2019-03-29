import React, { Component } from 'react';
import styles from './SelectRoom.module.scss';

class SelectRoom extends Component {
  _changeOption = e => {
    this.props.changeRoom(parseInt(e.target.value));
  }

  render() {

    const { rooms } = this.props;

    return (
      <div className="control">
        <div className={`select ${styles['select-room']}`}>
          <select onChange={e => this._changeOption(e)}>
            {
              rooms.map(room => (
                <option key={room.id} value={room.id}>{room.name}</option>
              ))
            }
          </select>
        </div>
      </div>
    );
  }
}

export default SelectRoom;
