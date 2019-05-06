import React, { Component } from 'react';
import { convertLocalDateToUTCDate } from 'lib';

class Input extends Component {
  _input = undefined;

  _submitForm = e => {
    e.preventDefault();

    if (!this._input.value.trim()) {
      return;
    }

    const UTCDate = convertLocalDateToUTCDate(new Date());

    this.props.sendMessage({
      text: this._input.value,
      author: this.props.nickname,
      created: ~~(UTCDate.getTime() / 1000),
      room: this.props.selectedRoom,
    });

    this._input.value = '';
  }

  render() {
    return (
      <form onSubmit={e => this._submitForm(e)}>
        <div>
          <div>
            <input
              type="text"
              placeholder="write message"
              ref={el => this._input = el}
            />
          </div>
          <div>
            <input type="submit" value="Send"/>
          </div>
        </div>
      </form>
    );
  }
}

export default Input;
